import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Portal from "../../components/Portal";
import DepositKeypad from "./DepositKeypad";
import { useDispatch } from "react-redux";
import { requestSaving } from "../../redux/reducers/savingRequestReducer";
import useNumberComma from "../../hooks/useNumberComma";

const DepositView = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { bank, account, defaultPrice, id } = location.state;

  const [inputPrice, setInputPrice] = useState("");
  const [isShowKeypad, setIsShowKeypad] = useState(false);
  const [isNull, setIsNull] = useState(true);

  const handleShowKeypad = () => {
    setIsShowKeypad(true);
  };

  const handleInputPrice = (price) => {
    const maxLength = defaultPrice.length;
    price = price.slice(0, maxLength);

    if (Number(price) > Number(defaultPrice)) price = defaultPrice;

    handleNullCheck(price);
    setInputPrice(price);
  };

  const handleNullCheck = (price) => {
    price ? setIsNull(false) : setIsNull(true);
  };

  const handleSubmit = () => {
    inputPrice && dispatch(requestSaving(id, Number(inputPrice)));
  };

  return (
    <>
      <DepositViewContainer>
        <DepositAccount>
          <Text>
            <Span>내 {bank}(CMA) 계좌</Span>로
          </Text>
          <Text>{account}</Text>
        </DepositAccount>
        <Input
          type="text"
          value={inputPrice && `${useNumberComma(inputPrice)}원`}
          onChange={handleInputPrice}
          placeholder={
            defaultPrice && `${useNumberComma(defaultPrice)}원 입력하세요`
          }
          onFocus={handleShowKeypad}
        />
        {inputPrice !== "" && inputPrice < defaultPrice && (
          <WarningLabel>
            <Text>
              {defaultPrice > 10000
                ? `${defaultPrice / 10000}만원 `
                : `${defaultPrice / 1000}천원 `}
              보다 적게 저축하면 달성률이 떨어질 수 있어요
            </Text>
          </WarningLabel>
        )}
        <ButtonContainer>
          <Link to={`/saving/${id}/success`}>
            <Button isNull={isNull} disabled={isNull} onClick={handleSubmit}>
              저축하기
            </Button>
          </Link>
        </ButtonContainer>
      </DepositViewContainer>
      {isShowKeypad && (
        <Portal>
          <DepositKeypad
            inputPrice={inputPrice}
            onHandleInput={handleInputPrice}
          />
        </Portal>
      )}
    </>
  );
};

const DepositViewContainer = styled.div`
  padding: 40px 16px 0;
`;

const DepositAccount = styled.div`
  margin-bottom: 46px;
`;

const Text = styled.p`
  &:nth-child(1) {
    margin-bottom: 6px;
  }

  &:nth-child(2) {
    color: ${({ theme }) => theme.colors.colorLightGray1};
    font-size: ${({ theme }) => theme.fontSize.fontXSmall};
    font-weight: ${({ theme }) => theme.fontWeights.weightNormal};
    text-decoration: underline;
    text-underline-position: under;
  }
`;

const Span = styled.span`
  color: ${({ theme }) => theme.colors.colorDarkGary1};
  font-size: ${({ theme }) => theme.fontSize.fontSmall};
  font-weight: ${({ theme }) => theme.fontWeights.weightBold};
`;

const Input = styled.input`
  color: ${({ theme }) => theme.colors.colorDarkGray1};
  font-size: ${({ theme }) => theme.fontSize.fontXLarge};
  font-weight: ${({ theme }) => theme.fontWeights.weightNormal};
  margin-bottom: 18px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.colorLightGray1};
  }
`;

const WarningLabel = styled.div`
  height: 28px;
  border-radius: 6px;
  padding: 6px 8px;
  background-color: ${({ theme }) => theme.colors.colorLightGray2};
  position: absolute;

  ${Text}:nth-child(1) {
    color: ${({ theme }) => theme.colors.colorBlue2};
    font-size: ${({ theme }) => theme.fontSize.fontXSmall};
    line-height: 16px;
  }
`;

const ButtonContainer = styled.div`
  position: fixed;
  bottom: 0;
`;
export default DepositView;
