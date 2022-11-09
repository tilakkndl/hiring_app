import React from "react";
import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";
function Select({ name, value, data, setData, handleChange }) {
  //   const handleChange = (e) => {
  //     const name = e.target.name;
  //     const { value } = e.target;
  //     setData({ ...data, [name]: value });
  //   };
  return (
    <div>
      <TextField
        select
        color="primary"
        helperText="select  qulification"
        label="Qualification"
        value={value}
        name={name}
        onChange={handleChange}
        sx={{ paddingRight: 47 }}
        fullWidth
      >
        <MenuItem value="High School">High School</MenuItem>
        <MenuItem value="Bachelor">Bachelor</MenuItem>
        <MenuItem value="Master">Master</MenuItem>
        <MenuItem value="PHD">PHD</MenuItem>
      </TextField>
    </div>
  );
}

export default Select;
