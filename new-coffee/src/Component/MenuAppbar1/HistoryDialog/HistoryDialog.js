import React, { useEffect, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import rtn from 'reactn';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import moment from 'moment';
import Divider from '@material-ui/core/Divider';
import vnd from '../../../utils/vnd';
import Paper from '@material-ui/core/Paper';

const useStyle = makeStyles(theme => ({

  root: {
    width: '100%',

    '& .MuiDialog-paperScrollPaper': {
      display: 'block',
    },
  },
  divOrder: {},
  paper: {
    backgroundColor: '#eae7de',
    padding: 5,
    // paddingBottom: '40px',
    // paddingLeft: '40px',
    fontSize: '20px',
    // paddingTop: '20px',

  },
  divider: {
    width: '100%',
    height: '3px',
    color: 'black',
    margin: 'auto',
  },
  img: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  },
  gridcontent: {
    paddingLeft: '20px',

  },
}));

function HistoryDialog(props) {
  const { open, setOpen } = props;
  const [orders] = rtn.useGlobal('orders');
  const classes = useStyle();
  const [total, setTotal] = useState(0);

  const onClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    getTotalPrices();
  }, [orders]);

  const getTotalPrices = (value) => {
    let allPrice = 0;
    let prices = 0;
    if (value) {
      value.orderList.forEach(list => {
        prices += list.giaDangChon * list.soLuongDaChon;
      });
      return prices;
    }
    orders.forEach(order => {
      order.orderList.forEach(list => {
        allPrice += list.giaDangChon * list.soLuongDaChon;
      });
    });

    setTotal(allPrice);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      className={classes.root}
    >
      <DialogTitle>
        Lịch sử thanh toán
      </DialogTitle>
      <DialogContent>
        {
          orders.map(order => {
            let totalPrice = getTotalPrices(order);
            return (
              <Paper className={classes.paper}>
                <div className={classes.divOder}>
                  <Typography>
                    Ngày đặt hàng : {moment(order.createdAt).format('YYYY-MM-DD HH:ss')}
                  </Typography>
                  <Typography>
                    Người mua hàng: {order.name}
                  </Typography>
                  <Divider className={classes.divider}/></div>

                <div>
                  {
                    order.orderList.map(detail => {
                      return (
                        <div>
                          <div>
                            <Grid container>
                              <Grid item md={6} sm={12}>
                                <img className={classes.img} src={detail.img}/>
                              </Grid>
                              <Grid item md={6} sm={12} className={classes.gridcontent}>
                                <Typography>
                                  Sản phẩm: {detail.name}
                                </Typography>
                                <Typography>
                                  Giá tiền: {vnd(detail.giaDangChon)}
                                </Typography>
                                <Typography>
                                  Số lượng: {detail.soLuongDaChon}
                                </Typography>
                              </Grid>

                            </Grid>

                          </div>
                          <Divider className={classes.divider}/>
                        </div>
                      );
                    })
                  }
                </div>
                <Typography>
                  Tổng giá Đặt hàng: {vnd(totalPrice)}
                </Typography>
                <Typography>
                  Ghi chú: {order.ghiChu}
                </Typography>
              </Paper>
            );
          })
        }
      </DialogContent>
      <DialogActions>
        <div style={{ marginRight: '100px' }}>
          Tổng giá: {vnd(total)}
        </div>
        <Button variant={'outlined'} color={'secondary'} onClick={onClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default HistoryDialog;