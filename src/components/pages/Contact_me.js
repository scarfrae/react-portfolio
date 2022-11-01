import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { TextField, Grid, CardMedia, Button } from '@mui/material';

function Contact_me() {
    return (
    <React.Fragment>
       {/* <CssBaseline /> */}
       <Card>
        <CardContent>
        <Grid container spacing={1}>
            <Grid xs={12} sm={6} item>
                <TextField label="First Name" placeholder="Enter first name" variant='outlined' fullWidth required/>
            </Grid>
            <Grid xs={12} sm={6} item>
                <TextField label="Last Name" placeholder="Enter last name" variant='outlined' fullWidth required/>
            </Grid>
            <Grid xs={12} item>
                <TextField type="email" label="Email" placeholder="Enter email" variant='outlined' fullWidth required/>
            </Grid>
            <Grid xs={12} item>
                <TextField label="Message" multiline rows={5} placeholder="Please enter message here" variant='outlined' fullWidth required/>
            </Grid>
            <Grid xs={12} item>
                <Button variant="contained">Submit</Button>
            </Grid>

        </Grid>
        </CardContent>
       </Card>
   
    </React.Fragment>
    );
  }



export default Contact_me;