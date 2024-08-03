'use client';
import Image from "next/image";
import { useState } from 'react';
export default function Home() {
  const [prayer, setPrayer] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const response = await fetch('/api/save-time', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ time }),
    });

    if (response.ok) {
      alert('Time saved successfully!');
    } else {
      alert('Failed to save time.');
    }
  };
  return (
    <main className="w-full min-w-full h-[100vh] min-h-[100vh] flex items-center justify-center">
      <div className="w-1/3  h-auto p-5 min-w-max fle itemce justify-center shadow-md border-t border-white rounded-md   ">
        <div className="font-serif font-light text-3xl p-5 text-center w-full ">Namaz Timing</div>
        <div className="w-full flex flex-col items-center justify-center space-y-4 ">
          <form className="w-full flex flex-col items-center justify-center space-y-4 ">
            <div className="w-full px-2 border-t border-white rounded-md shadow-md font-serif flex"><p className="w-1/3 border-r border-black ">Fajr </p><input className="w-2/3 px-3 focus:outline-none bg-transparent float-right"/></div>
            <div className="w-full px-2 border-t border-white rounded-md shadow-md font-serif flex"><p className="w-1/3 border-r border-black ">Dhuhr </p><input className="w-1/2 px-3 focus:outline-none bg-transparent float-right"/></div>
            <div className="w-full px-2 border-t border-white rounded-md shadow-md font-serif flex"><p className="w-1/3 border-r border-black">Asr </p><input className="w-1/2 px-3 focus:outline-none bg-transparent float-right"/></div>
            <div className="w-full px-2 border-t border-white rounded-md shadow-md font-serif flex"><p className="w-1/3 border-r border-black">Maghrib </p><input className="w-1/2 px-3 focus:outline-none bg-transparent float-right"/></div>
            <div className="w-full px-2 border-t border-white rounded-md shadow-md font-serif flex"><p className="w-1/3 border-r border-black">Isha </p><input className="w-1/2 px-3 focus:outline-none bg-transparent float-right"/></div>
            <div className="w-full text-center font-serif"><button className="w-1/2 bg-blue-400 font-serif p-3 rounded-md hover:bg-blue-500 active:bg-blue-700 border ">Save</button></div>
          </form>
        </div>
      </div>
    </main>
  );
}
