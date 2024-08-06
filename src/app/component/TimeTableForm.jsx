import React, { useState } from 'react';

const TimetableForm = ({ masjidId, onSave }) => {
    const [fajr, setFajr] = useState('');
    const [dhuhr, setDhuhr] = useState('');
    const [asr, setAsr] = useState('');
    const [magrib, setMagrib] = useState('');
    const [isha, setIsha] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/masjid/${masjidId}/schedule`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ fajr, dhuhr, asr, magrib, isha }),
            });
            if (!response.ok) throw new Error('Failed to save prayer times');
            const data = await response.json();
            onSave(data);
            setSuccess('Prayer times saved successfully');
            // Clear form after successful save
            setFajr('');
            setDhuhr('');
            setAsr('');
            setMagrib('');
            setIsha('');
            setError(''); // Clear any previous error message
            setIsFormVisible(false); // Hide the form after saving
        } catch (error) {
            console.error('Failed to save prayer times:', error);
            setError('Failed to save prayer times');
            setSuccess(''); // Clear any previous success message
        }
    };

    return (
        <div>
            <button
                onClick={() => setIsFormVisible(!isFormVisible)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                {isFormVisible ? 'Hide Form' : 'Set Prayer Time'}
            </button>

            {isFormVisible && (
                <form onSubmit={handleSubmit} className="p-4 border rounded bg-white shadow-md mt-4">
                    <h3 className="text-lg font-semibold mb-2">Set Prayer Times</h3>
                    {error && <p className="text-red-500 mb-2">{error}</p>}
                    {success && <p className="text-green-500 mb-2">{success}</p>}
                    <div className="mb-2">
                        <label className="block">Fajr</label>
                        <input
                            type="time"
                            value={fajr}
                            onChange={(e) => setFajr(e.target.value)}
                            required
                            className="p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block">Dhuhr</label>
                        <input
                            type="time"
                            value={dhuhr}
                            onChange={(e) => setDhuhr(e.target.value)}
                            required
                            className="p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block">Asr</label>
                        <input
                            type="time"
                            value={asr}
                            onChange={(e) => setAsr(e.target.value)}
                            required
                            className="p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block">Magrib</label>
                        <input
                            type="time"
                            value={magrib}
                            onChange={(e) => setMagrib(e.target.value)}
                            required
                            className="p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block">Isha</label>
                        <input
                            type="time"
                            value={isha}
                            onChange={(e) => setIsha(e.target.value)}
                            required
                            className="p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Save
                    </button>
                </form>
            )}
        </div>
    );
};

export default TimetableForm;
