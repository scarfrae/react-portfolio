import React from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Typography, Button } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import GetAppIcon from '@mui/icons-material/GetApp';
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
            {props.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href={props.githubURL} target="_blank"><GitHubIcon/></Button>
          <Button size="small" href={props.deployedLink} target="_blank"><GetAppIcon/></Button>
        </CardActions>
      </Card>
  

   
   
       
   
    )
  }
  export default Project;