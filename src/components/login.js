import React from 'react';

const Login = () => {
  // console.log("Login page rendered");
 const loot = localStorage.getItem('username');
//  console.log("page rendered");
  console.log(loot);
  return (

    <div>
      <h1>Login Page</h1>

      {/* Your login form */}
    </div>
  );

  localStorage.removeItem('username');
};

export default Login;