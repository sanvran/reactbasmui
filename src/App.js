import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, CardMedia, Container, CssBaseline, Grid, makeStyles, Paper, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    overflow: 'hidden',
    overflowY: 'hidden',
    // backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg2.jpg'})`,
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
    // textAlign: 'center',
  },
  mytypo: {
    paddingTop: theme.spacing(12),
    color: '#403d3d',
    paddingBottom: theme.spacing(2),
  },
  mytypoBottom: {
    fontFamily: 'Lobster, cursive',
    fontSize: theme.spacing(3),
    marginTop: theme.spacing(12),
    color: '#515050',
    textAlign: 'center',
  },
  myImgCard: {
    borderRadius: '50%',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Grid container justify='center' alignItems='center' direction='column'>
        <Grid item md={12}>
          <Typography variant="h6" className={classes.mytypo}>Welcome To</Typography>
        </Grid>
        <Grid item xs={8} sm={5} md={3} lg={2}>
          <Card className={classes.myImgCard}>
            <CardMedia src="/assets/kiranamate_logo.jpg" component="img" />
          </Card>
        </Grid>
        <Grid item md={12}>
          <Typography variant="h6" className={classes.mytypoBottom}>Get Grocerries Delivered within 90min *</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
