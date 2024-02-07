import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
  Grid,
  Button,
} from "@mui/material";

const style = {
  width: "200%",
  maxWidth: 1000,
  bgcolor: "background.paper",
  //   display: "flex",
  justifyContent: "center",
  alignItem: "center",
};

function MCQ({ question, options, result, index, setResult }) {
  const handleChange = (e) => {
    const { value } = e.target;
    result[index] = value * 1;
    setResult(result);
    console.log(result);
  };
  return (
    <Grid
      container
      //   direction="column"
      alignItems="center"
      justifyContent="center"
      //   style={{ minHeight: '100vh' }}
    >
      <Grid item xs={3}>
        <Box>
          <List sx={style} component="nav" aria-label="mailbox folders">
            <ListItem sx={{ paddingRight: 30 }}>
              <ListItemText primary={question} />
            </ListItem>
            <Divider light sx={{ paddingRight: 30 }} />
          </List>

          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue={0}
              name="radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                value={0}
                control={<Radio />}
                label={options[0]}
              />
              <FormControlLabel
                value={1}
                control={<Radio />}
                label={options[1]}
              />
              <FormControlLabel
                value={2}
                control={<Radio />}
                label={options[2]}
              />
              <FormControlLabel
                value={3}
                control={<Radio />}
                label={options[3]}
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </Grid>
    </Grid>
  );
}

export default MCQ;
