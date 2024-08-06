import React from 'react';

const Timetable = ({ timetable }) => (
    <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Prayer Timetable</h3>
        {timetable.length > 0 ? (
            <ul className="list-none pl-5 flex flex-wrap">
                {timetable.map((schedule) => (
                    <li key={schedule.pid} className="mb-4 space-y-3 w-full">
                        <p className='border-t border-black shadow-md w-full'><strong className='w-1/2 border border-white'>Fajr: </strong>{schedule.fajr}</p>
                        <p className='border-t border-black shadow-md'><strong>Dhuhr: </strong>{schedule.dhuhr}</p>
                        <p className='border-t border-black shadow-md'><strong>Asr: </strong>{schedule.asr}</p>
                        <p className='border-t border-black shadow-md'><strong>Magrib: </strong>{schedule.magrib}</p>
                        <p className='border-t border-black shadow-md'><strong>Isha: </strong>{schedule.isha}</p>
                    </li>
                ))}
            </ul>
        ) : (
            <p>No timetable available.</p>
        )}
    </div>
);

export default Timetable;
