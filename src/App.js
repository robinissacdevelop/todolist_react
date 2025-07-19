// import logo from './logo.svg';
// import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = '#020024'; // Replace with your desired color code or name
  }, []);
  return (

    <div className="App">
      {/* <p class="italic text-red-600 font-semibold"> TODO LIST APP</p> */}
      {/* class ="border-2 border-purple-500 flex justify-center" */}
      <div class="pt-20 text-center">
        <p class="text-xl italic font-serif text-pink-500">Hello Todoers..!</p>
        <div class="flex justify-center">
          <label class="p-3 font-serif italic font-bold text-blue-500">
            Email <input name="myInput" class="border border-red-500 font-sans font-normal text-black ml-9" />
          </label>
        </div>
        <div class="flex justify-center">
          <label class="p-3 font-serif italic font-bold text-blue-500">
            Username <input name="myInput" class="border border-red-500 font-sans font-normal text-black" />
          </label>
        </div>
        <button class="text-red-50 p-2 rounded-md borde-2 border-indigo-500 bg-indigo-500 hover:bg-green-600">Sign up</button>
      </div>

    </div>
  );
}

export default App;
