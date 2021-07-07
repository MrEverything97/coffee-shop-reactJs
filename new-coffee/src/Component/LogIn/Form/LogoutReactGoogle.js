// import React from 'react';
// import GoogleLogout from 'react-google-login';
// import { useHistory } from 'react-router-dom';
//
// const clientId = '711980741927-2p2hqjhd715mhrvj95km5o1u2nduo6js.apps.googleusercontent.com';
//
// function LogoutGoogle() {
//   const history = useHistory();
//
//   const onSuccess = () => {
//     console.log('logout');
//     alert('Logout made successfully');
//     history.push('/login-a');
//
//   };
//   return (
//     <div>
//       <GoogleLogout
//         clientId={clientId}
//         buttonText="Logout"
//         onLogoutSuccess={onSuccess}
//       >
//       </GoogleLogout>
//     </div>
//   );
// }
//
// export default LogoutGoogle;