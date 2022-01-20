import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Mockdata from "../../modules/challenge.json";
import Tags from "./Tags";
import ChallengeSummary from "./ChallengeSummary.jsx";

const ChallengeDetails = () => {
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       setLoading(true);
  //       const challengeData = await axios.post("api/v1/auth/challenges", {
  //         challenge_id : "challenge_id"
  //       })
  //       if(challengeData.status === 200) {
  //         setData([challengeData.data]);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   })();
  // },[])

  // if(loading) {
  //   return <h2>로딩중...</h2>
  // }
  useEffect(() => {
    setData(Mockdata.data);
    console.log(Mockdata.data);
  }, []);

  return (
    <Container>
      <Inner>
        <Tags tags={data.tags} />
        <ChallengeSummary
          challenge_name={data.challenge_name}
          start_date={data.start_date}
          end_date={data.end_date}
          challenge_frequency={data.challenge_frequency}
          challenge_payment={data.challenge_payment}
          challenge_entry_fee={data.challenge_entry_fee}
          challenge_members={data.challenge_members}
        />
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  width: ${({ theme }) => theme.viewSize.mobile};
  height: 1000px;
  border: 2px solid black;
`;

const Inner = styled.div`
  width: 343px;
  border: 2px solid black;
  margin: ${({ theme }) => theme.margins.marginCenter};
`;

export default ChallengeDetails;
