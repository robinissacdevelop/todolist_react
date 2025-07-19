
// import './App.css';
import React from "react";

function form(){
    return (
        
        <form>
          <p class="text-xl italic font-serif text-pink-500">Hello Todoers..!</p>
          <div class="flex justify-center" className="form-group">
            <label class="p-3 font-serif italic font-bold text-blue-500">
              Email <input name="email" type="email" class="mb-1 email border border-red-500 font-sans font-normal text-black ml-9" />
            </label>
          </div>
          <div class="flex justify-center" className="form-group">
            <label class="p-3 font-serif italic font-bold text-blue-500">
              Username <input name="name" type="username" class="mb-1 username border border-red-500 font-sans font-normal text-black" />
            </label>
          </div>
          <button type="submit" class="text-red-50 p-2 rounded-md borde-2 border-indigo-500 bg-indigo-500 hover:bg-green-600">Sign up</button>
        </form>
     
    );
}

export default form;
   