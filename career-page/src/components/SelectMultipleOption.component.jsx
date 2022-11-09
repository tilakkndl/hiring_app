import React from "react";
import { Box, TextField, MenuItem } from "@mui/material";
function SelectMultipleOption({
  value,
  data,
  setData,
  label,
  name,
  helperText,
  options,
  multipleOption,
}) {
  const handleChange = (e) => {
    const name = e.target.name;
    let { value } = e.target;
    // value = value ? value.split(",") : value;
    setData({ ...data, [name]: value });
    console.log(data);
  };

  return (
    <div>
      <TextField
        label={label}
        select
        value={value}
        name={name}
        onChange={handleChange}
        SelectProps={{
          multiple: multipleOption,
        }}
        size="small"
        color="primary"
        helperText={helperText}
        sx={{ paddingRight: 47 }}
        fullWidth
      >
        {options.map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
}

export default SelectMultipleOption;
