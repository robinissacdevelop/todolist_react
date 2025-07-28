
import React, { useState, useEffect } from 'react';
import { FaEye } from "@react-icons/all-files/fa/FaEye";
import { FaEyeSlash } from "@react-icons/all-files/fa/FaEyeSlash";

const Setpass = () => {

  const [Username, setUsername] = useState('');
  const [Email, setEmail] = useState('');
  //password
  const [password, setPassword] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);
  //confirm password
  const [confirm, setconfirm] = useState('');
  const [confirmShown, setconfirmShown] = useState(false);

  //password verification
  


  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const toggleconfirm = () => {
    setconfirmShown(!confirmShown);
  };

  useEffect(() => {
    const user = localStorage.getItem('username');
    const email = localStorage.getItem('mail');
    if (user !== "" && email !== "") {
      setUsername(user);
      setEmail(email);
    }
  }, []);


  // localStorage.removeItem('username');
  return (
    <form>
      <h1 class="text-xl italic font-serif text-pink-50 mb-2">Hello <span>{Username || 'Guest'} !!!</span></h1>
      <div class="flex justify-center" className="form-group">
        <label class="p-3 font-serif italic font-bold text-purple-600">
          Email
          <div className=''>
            <input name="email" type="email" value={Email} class="mb-1 email border font-normal text-black text-center bg-white" disabled />
          </div>

        </label>
        <br></br>
      </div>
      {/* password block */}
      <div className="form-group flex justify-center">
        <label className="p-4 font-serif italic font-bold text-purple-600 flex items-center">
          Password
          <div className='pl-24'>
            <input
              name="password"
              type={passwordShown ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-1 border border-red-500 font-sans font-normal text-black"
            />

          </div>
          <span onClick={togglePasswordVisibility} className="text-red-600 cursor-pointer pl-2">
            {passwordShown ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
          </span>
        </label>
      </div>

      {/* confirm password block */}
      <div className="form-group flex justify-center">
        <label className="p-1 font-serif italic font-bold text-purple-600 flex items-center">
          Confirm Password
          {/* <div className='pl-4'> */}
          <input
            name="password"
            type={confirmShown ? "text" : "password"}
            value={confirm}
            onChange={(e) => setconfirm(e.target.value)}
            className="mb-1 border border-red-500 font-sans font-normal text-black ml-6"
          />

          {/* </div> */}
          <span onClick={toggleconfirm} className="text-red-600 cursor-pointer pl-2">
            {confirmShown ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
          </span>
        </label>
      </div>

      <button type="submit" class="text-red-50 p-2 rounded-md borde-2 border-indigo-500 bg-purple-500 hover:bg-green-800 mt-2">Sign up</button>
    </form>

  );


};

export default Setpass;