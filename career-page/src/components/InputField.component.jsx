import React from "react";
import TextField from "@mui/material/TextField";

function InputField({ label, name, value, data, setData, handleChange }) {
  //   const handleChange = (e) => {
  //     const name = e.target.name;
  //     const value = e.target.value;
  //     setData({ ...data, [name]: value });
  //   };
  return (
    <>
      <TextField
        label={label}
        variant="outlined"
        required
        size="small"
        name={name}
        value={value}
        sx={{ width: 500, display: "inlineBlock" }}
        onChange={handleChange}
        color="primary"
      />
    </>
  );
}

export default InputField;
