import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { TextField, Grid, CardMedia, Button, Stack} from '@mui/material';
import "../../css/style.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';



export default function Contact_me() {
    return (
    <main className="page">
          {/* <main className="page"></main> */}
       {/* <CssBaseline /> */}
                <Box sx={{ display: 'flex', p: 2, background: 'none', height:'100vh', flexDirection: 'column', mr: 2, ml: 2}}>
                    <Card sx={{background: '#212121', borderRadius: '12px'}}>
                        <CardContent>
                            <Grid container spacing={1}>
                                <Grid xs={12} sm={6} item >
                                    <TextField sx={{background: '#fafafa', borderRadius: '12px'}} label="First Name" placeholder="Enter first name" variant='outlined' fullWidth required/>
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField sx={{background: '#fafafa', borderRadius: '12px'}} label="Last Name" placeholder="Enter last name" variant='outlined' fullWidth required/>
                                </Grid>
                                <Grid xs={12} item>
                                    <TextField sx={{background: '#fafafa', borderRadius: '12px'}} type="email" label="Email" placeholder="Enter email" variant='outlined' fullWidth required/>
                                </Grid>
                                <Grid xs={12} item>
                                    <TextField sx={{background: '#fafafa', borderRadius: '12px'}} label="Message" multiline rows={5} placeholder="Please enter message here" variant='outlined' fullWidth required/>
                                </Grid>
                                <Grid xs={12} item>
                                    <Button sx={{color: '#fafafa', backgroundColor: 'blue'}} variant="contained">Submit</Button>
                                </Grid>

                            </Grid>
                        </CardContent>
                    </Card>
                    <Grid container sx={{justifyContent: 'center', p: 2}}>
                        <Grid xs={12} sm={6} md={6} lg={3} item >
                            <Card sx={{background: '#212121', borderRadius: '12px'}}>
                                <Stack
                                        direction={{ xs: 'column', sm: 'row' }}
                                        spacing={{ xs: 1, sm: 1, md: 4 }}
                                        sx={{justifyContent: 'center'}}
                                        >
                                        <Button sx={{color: 'blue', backgroundColor: 'white'}} size="medium" href="https://www.linkedin.com/in/sterling-carfrae-a2a8151a5/" target="_blank"><LinkedInIcon/>LinkedIn</Button>
                                        <Button sx={{color: 'blue', backgroundColor: 'white'}} size="medium" href="https://github.com/scarfrae" target="_blank"><GitHubIcon/>Github</Button>
                                        {/* Last button is linked to social media i.e facebook, stackoverflow */}
                                        <Button sx={{color: 'blue', backgroundColor: 'white'}} size="medium" href="https://www.facebook.com/sterling.carfrae" target="_blank"><FacebookIcon/>Social Media</Button>
                                </Stack>                        
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
       </main>
    );
}