import React from "react";
import { useLocation } from "react-router-dom";
import { Button, Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MCQ from "../components/MCQ.component";

function Test() {
  const navigate = useNavigate();
  const [result, setResult] = useState([0, 0, 0, 0, 0]);
  console.log(result);
  const location = useLocation();
  let data = location.state.data;
  data = data.question[0].questions;
  console.log(data);
  const role = location.state.role;
  const email = location.state.email;
  const name = location.state.name;
  console.log(role, email, name);

  const handleSubmit = () => {
    // console.log(data);
    // console.log(result);
    let totalScore = 0;
    for (let i = 0; i < 5; i++) {
      if (data[i].correctChoice === result[i]) {
        totalScore = totalScore + 1;
      }
    }
    console.log(role, email, name, totalScore, data.length);
    //making post request for storing result
    const res = fetch("/api/v1/result", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        noOfQuestions: data.length,
        scoredMarks: totalScore,
        name: name,
        role: role,
        email: email,
      }),
    });

    //navigating to the result route
    navigate("/result", {
      state: { role: role, email: email, name: name },
    });
  };

  return (
    <>
      {data.map((obj, index) => (
        <MCQ
          key={obj._id}
          question={obj.qsn}
          options={obj.options}
          index={index}
          result={result}
          setResult={setResult}
        />
      ))}
      <Box align="center" sx={{ margin: 12 }}>
        <Button variant="contained" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </>
  );
}

export default Test;
