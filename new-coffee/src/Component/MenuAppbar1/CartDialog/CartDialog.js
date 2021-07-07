import React, { useEffect, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import rtn from 'reactn';
import { makeStyles } from '@material-ui/core/styles';
import { db } from '../../../firebaseConfig';
import OrderInfo from './OrderInfo';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { toast } from 'react-toastify';
import _ from 'lodash';

const useStyle = makeStyles(theme => ({
  root: {
    width: '100%',

    '& .MuiDialog-paperWidthSm': {
      maxWidth: 1000,
    },
  },
}));


function CartDialog(props) {
  const { open, setOpen } = props;
  const { product } = props;
  const [carts] = rtn.useGlobal('carts');

  const [orderInfo, setOrderInfo] = useState({
    email: null,
    name: null,
    phone: null,
    address: null,
    ghiChu: null,
  });


  // console.log('orderInfo', orderInfo);
  const handleOrder = async () => {
    if (!getGlobal().user)
      return null;
    let userInfo = getGlobal().user;
    try {
      // khai bao transaction batch de dam bao du lieu them va update giua 2 collection
      const batch = db.batch();

      // them order vao collection orders
      const id = 'order_' + uuidv4();

      let cartDaChon = _.filter(carts, c => c.daThanhToan);

      const orderDocRef = db.collection('orders').doc(id);
      batch.set(orderDocRef, {
        ...orderInfo,
        uid: userInfo.uid,
        orderList: cartDaChon,
        createdAt: moment().format(),
        updatedAt: moment().format(),
      }, { merge: true });

      // cap nhat cart da order trong users collection

      cartDaChon.forEach(cart => {
        const cartDocRef = db.collection('carts').doc(cart.id);
        batch.set(cartDocRef, {
          daThanhToan: true,
          updatedAt: moment().format(),
        }, { merge: true });
      });

      // gui email cho khach hang
      setOpen(false);
      await batch.commit();
      toast.success('Đặt hàng thành công!');
    } catch (error) {
      console.log(error);
    } finally {

    }
  };

  useEffect(() => {
    if (product) {
      setValue({ ...product });
    }
  }, [product]);

  const classes = useStyle();
  const onClose = () => {
    setOpen(false);
  };


  return (

    <Dialog
      className={classes.root}
      open={open}
      onClose={onClose}
    >
      <DialogTitle>
        Giỏ Hàng
      </DialogTitle>
      <DialogContent>
        <div className={classes.name}>
          <OrderInfo orderInfo={orderInfo} setOrderInfo={setOrderInfo}/>
        </div>
      </DialogContent>
      <DialogActions>
        <Button variant={'outlined'} color={'secondary'} onClick={onClose}>
          Thoát
        </Button>
        <Button
          variant={'outlined'}
          color={'primary'}
          disabled={carts?.length === 0 || (carts?.length !== 0 && !orderInfo.email || !orderInfo.name || !orderInfo.phone || !orderInfo.address)}
          onClick={handleOrder}
        >
          Chọn mua
        </Button>
      </DialogActions>
    </Dialog>

  );
}

export default CartDialog;