import React, { useState, useEffect } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import useStyles from './styles'

import Form from './components/Form/Form'
import Posts from './components/Posts/Posts'

import { useDispatch } from 'react-redux';
import { getPost } from './Action/posts';

const App = () => {

  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch])

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static">
        <Typography className={classes.title} variant="h3" align="center">
          Memories
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>

    </Container>
  );
}

export default App;
