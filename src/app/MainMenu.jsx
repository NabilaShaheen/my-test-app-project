"use client";
import React, { useState, useEffect } from 'react';
import Timetable from './component/TimeTable';
import TimetableForm from './component/TimeTableForm';

const MainMenu = ({ selectedMasjid }) => {
    const [timetable, setTimetable] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // Added loading state

    useEffect(() => {
        if (selectedMasjid) {
            const fetchTimetable = async () => {
                setLoading(true);
                try {
                    const response = await fetch(`/api/masjid/${selectedMasjid}/schedule`);
                    if (!response.ok) throw new Error('Failed to fetch timetable');
                    const data = await response.json();
                    setTimetable(data);
                } catch (error) {
                    console.error('Failed to fetch timetable:', error);
                    setError('Failed to fetch timetable');
                } finally {
                    setLoading(false);
                }
            };
            fetchTimetable();
        }
    }, [selectedMasjid]);

    const handleSave = async (newTimetable) => {
        setLoading(true);
        try {
            const response = await fetch(`/api/masjid/${selectedMasjid}/schedule`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newTimetable),
            });
            if (!response.ok) throw new Error('Failed to save timetable');
            const data = await response.json();
            setTimetable(prevTimetable => [...prevTimetable, data]);
        } catch (error) {
            console.error('Failed to save timetable:', error);
            setError('Failed to save timetable');
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className='w-full items-center justify-center bg-pink-200'>
            <div className="w-[100%] h-full flex items-center justify-evenly  shadow-md border-t p-4 flex-wrap">
                {selectedMasjid ? (
                    <>
                        {loading ? (
                            <p>Loading...</p> // Display loading state
                        ) : (
                            <Timetable timetable={timetable} />
                        )}
                         <TimetableForm masjidId={selectedMasjid} onSave={handleSave} />
                    </>
                ) : (
                    <p>Select a masjid to view and edit timetable.</p>
                )}
                {error && <p className="text-red-500">{error}</p>}
            </div>
        </main>
    );
};

export default MainMenu;
