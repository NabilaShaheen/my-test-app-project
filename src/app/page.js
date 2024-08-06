"use client"
import React, { useState } from 'react';
import SideMenu from './component/sideMenu/SideMenu';
import MainMenu from './MainMenu';

const Page = () => {
    const [selectedMasjid, setSelectedMasjid] = useState(null);

    return (
      <main className='w-full h-full'>
        <div className="flex flex-col tablet:flex-row">
            <SideMenu onSelectMasjid={setSelectedMasjid} />
            <MainMenu selectedMasjid={selectedMasjid}  />
            
        </div>
      </main>
    );
};

export default Page;


// 'use client';
// import { useState } from 'react';
// import Sidebar from './component/sideMenu/SideMenu';

//  export default function Home() {
// //   const [fajr, setFajr] = useState('');
// //   const [dhuhr, setDhuhr] = useState('');
// //   const [asr, setAsr] = useState('');
// //   const [maghrib, setMaghrib] = useState('');
// //   const [isha, setIsha] = useState('');

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();

// //     const response = await fetch('/api/save-time', {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify({
// //         fajrTime: fajr,
// //         dhuhrTime: dhuhr,
// //         asrTime: asr,
// //         maghribTime: maghrib,
// //         ishTime: isha,
// //       }),
// //     });

// //     if (response.ok) {
// //       alert('Time saved successfully!');
// //     } else {
// //       const result = await response.json();
// //       alert(`Failed to save time: ${result.error}`);
// //     }
// //   };

//   return (
//     <main className="w-full bg-green-300 h-screen flex ">
//       <Sidebar/>
//       <div className='w-[80%] flex items-center justify-center shadow-md border-t'>
//         {/* <div className="font-serif font-light text-3xl text-center p-5 smobile:hidden tablet:block">Namaz Timing</div>
//          <form onSubmit={handleSubmit} className="w-2/3 space-y-4 shadow-md border-t flex flex-col items-center justify-center p-5 rounded-md">
//             <div className="w-2/3 border-t border-white rounded-md shadow-md font-serif flex">
//               <p className="w-1/3 border-r border-black bg-black text-white rounded-s-md px-2 ">Fajr</p>
//               <input
//                 type="time"
//                 value={fajr}
//                 onChange={(e) => setFajr(e.target.value)}
//                 className="w-2/3 px-3 focus:outline-none bg-transparent float-right"
//               />
//             </div>
//             <div className="w-2/3 border-t border-white rounded-md shadow-md font-serif flex">
//               <p className="w-1/3 border-r border-black bg-black text-white rounded-s-md px-2 ">Dhuhr</p>
//               <input
//                 type="time"
//                 value={dhuhr}
//                 onChange={(e) => setDhuhr(e.target.value)}
//                 className="w-2/3 px-3 focus:outline-none bg-transparent float-right"
//               />
//             </div>
//             <div className="w-2/3 border-t border-white rounded-md shadow-md font-serif flex">
//               <p className="w-1/3 border-r border-black bg-black text-white rounded-s-md px-2 ">Asr</p>
//               <input
//                 type="time"
//                 value={asr}
//                 onChange={(e) => setAsr(e.target.value)}
//                 className="w-2/3 px-3 focus:outline-none bg-transparent float-right"
//               />
//             </div>
//             <div className="w-2/3 border-t border-white rounded-md shadow-md font-serif flex">
//               <p className="w-1/3 border-r border-black bg-black text-white rounded-s-md px-2 ">Maghrib</p>
//               <input
//                 type="time"
//                 value={maghrib}
//                 onChange={(e) => setMaghrib(e.target.value)}
//                 className="w-2/3 px-3 focus:outline-none bg-transparent float-right"
//               />
//             </div>
//             <div className="w-2/3 border-t border-white rounded-md shadow-md font-serif flex">
//               <p className="w-1/3 border-r border-black bg-black text-white rounded-s-md px-2 ">Isha</p>
//               <input
//                 type="time"
//                 value={isha}
//                 onChange={(e) => setIsha(e.target.value)}
//                 className="w-2/3 px-3 focus:outline-none bg-transparent float-right"
//               />
//             </div>
//             <div className="w-full text-center font-serif">
//               <button type="submit" className="w-1/2 bg-blue-400 font-serif p-3 rounded-md hover:bg-blue-500 active:bg-blue-700 border">Save</button>
//             </div>
//          </form> */}
//       </div>
  
      
//     </main>
//   );
// }

