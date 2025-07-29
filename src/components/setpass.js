
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

  //password verification
  const [errors, setErrors] = useState({});

  const handlepass = (e) => {
    const { name, value } = e.target;
    setPassword({
      ...password,
      [name]: value,
    });
  };

  const handleconfirm = (e) => {
    const { name, value } = e.target;
    setconfirm({
      ...confirm,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(password, confirm);
    setErrors(newErrors);
    // if (Object.keys(newErrors).length === 0) {
    //   console.log('Form submited.');
    // } else {
    //   console.log('Form submission failed due to validation errors.');
    // }
  };

  const validateForm = (pass, con) => {
    const errors = {};
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    //password
    if (!pass.trim()) {
      //empty password check
      errors.passwords = "Password Recquired";
    } else if (!passwordRegex.test(pass)) {
      //password charecters verificatiom
      errors.passwords = "password should contain 1UpperCase, 1LowerCase, 1Specialcharecter, 1Number, 8charecters";
    }

    //confirm password
    if (!con.trim()) {
      //empty confirm password
      errors.confirming = "Confirm Password Recquired";

    } else if (!passwordRegex.test(con)) {
      //confirm password verification
      errors.confirming = "confirm password should contain 1UpperCase, 1LowerCase, 1Specialcharecter, 1Number, 8charecters";
    }

    //password and confirm password
    if (con.trim() && passwordRegex.test(con)) {
      if (pass !== con) {
        //password and confirm password check
        errors.mismatched = "password and confirm password dosen't match";
      } else {
        //every parameter reached
        //from here data is taken to database
        errors.matching = "Created successfully";
      }
    }

    return errors;
  };
  // localStorage.removeItem('username');
  return (
    <form onSubmit={handleSubmit}>
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
              value={password.password}
              onChange={(e) => {
                handlepass(e);
                setPassword(e.target.value);
              }}
              className="mb-1 border border-red-500 font-sans font-normal text-black"
            />

          </div>
          <span onClick={togglePasswordVisibility} className="text-red-600 cursor-pointer pl-2">
            {passwordShown ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
          </span>
        </label>
      </div>

      {errors.passwords && (
        <span className="error-message" class="text-red-600">
          {errors.passwords}
        </span>
      )}
      {/* confirm password block */}
      <div className="form-group flex justify-center">
        <label className="p-1 font-serif italic font-bold text-purple-600 flex items-center">
          Confirm Password
          {/* <div className='pl-4'> */}
          <input
            name="password"
            type={confirmShown ? "text" : "password"}
            value={confirm.confirm}
            onChange={(e) => {
              handleconfirm(e);
              setconfirm(e.target.value);
            }}
            className="mb-1 border border-red-500 font-sans font-normal text-black ml-6"
          />

          {/* </div> */}
          <span onClick={toggleconfirm} className="text-red-600 cursor-pointer pl-2">
            {confirmShown ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
          </span>
        </label>
      </div>
      {errors.confirming && (
        <span className="error-message" class="text-red-600">
          {errors.confirming}
        </span>
      )}

      {errors.matching && (
        <span className="error-message" class="text-green-600">
          {errors.matching}
        </span>
      )}
      {errors.mismatched && (
        <span className="error-message" class="text-red-600">
          {errors.mismatched}
        </span>
      )}

      <br></br>
      <button type="submit" class="text-red-50 p-2 rounded-md borde-2 border-indigo-500 bg-purple-500 hover:bg-green-800 mt-2">Sign up</button>
    </form>

  );


};

export default Setpass;