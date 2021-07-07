import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PhoneIcon from '@material-ui/icons/Phone';
import { Email } from '@material-ui/icons';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import rtn from 'reactn';
import { Divider, Tooltip } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { db } from '../../../firebaseConfig';
import Grid from '@material-ui/core/Grid';
import vnd from '../../../utils/vnd';
import Checkbox from '@material-ui/core/Checkbox';
import _ from 'lodash';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import UpAndDown from './UpAndDown';

const useStyles = makeStyles((theme) => ({
  textField: {
    margin: theme.spacing(1),
  },
  paper: {
    backgroundColor: '#eae7de',
    padding: 10,
    // paddingBottom: '40px',
    // paddingLeft: '40px',
    fontSize: '20px',
    // paddingTop: '40px',

  },
  cartNull: {
    color: 'red',
  },
  content: {
    display: 'flex',
  },
  icon: {},
  img: {
    width: '100%',
    height: 'auto',
    maxHeight: '150px',
    objectFit: 'cover',
  },
  gridcontent: {
    padding: 10,
  },
}));

export default function OrderInfo({ orderInfo, setOrderInfo }) {
  const classes = useStyles();
  const [carts, setCarts] = rtn.useGlobal('carts');

  const handleChange = (event) => {
    let index = _.findIndex(carts, c => c.id === event.id);

    if (index !== -1) {
      carts[index].daThanhToan = !event.daThanhToan;
      setCarts([...carts]);
    }
  };

  const Deletedocuments = (cart) => {
    db.collection('carts').doc(cart.id).delete().then(function() {
      console.log('Document successfully deleted!');
    }).catch(function(error) {
      console.error('Error removing document: ', error);
    });

  };
  return (
    <div>
      <div style={{ paddingBottom: 40 }}>
        {
          carts?.length === 0 ?
            <div className={classes.cartNull}>Cart has no data</div>
            :
            carts.map((d, idx) => {
              return (
                <Paper className={classes.paper} key={idx}>
                  <Grid container className={classes.content}>
                    <Grid item md={4} sm={12}>
                      <div>
                        <img className={classes.img} src={d.img}/>
                      </div>
                    </Grid>
                    <Grid item md={4} sm={12} className={classes.gridcontent}>
                      <div>
                        Tên sản phẩm: {d.name}
                      </div>
                      <div>
                        Size: {d.sizeDangChon}
                      </div>
                      <div>
                        Số lượng: {d.soLuongDaChon}
                      </div>
                      <div>
                        Giá: {vnd(d.giaDangChon)}
                      </div>

                      <Divider/>
                    </Grid>

                    <Grid item md={4} sm={12} className={classes.icon}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            className={classes.checkbox}
                            value={d.daThanhToan}
                            onChange={() => handleChange(d)}
                            name="checkCart"
                            color="primary"
                          />
                        }
                        label="Chọn để đặt hàng"
                      />
                      <Tooltip title={'Xoá mặt hàng này'}>
                        <Button onClick={() => Deletedocuments(d)} style={{ backgroundColor: '#eae7de', border: 0 }}>
                          <DeleteOutlineIcon/>
                        </Button>
                      </Tooltip>
                      <UpAndDown
                        productCart={d}
                        isUpdateCart={true}
                      />
                    </Grid>
                  </Grid>

                </Paper>
              );
            })}

      </div>
      <FormControl className={classes.textField}>
        <InputLabel htmlFor="input-with-icon-adornment">Địa chỉ email</InputLabel>
        <Input
          id="input-with-icon-adornment"
          value={orderInfo?.email || ''}
          onChange={(event) => setOrderInfo({ ...orderInfo, email: event.target.value })}
          startAdornment={
            <InputAdornment position="start">
              <Email/>
            </InputAdornment>
          }
        />
      </FormControl>
      <TextField
        className={classes.textField}
        id="input-with-icon-textfield"
        label="Tên người đặt hàng"
        value={orderInfo?.name || ''}
        onChange={(event) => setOrderInfo({ ...orderInfo, name: event.target.value })}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle/>
            </InputAdornment>
          ),
        }}
      />
      <TextField
        className={classes.textField}
        id="input-with-icon-textfield"
        label="Số điện thoại"
        value={orderInfo?.phone || ''}
        onChange={(event) => setOrderInfo({ ...orderInfo, phone: event.target.value })}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PhoneIcon/>
            </InputAdornment>
          ),
        }}
      />
      <TextField
        className={classes.textField}
        id="input-with-icon-textfield"
        label="Địa chỉ"
        value={orderInfo?.address || ''}
        onChange={(event) => setOrderInfo({ ...orderInfo, address: event.target.value })}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AddLocationIcon/>
            </InputAdornment>
          ),
        }}
      />

      <TextField
        className={classes.textField}
        id="input-with-icon-textfield"
        label="Ghi chú"
        value={orderInfo?.ghiChu || ''}
        fullWidth
        onChange={(event) => setOrderInfo({ ...orderInfo, ghiChu: event.target.value })}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {/*<AddLocationIcon/>*/}
            </InputAdornment>
          ),
        }}
      />

    </div>
  );
}
