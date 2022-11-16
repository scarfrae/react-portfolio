import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Project from '../Project';
import Users from '../../data/portfolioData';



export default function Portfolio() {
  return (
    <div>
      <main>
        <Container sx={{ py: 6}} maxWidth="lg" >
          {/* End hero unit */}
          <Grid container spacing={4} sx={{ justifyContent: 'center'}}>
                {Users.map((e) => (
                    <Grid item key={e} xs={12} sm={6} md={4}>
                        <Project picture={e.picture} heading={e.heading} githubURL={e.githubURL} description={e.description} deployedLink={e.deployedLink} />
                    </Grid>
                ))}
          </Grid>
        </Container>
      </main>
    </div>
  );
}

