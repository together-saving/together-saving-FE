import React from "react";
import styled from "styled-components";
import SavingStatusContainer from "../../pages/saving/SavingStatusContainer";
import DivisionLine from "../../components/DivisionLine";
import SavingHistoryContainer from "../../pages/saving/SavingHistoryContainer";
import SavingLankingContainer from "../../pages/saving/SavingLankingContainer";
import SavingCommunicationContainer from "../../pages/saving/SavingCommunicationContainer";

const SavingTabMenu = ({ currentTab, onChangeTab, id }) => {
  const components = {
    0: (
      <>
        <SavingStatusContainer id={id} />
        <DivisionLine />
        <SavingHistoryContainer id={id} />
      </>
    ),
    1: (
      <>
        <SavingLankingContainer />
        <SavingCommunicationContainer />
      </>
    ),
  };

  const handleChangeTab = (e) => {
    onChangeTab(e.target.value);
  };

  return (
    <>
      <MenuListContainer>
        <MenuList onClick={handleChangeTab} value={0} current={currentTab}>
          내 저축현황
        </MenuList>
        <MenuList onClick={handleChangeTab} value={1} current={currentTab}>
          소통
        </MenuList>
      </MenuListContainer>
      <MenuContentContainer>
        {currentTab === 0 ? components[0] : components[1]}
      </MenuContentContainer>
    </>
  );
};

const MenuListContainer = styled.ul`
  height: 52px;
  display: flex;
`;

const MenuList = styled.li`
  font-size: ${({ theme }) => theme.fontSize.fontSmall};
  color: ${({ theme }) => theme.colors.colorGray3};
  font-weight: ${({ theme }) => theme.fontWeights.weightNormal};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 100%;
  cursor: pointer;

  ${(props) =>
    props.value === props.current &&
    `
  color: #3178FF;
  font-weight: 700;
  border-bottom: 2px solid #3178FF`}
`;

const MenuContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default SavingTabMenu;
