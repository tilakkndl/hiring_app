import React from "react";

import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import InputField from "./components/InputField.component";
import Title from "./components/Title.component";
import { useState } from "react";
import { Box, Grid, Button, Typography } from "@mui/material";
import Select from "./components/Select.component";
import Form from "./Form";
import SelectMultipleOption from "./components/SelectMultipleOption.component";

function Career() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    github_account: "",
    email: "",
    qualification: "",
    skills: [],
    role: "",
    file: "",
  });
  const optionSkill = [
    "HTML",
    "CSS",
    "Javascript",
    "reactjs",
    "angular",
    "vuejs",
    "nodejs",
    "express",
    "django",
    "mongodb",
    "SQL",
    "Python",
    "Java",
  ];
  const optionRole = [
    "Frontend developer",
    "Backend developer",
    "FullStack developer",
    "QA",
    "UI/UX",
  ];

  const handleFileChange = (e) => {
    let files = e.target.files;
    let reader = new FileReader();

    reader.readAsDataURL(files[0]);

    reader.onload = (e) => {
      const formatData = { file: e.target.result };
      data.file = formatData.file;
      console.log(formatData.file);
    };
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const { value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    const {
      first_name,
      last_name,
      phone_number,
      email,
      qualification,
      skills,
      role,
      github_account,
      file,
    } = data;
    const res = fetch("/api/v1/careers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: first_name,
        lastName: last_name,
        email: email,
        phone: phone_number,
        githubAccount: github_account,
        qualification,
        skills,
        role,
        file,
      }),
    });
    // const info = await res.json();
    // console.log(info);
    navigate("/submitted", { state: { role: data.role, email: data.email, name: data.first_name } });
  };
  return (
    <>
      <Title />
      <Box>
        <form method="POST">
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            columnSpacing={3}
            rowSpacing={3}
          >
            <Grid item>
              <InputField
                label="First Name"
                name="first_name"
                value={data.first_name}
                data={data}
                setData={setData}
                handleChange={handleChange}
              />
            </Grid>
            <Grid item>
              <InputField
                label="Last Name"
                name="last_name"
                value={data.last_name}
                data={data}
                setData={setData}
                handleChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <InputField
                label="Email"
                name="email"
                value={data.email}
                data={data}
                setData={setData}
                handleChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <InputField
                label="Github Account"
                name="github_account"
                value={data.github_account}
                data={data}
                setData={setData}
                handleChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <InputField
                label="Phone number"
                name="phone_number"
                value={data.phone_number}
                data={data}
                setData={setData}
                handleChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <SelectMultipleOption
                name="role"
                label="Role"
                helperText="Select your Role"
                data={data}
                setData={setData}
                value={data.role}
                options={optionRole}
                multipleOption={false}
              />
            </Grid>

            <Grid item xs={12}>
              <SelectMultipleOption
                name="skills"
                label="Skills"
                helperText="Select your skill"
                data={data}
                setData={setData}
                value={data.skills}
                options={optionSkill}
                multipleOption={true}
              />
            </Grid>
            <Grid item xs={12}>
              <Select
                name="qualification"
                value={data.qualification}
                data={data}
                setData={setData}
                handleChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ paddingRight: 12 }}>
                <label style={{ fontSize: "20px" }}>Choose your cv</label>
                <input
                  type="file"
                  name="file"
                  onChange={handleFileChange}
                  style={{ paddingLeft: "20px" }}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" type="submit" onClick={handleSubmit}>
                Submit
              </Button>
            </Grid>
          </Grid>
          <Form />
        </form>
      </Box>
    </>
  );
}

export default Career;
