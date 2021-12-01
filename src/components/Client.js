import React from "react";
import { Button, Grid, Paper } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useNavigate  } from "react-router-dom";
const Client = () => {
    const history = useNavigate ();
  const paperStyle = {
    padding: "20px",
    height: "50vh",
    width: "50vh",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: "200px auto",
    borderRadius: "20px"
  };
  const radioStyle = {
    border: "1px solid #ccc",
    width: "300px",
    borderRadius: "5px",
    alignItems: "center",
  };
  const formStyle = {display:'flex',alignItems:'center'}
  const labelStyle1 = <div  ><h3 style={{fontWeight:'150'}} >Individual</h3>
  <h4 style={{fontWeight:'100'}} >Account for individual</h4></div>
  const labelStyle2 = <div><h3 style={{fontWeight:'150'}}>Company</h3>
  <h4 style={{fontWeight:'100'}}>Account for company</h4></div>
  const buttonGroupStyle = {
      display: "flex",
        justifyContent: "space-evenly",
  }
  return (
    <Grid>
        
      <Paper elevation="10" style={paperStyle}>
        <h1 style={{ fontSize: "15px" }}> Type of client</h1>
        <FormControl component="fieldset" style={formStyle}>
          <FormLabel component="legend">
            Choose the type of client you want to add
          </FormLabel>
          <RadioGroup
            aria-label="choose-client"
            defaultValue="client"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="client"
              control={<Radio  color="success"/>}
             
              label={labelStyle2}
              labelPlacement="end"
              style={radioStyle}
              
            />
            <FormControlLabel
              value="other"
              control={<Radio color="success"/>}
              color="success"
              label={labelStyle1}
              labelPlacement="end"
              style={radioStyle}
            />
          </RadioGroup>
        </FormControl>
        <div style={buttonGroupStyle}><Button >Back</Button>
        <Button style={{backgroundColor:'#2BB032',color:'white'}} onClick={() => history('/client')}>Continue</Button></div>
        
      </Paper>
    </Grid>
  );
};

export default Client;
