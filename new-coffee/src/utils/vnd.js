const fmter = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' });
export default function vnd(num) {
  return fmter.format(num);
}