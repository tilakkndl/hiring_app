import React from "react";
import { Box, Grid, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
function Submitted() {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state.email;
  const role = location.state.role.toLowerCase();
  const name = location.state.name;
  console.log(email, role, name);
  const handleClick = async () => {
    let res = await fetch(`/api/v1/questions?role=${role}`);
    res = await res.json();
    console.log(res);

    navigate("/test", {
      state: { data: res.data, role: role, email: email, name: name },
    });
  };
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item>
          <h1>Let's take a test</h1>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={handleClick}>
            Start Test
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Submitted;
