import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import ChallengeContainer from "./pages/challenge/ChallengeContainer";
import Saving from "./pages/saving/Saving";
import styled from "styled-components";
import SavingDeposit from "./pages/saving/SavingDeposit";
import SavingSuccess from "./views/deposit/SavingSuccess";
import ChallengePaymentContainer from "./pages/challenge/ChallengePaymentContainer";
import ChallengePaymentSuccess from "./pages/challenge/ChallengePaymentSuccess";
import MoreShow from "./pages/MoreShow/MoreShow";
import cookie from "react-cookies";

const App = () => {
  const accessToken = process.env.Token;

  useEffect(() => {
    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + 60);
    cookie.save("token", accessToken, {
      path: "/",
      expires,
    });
  }, []);

  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/challenge/:id" element={<ChallengeContainer />} />
        <Route
          path="/challenge/payment"
          element={<ChallengePaymentContainer />}
        />
        <Route
          path="/challenge/success"
          element={<ChallengePaymentSuccess />}
        />
        <Route path="/saving" element={<Saving />} />
        <Route path="/saving/deposit" element={<SavingDeposit />} />
        <Route path="/saving/success" element={<SavingSuccess />} />
        <Route path="/moreshow/:name" element={<MoreShow />} />
      </Routes>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.viewSize.mobile};
`;

export default App;
