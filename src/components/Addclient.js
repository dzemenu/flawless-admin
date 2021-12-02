import {
  Grid,
  Paper,
  TextField,
  Box,
  Switch,
  FormControlLabel,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { createClient } from "../store/clientReducer";

const Addclient = () => {
  const {
    companyName,
    companyEmail,
    companyPhone,
    address,
    contactName,
    contactEmail,
    contactPhone,
    contactOccupation,
    legalName,
  } = useSelector((state: RootStateOrAny) => state.client);
  const data=useSelector((state: RootStateOrAny) => state.client);
  const [legalNameState, setLegalNameState] = useState('');
  const [companyNameState, setCompanyNameState] = useState('');
  const [companyEmailState, setCompanyEmailState] = useState('');
  const [companyPhoneState, setCompanyPhoneState] = useState('');
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    
    event.preventDefault();
    var data=[{
      legalName: legalNameState,
      companyEmail: companyEmailState,
      companyName: companyNameState,
      companyPhone: companyPhoneState,
    }]
    dispatch(
      createClient(data)
    );
    console.log(data, "data");
  };
  const paperStyle = {
    width: "100vh",
    height: "80vh",
    padding: "20px",

    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: "40px auto",

    borderRadius: "20px",
    border: "1px solid #ccc",
    elevation: "10",
  };
  const buttonGroupStyle = {
    display: "flex",
    justifyContent: "space-evenly",
  };
  const mainDiv = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Grid>
        <Paper style={paperStyle}>
          <h1>Add client details</h1>
          <div style={mainDiv}>
            <TextField
              label="Company name"
              placeholder="Enter username"
              value={companyNameState}
              onChange={(event) => setCompanyNameState(event.target.value)}
            />

            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  legal entity
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={legalNameState}
                  label="legal entity"
                  onChange={(event) => setLegalNameState(event.target.value)}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div style={mainDiv}>
            <TextField label="General Email" placeholder="Enter username" value={companyEmailState} onChange={event=>setCompanyEmailState(event.target.value)} />
            <TextField
              label="General phone number"
              placeholder="Enter username"
              value={companyPhoneState}
              onChange={event=>setCompanyPhoneState(event.target.value)}
            />
          </div>
          <div style={mainDiv}>
            {" "}
            <h5>contact details-company representant </h5>{" "}
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Already exists"
            />
          </div>
          <div style={mainDiv}>
            <TextField label="General Email" placeholder="Enter username" />
            <TextField
              label="General phone number"
              placeholder="Enter username"
            />
            <TextField
              label="General phone number"
              placeholder="Enter username"
            />
          </div>
          <div style={buttonGroupStyle}>
            <Button>Back</Button>
            <Button
              style={{ backgroundColor: "#2BB032", color: "white" }}
             onClick={submitHandler}
            >
              Continue
            </Button>
          </div>
        </Paper>
      </Grid>
    </Box>
  );
};

export default Addclient;
