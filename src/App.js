// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <p class="italic text-red-600 font-semibold"> TODO LIST APP</p> */}
{/* class ="border-2 border-purple-500 flex justify-center" */}
      <div class="pt-20">
        <div class ="flex justify-center">
          <label class="p-3 font-serif italic font-bold text-blue-500">
            Email: <input name="myInput" class="border border-red-500 font-sans font-normal text-black"  />
          </label>
        </div>
        <div class ="flex justify-center">
          <label class="p-3 font-serif italic font-bold text-blue-500">
            Username: <input name="myInput" class="border border-red-500 font-sans font-normal text-black" />
          </label>
        </div>
      </div>

    </div>
  );
}

export default App;
