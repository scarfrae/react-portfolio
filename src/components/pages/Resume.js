import React from "react";
import Card from '@mui/material/Card';
import { Typography, Button, Container, Grid, Paper } from "@mui/material";
import { Document, Page } from 'react-pdf';


function Resume() {
    return (
        <Grid sx={{background: 'none', height:'100vh', alignItems: 'center',}}>
            <Grid xs={12} md={6}>
                <Card 
                    sx={{
                        p: 1,
                        height: '20vh',
                        width: '40vh',
                        // justifyContent: 'center',
                        background: "#212121",
                        display: 'flex',
                        borderRadius: '8px',
                        color: 'white',
                        flexDirection: 'column',
                        p: 2,
                        alignItems: 'center',
                        ml: 15,
                        mr: 15, 
                        mt: 2
                    
                      }}
                >
                    <Typography><h1>Resume</h1></Typography>
                    {/* process.env.PUBLIC_URL + "/emily-mayeski-resume.pdf" */}
                    {/* //href={process.env.PUBLIC_URL + "/emily-mayeski-resume.pdf"}
          target="_blank" rel="noreferrer" */}
                    <iframe src='sample.pdf' frameborder='0'></iframe>
                    <Button variant="contained" href={'#'} target="_blank">Download Resume</Button>

                    
                </Card>
            </Grid>
            <Grid xs={12} md={6}>
                <Container> 
                    <h1>Soft Skills</h1>
                    <h1>Hard Skills</h1>
                </Container>
            </Grid>
        </Grid>
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