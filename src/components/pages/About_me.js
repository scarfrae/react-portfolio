
import * as React from 'react';
// import Images from '../images/Queen.jpg';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import IconButton from '@mui/material/IconButton';

const styles = {
    card: {
      margin: 20,
      background: '#212121',
      color: '#fafafa',
    },
    heading: {
    //   background: '#3f51b5',
    //   minHeight: 50,
      lineHeight: 3.5,
    //   fontSize: '1.2rem',
      color: '#fafafa',
      padding: '0 20px',
    },
    content: {
      padding: 20,
    },
  };
function About_me() {
  return (
  <React.Fragment>
     {/* <CssBaseline /> */}
     <Card sx={{ display: 'flex' }}>
        <CardMedia
        component="img"
        sx={{ width: 151 }}
        // image="../images/Queen.jpg"
        alt="Profile Picture"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
        <div style={styles.card}>
      <div style={styles.heading}>About Me</div>
      <div style={styles.content}>
        I am a full stack developer with knowledge in HTML, CSS, Javascript, node, mysql, react, mongoose,etc. Additionally I am in my third year of college studying sustainable energy engineering. In my off time I like writing music, stories, designing product ideas, playing strategy games with my family and running. I bring the same curious determined nature to my coding projects. Other projects I have worked on include, a solar panel tracking system that uses...
      </div>
    </div> 
        </CardContent>
      </Box>
    </Card>

{/*       
     <div style={styles.card}>
      <div style={styles.heading}>About Me</div>
      <div style={styles.content}>
        `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur?`
      </div>
    </div> */}
 
  </React.Fragment>
  );
}


export default About_me;