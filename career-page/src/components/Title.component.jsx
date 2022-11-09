import React from "react";
import { Typography, Box, colors } from "@mui/material";
function Title({ name, value }) {
  return (
    <>
      <Typography
        component="h3"
        variant="h3"
        color="primary"
        align="center"
        name={name}
        value={value}
        sx={{
          bgcolor: colors.grey[500],
          fontWeight: 700,
        }}
        gutterBottom
      >
        Login Portal
      </Typography>
    </>
  );
}

export default Title;
