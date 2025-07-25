// import logo from './logo.svg';

import React from 'react';
import { useEffect } from 'react';
import Form from './components/form';
// import Form from './components/login';


function App() {
  useEffect(() => {
    document.body.style.backgroundColor = '#020024'; // Replace with your desired color code or name
  }, []);
  return (
    <div className="App">
      {/* <p class="italic text-red-600 font-semibold"> TODO LIST APP</p> */}
      {/* class ="border-2 border-purple-500 flex justify-center" */}
      <div class="pt-20 text-center">
        <Form />
      </div>
    </div>
  );
}

export default App;
