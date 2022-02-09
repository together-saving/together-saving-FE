import React from "react";
import styled from "styled-components";

const MODE = ["자율모드", "경쟁모드"];

const Thumbnail = ({ thumbnail, mode }) => {
  return (
    <>
      <Size thumbnail={thumbnail} />
      <Mode>
        <Text>{mode === "FREE" ? MODE[0] : MODE[1]}</Text>
      </Mode>
    </>
  );
};

const Size = styled.div`
  width: ${({ theme }) => theme.viewSize.mobile};
  height: 270px;
  background-image: url(${(props) => props.thumbnail});
  background-size: cover;
  position: relative;
`;

const Mode = styled.div`
  width: 67px;
  height: 28px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 326px;
  right: 16px;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.colorWhite};
  font-weight: ${({ theme }) => theme.fontWeights.weightBold};
  font-size: ${({ theme }) => theme.fontSize.fontXSmall};
`;

export default Thumbnail;
