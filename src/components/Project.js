import React from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Typography, Button } from "@mui/material";
function Project (props){
    return (
      <Card
        sx={{ background: "#212121", height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <CardMedia
          component="img"
          sx={{
            // 16:9
            pt: '10%',
          }}
          image= {props.picture}
          alt="random"
        />
        <CardContent sx={{ flexGrow: 1, color: "white" }}>
          <Typography gutterBottom variant="h5" component="h2">
          <p> {props.heading}</p>
          </Typography>
          <Typography>
            This is a media card. You can use this section to describe the
            content.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">{props.githubURL}</Button>
          <Button size="small">Edit</Button>
        </CardActions>
      </Card>
  

   
   
       
   
    )
  }
  export default Project;