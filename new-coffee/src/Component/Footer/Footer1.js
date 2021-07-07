import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';


const useStyles = makeStyles({
  root: {
    width: '100%',
    color: '#795548',
    backgroundColor: '#eae7de',
    minHeight: '40vh',
    alignItems: 'center',

  },
  img: {
    width: '50%',
    margin: 'auto',
    display: 'block',
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
  },
  iconA: {
    minWidth: '65px',
  },
  link: {
    color: '#795548',
  },
});

function Footer1() {
  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.root}>
        <Grid item xs={6}>
          {/*<img className={classes.img} src="../img/Content/House-logo-min.png" alt=""/>*/}
          <div>Coffee House</div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.icon}>
            <LocationOnIcon className={classes.iconA}/>
            <h4>
              Dolphin Plaza, Mỹ Đình 2, Nam Từ Liêm, Hà Nội</h4>
          </div>
          <div className={classes.icon}>
            <LocalPhoneIcon className={classes.iconA}/>
            <Link className={classes.link}>
              <h4>
                096666666
              </h4>
            </Link>
          </div>
          <div className={classes.icon}>
            <EmailIcon className={classes.iconA}/>
            <Link className={classes.link}>
              <h4>
                hello@House.com
              </h4>
            </Link>
          </div>
          <div className={classes.icon}>
            <FacebookIcon className={classes.iconA}/>
            <Link className={classes.link}>
              <h4>
                fb.me/House
              </h4>
            </Link>
          </div>

        </Grid>
      </Grid>

    </div>


  );
}

export default Footer1;