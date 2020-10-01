import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

/* const background = require("../assets/img/bgbody.png"); */
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    /* background: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto',
    height: '550px',
    position: 'relative',
    overflow: 'hidden'   */  
  },
  paper: {
    /* borderRadius: 20, */
    padding: theme.spacing(5),
    textAlign: 'center',
    backgroundColor: '#EFC254',
    color: '#fff',
    height: '350px',
  },
  paper1: {
    /* borderRadius: 20, */
    padding: theme.spacing(5),
    textAlign: 'center',
    backgroundColor: '#fff',
    color: '#000',
    height: '350px',
  },
  spacing: {
    paddingBottom: theme.spacing(5),
    paddingTop: 30
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item xs>
                    <Typography variant="h3" align="left" color="textPrimary" className={classes.spacing}>
                        <b>What can i do?</b>
                    </Typography>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Paper className={classes.paper1}>           
          <img src={require("../assets/img/networkicon.png")} height={'150px'}/> <br/>
          <Typography variant="h6" align="left">
            <b>Network Engineer</b> <br/>
            Configuration Metro Ethernet device.
          </Typography>
          </Paper>
          
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <img src={require("../assets/img/towericon.png")} height={'150px'}/> <br/>
          <Typography variant="h6" align="left">
            <b>Telco Engineer</b> <br/>
            Advance in the seluler, fiber optic & processing signal information
          </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <img src={require("../assets/img/websitedev1.png")} height={'150px'}/> <br/>
          <Typography variant="h6" align="left">
            <b>Junior Web Dev</b> <br/>   
            just getting started with reactjs
          </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
