

import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom';
import Form from './components/form';
import Login from './components/login';



function App() {
  useEffect(() => {
    document.body.style.backgroundColor = '#020024'; // Replace with your desired color code or name
  }, []);
  return (
    <div className="App">
      {/* <p class="italic text-red-600 font-semibold"> TODO LIST APP</p> */}
      {/* class ="border-2 border-purple-500 flex justify-center" */}
      <div class="pt-20 text-center">
        <Router>
          <div className="App">
            <div className="pt-20 text-center">
              <Routes>
                <Route path="/" element={<Navigate to="/form" />} />
                <Route path="/form" element={<Form />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </div>
          </div>
        </Router>

      </div>
    </div>
  );
}

export default App;
