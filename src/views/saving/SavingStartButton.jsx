import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";
import { useParams } from "react-router-dom";

const SavingStartButton = ({
  bank,
  account,
  defaultPrice,
  isAuto,
  savingRate,
}) => {
  const { id } = useParams();

  return (
    <SavingButtonContainer>
      <Link
        to={`/saving/${id}/deposit`}
        state={{ bank, account, defaultPrice, id }}
      >
        <Button isAuto={isAuto} disabled={savingRate === 100 ? isAuto : isAuto}>
          저축하기
        </Button>
      </Link>
    </SavingButtonContainer>
  );
};

const SavingButtonContainer = styled.div`
  height: 90px;
  background-color: white;
  padding: 8px 16px 34px;
  border-top: 1px solid ${({ theme }) => theme.colors.colorLightGray4};
  position: fixed;
  bottom: 0;
`;

export default SavingStartButton;
