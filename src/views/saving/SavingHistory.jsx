import React, { useState } from "react";
import styled from "styled-components";
import AutoSavingButton from "./AutoSavingButton";
import SavingHistoryList from "./SavingHistoryList";
import SavingStartButton from "./SavingStartButton";
import useNumberComma from "../../hooks/useNumberComma";
import defaultThumbnail from "../../images/Character.png";

const SavingHistory = ({
  id,
  filter,
  savingHistory,
  challengeInfo,
  statusInfo,
}) => {
  const { challenge_payment } = challengeInfo.data;
  const { saving_rate } = statusInfo.data;

  const {
    account_number,
    balance,
    bank_name,
    saving_history,
    is_automated,
    thumbnail,
  } = savingHistory.data;

  const [isAuto, setIsAuto] = useState(is_automated);

  const personalBalance = useNumberComma(balance);

  const handleAuto = (auto) => {
    setIsAuto(auto);
  };

  return (
    <>
      <SavingHistoryContainer>
        <Title>연결된 계좌</Title>
        <AccountInfoContainer>
          <AccountInfo>
            <BankThumbnail
              src={!thumbnail && defaultThumbnail}
              alt="thumbnail"
            />
            <AccountTextContainer>
              <AccountText>{bank_name}</AccountText>
              <AccountText>{account_number}</AccountText>
            </AccountTextContainer>
            <PriceText>{personalBalance}원</PriceText>
          </AccountInfo>
        </AccountInfoContainer>
        <SavingHistoryList
          id={id}
          filter={filter}
          historyList={saving_history}
        />
        <AutoSavingButton id={id} isAuto={isAuto} onHandleAuto={handleAuto} />
      </SavingHistoryContainer>
      <SavingStartButton
        bank={bank_name}
        account={account_number}
        isAuto={isAuto}
        defaultPrice={challenge_payment}
        savingRate={saving_rate}
      />
    </>
  );
};

const SavingHistoryContainer = styled.div`
  padding: 30px 16px;
  height: 550px;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.colorDarkGray1};
  font-size: ${({ theme }) => theme.fontSize.fontSmall};
  font-weight: ${({ theme }) => theme.fontWeights.weightBold};
  margin-bottom: 8px;
`;

const AccountInfoContainer = styled.div`
  height: 96px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.colorLightGray4};
  margin-bottom: 30px;
`;

const AccountInfo = styled.div`
  width: 100%;
  display: flex;
`;

const BankThumbnail = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-right: 16px;
`;

const AccountTextContainer = styled.div`
  flex-grow: 1;
`;

const AccountText = styled.p`
  &:first-child {
    color: ${({ theme }) => theme.colors.colorBlack};
    font-size: ${({ theme }) => theme.fontSize.fontSmall};
    font-weight: ${({ theme }) => theme.fontWeights.weightNormal};
    line-height: 23px;
    margin-bottom: 2px;
  }

  &:nth-child(2) {
    color: ${({ theme }) => theme.colors.colorLightGray1};
    font-size: ${({ theme }) => theme.fontSize.fontXSmall};
    font-weight: ${({ theme }) => theme.fontWeights.weightNormal};
    text-decoration: underline;
    text-underline-position: under;
    line-height: 20px;
  }
`;

const PriceText = styled.p`
  color: ${({ theme }) => theme.colors.colorDarkGray1};
  font-size: ${({ theme }) => theme.fontSize.fontSmall};
  font-weight: ${({ theme }) => theme.fontWeights.weightNormal};

  &:first-of-type {
    align-self: flex-end;
  }
`;

export default SavingHistory;
