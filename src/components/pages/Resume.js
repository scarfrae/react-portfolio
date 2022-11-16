import React from "react";
import Card from '@mui/material/Card';
import { Typography, Button, Grid, Box, List, ListItem } from "@mui/material";
import Pdf from '../../files/Sterling_Carfrae_Resume.pdf';
import '../../css/style.css';


function Resume() {
    return (
        <Box sx={{ display: 'flex', p: 2, background: 'none', height:'100vh', flexDirection: 'column'}}>
    
            {/* <Grid sx={{flexDirection: 'column' }}> */}
                <Grid container sx={{justifyContent: 'center', p: 2}}>
                    <Grid item xs={12} md={4} lg={4}> 
                        <Card sx={{background: "#212121", color: 'white', padding: 1, borderRadius: '12px'}}>
                            <List sx={{ width: '100%', m: 2}}>
                            <Typography><h1>Soft Skills:</h1></Typography>
                                <ListItem>Leadership</ListItem>
                                <ListItem>Customer Service</ListItem>
                                <ListItem>Ability to work in a team</ListItem>
                                <ListItem>Fast Learner</ListItem>
                                <ListItem>Hardworking</ListItem>
                            </List>                   
                        </Card>
                    </Grid>
                </Grid>
                <Grid container sx={{justifyContent: 'center'}}>
                    <Grid item xs={12} md={4} lg={4}> 
                        <Card sx={{background: "#212121", color: 'white', padding: 1, borderRadius: '12px'}}>
                            <List sx={{ width: '100%', m: 2}}>
                            <Typography><h1>Hard Skills:</h1></Typography>
                                <ListItem>Leadership</ListItem>
                                <ListItem>Customer Service</ListItem>
                                <ListItem>Ability to work in a team</ListItem>
                                <ListItem>Fast Learner</ListItem>
                                <ListItem>Hardworking</ListItem>
                            </List>                   
                        </Card>
                    </Grid>
                </Grid>
                <Grid container sx={{justifyContent: 'center', p: 2}} >
                <Grid item xs={12} md={3} lg={3}>
                    <Card sx={{background: "#212121", color: 'white', textAlign: 'center', padding: 1, borderRadius: '12px'}}>
                        <Typography><h1>Resume</h1></Typography>
                        {/* <iframe id={PdfStyle} width="200" height="200" src={Pdf} frameborder='0'></iframe> */}
                        <Button variant="contained" sx={{backgroundColor: "#423240", color:'#D6CAD8', '&:hover': {backgroundColor: '#FCEBDB',color: '#975D66'}, m:2 }} type="submit" href={Pdf} download='Sterling_Carfrae_Resume' target="_blank">Download Resume</Button>
                    </Card>

                    
                </Grid>
            </Grid>
            {/* </Grid> */}
        </Box>
        //import resume pdf file (from files) as variable into this file
        // as a tag where href of a tag is variable that made above
        // on a tag attribute: download = true
        //Resume section 
            
            //downloadable link to resume (Download Resume)

        //Skills Section
            //which skills I have
    );
  }
  
  
  export default Resume;