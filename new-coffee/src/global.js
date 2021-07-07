import rtn from 'reactn';
import isPlainObject from 'lodash/isPlainObject';

rtn.addCallback((global) => {
  console.log({ global });
});
const user = localStorage.getItem('user') || {};

rtn.setGlobal({
  user: user,
  carts: [],
  orders: [],
  dangChon: [],

});

if (typeof window !== 'undefined') {
  window.setGlobal = rtn.setGlobal;
  window.getGlobal = rtn.getGlobal;
  window.useGlobal = rtn.useGlobal;
  window.mergeGlobal = (state, obj) => {
    const val = getGlobal()[state];
    if (isPlainObject(val)) {
      setGlobal({
        [state]: { ...val, ...obj },
      });
    }
  };
}
