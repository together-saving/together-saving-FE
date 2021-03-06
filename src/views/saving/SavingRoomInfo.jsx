import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { challengeDayKor } from "../../utils/engDataRegex";
import useRemainDay from "../../hooks/useRemainDay";
import useRemainWeek from "../../hooks/useRemainWeek";

const SavingRoomInfo = ({ challengeInfo }) => {
  const {
    challenge_id,
    thumbnail,
    challenge_name,
    challenge_frequency,
    end_date,
    start_date,
  } = challengeInfo;

  const startDay = start_date.slice(2, 10).replaceAll("-", ".");
  const endDay = end_date.slice(5, 10).replaceAll("-", ".");

  const weeklySavingDays = challenge_frequency
    .map((item) => challengeDayKor(item))
    .join(",");
  const weeklySavingTimes = challenge_frequency.length;

  const remainDay = useRemainDay(end_date);
  const remainWeek = useRemainWeek(start_date, end_date);

  return (
    <InfoContainer>
      <InfoThumbnail src={thumbnail} alt="thumbnail" />
      <InfoTextContainer>
        <Link to={`/challenge/${challenge_id}`}>
          <Title>{challenge_name}</Title>
        </Link>
        <Text>
          {remainDay === 0
            ? "챌린지 종료일입니다."
            : remainDay < 0
            ? "종료된 챌린지입니다."
            : `${startDay} - ${endDay} ${remainDay}일 뒤 종료`}
        </Text>
        <Text>{`${weeklySavingDays} - 주${weeklySavingTimes}일 / ${remainWeek}주차`}</Text>
      </InfoTextContainer>
    </InfoContainer>
  );
};

const InfoContainer = styled.div`
  height: 97px;
  padding: 14px 16px;
  display: flex;
`;

const InfoThumbnail = styled.img`
  width: 92px;
  height: 70px;
  border-radius: 5px;
  margin-right: 16px;
`;

const InfoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.colordarkGray1};
  font-size: ${({ theme }) => theme.fontSize.fontMideum};
  font-weight: ${({ theme }) => theme.fontWeights.weightBold};
  margin-bottom: 10px;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.colorLightGray1};
  font-size: ${({ theme }) => theme.fontSize.fontSmall};
  font-weight: ${({ theme }) => theme.fontWeights.weightNormal};
`;

export default SavingRoomInfo;
