import { useState } from 'react';
function CheckLogin(props) {
 const toggleLogin = () => {
    if (props.usuario == null)
       props.fnUsuario({"usuario": "Carlos"})
    else
       props.fnUsuario(null)
 };
 const handleLogin = () => {
   if (props.usuario != null) console.log(props.usuario);
   else console.log('User is logged out');
 };
 return (
   <div>
     <h2 className="text-3xl text-center mb-4">
       {props.usuario != null ? 'User is logged in' : 'User is not logged in'}
     </h2>
     <button onClick={handleLogin}
       className="bg-green-400 hover:bg-green-500 px-2 py-3 rounded mr-3">
       Check Login
     </button>
     <button onClick={toggleLogin}
       className="bg-green-400 hover:bg-green-500 px-2 py-3 rounded">
       {props.usuario != null ? 'Log Out' : 'Log In'}
     </button>
   </div>
 );
}
export default CheckLogin;