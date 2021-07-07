import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { fade, makeStyles } from '@material-ui/core/styles';
import ButtonLogIn from '../../LogIn/ButtonLogIn';
import ButtonImg from '../../ImgAppbar/ButtonImg';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import * as reactn from 'reactn';
import CartDialog from '../CartDialog/CartDialog';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import HistoryDialog from '../HistoryDialog/HistoryDialog';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'relative',
    width: '100%',
    // height: '100vh',
  },
  divAppBar: {
    position: 'absolute',
    background: '#73696f82',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginLeft: 40,
    flexGrow: 1,
    color: '#ffffff',
    // display: 'flex !important',
    alignItems: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'white',
  },
  Style1: {
    color: 'black',
    backgroundColor: ' #757575',
    fontSize: 'large',
    width: '18ch',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 2, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  divImg: {
    width: 'auto',
    margin: 'auto',
    backgroundColor: '#fff8e1',
    // minHeight: "300px"
  },

  imgTop: {
    width: '100%',
    objectFit: 'cover',
    height: '80vh',
  },
  cartIcon: {
    marginRight: 35,
  },
  icon: {
    fontSize: 30,
    marginRight: 15,
    [theme.breakpoints.down('xs')]: {
      fontSize: '20px',
    },
  },
  topRight: {
    width: '50%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();
  const [carts] = reactn.default.useGlobal('carts');
  const [openCart, setOpenCart] = useState(false);
  const [openHistory, setOpenHistory] = useState(false);


  // console.log(carts, 'carts');

  return (
    <div className={classes.root}>
      <AppBar className={classes.divAppBar}>
        <Toolbar>
          <ButtonImg/>
          <div className={classes.topRight}>
            <Tooltip title="History Orders Information">
              <ShoppingCartIcon className={classes.icon} onClick={() => setOpenHistory(!openHistory)}/>
            </Tooltip>
            <Tooltip title="Cart Orders Information">
              <Badge className={classes.cartIcon} color="secondary" badgeContent={carts?.length || 0}>
                <AddShoppingCartIcon className={classes.icon} onClick={() => setOpenCart(!openCart)}/>
              </Badge>
            </Tooltip>
            <div>
            </div>
            <ButtonLogIn/>
          </div>
        </Toolbar>
      </AppBar>
      {
        openCart &&
        <CartDialog
          open={openCart}
          setOpen={setOpenCart}
        />
      }
      {
        openHistory &&
        <HistoryDialog
          open={openHistory}
          setOpen={setOpenHistory}
        />
      }
    </div>
  );
}
