"use client";
import React, { useState, useEffect } from 'react';
import MasjidList from './masjid/masjid'; 
import AddMasjid from './masjid/AddMasjid'; 
import EditMasjid from './masjid/EditMasjid'; 

const SideMenu = ({ onSelectMasjid }) => {
    const [masjids, setMasjids] = useState([]);
    const [editing, setEditing] = useState(null);
    const [newName, setNewName] = useState('');
    const [newMasjidName, setNewMasjidName] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [timetable, setTimetable] = useState([]);
    const [selectedMasjid, setSelectedMasjid] = useState(null);

    useEffect(() => {
        const fetchMasjids = async () => {
            setLoading(true);
            try {
                const response = await fetch('/api/masjid');
                if (!response.ok) throw new Error('Failed to fetch masjids');
                const data = await response.json();
                setMasjids(data);
            } catch (error) {
                console.error('Failed to fetch masjids:', error);
                setError('Failed to fetch masjids');
            } finally {
                setLoading(false);
            }
        };
        fetchMasjids();
    }, []);

    const handleEdit = (id) => {
        setEditing(id);
        const masjid = masjids.find(m => m.mid === id);
        setNewName(masjid ? masjid.name : '');
    };

    const handleDelete = async (id) => {
        setLoading(true);
        try {
            const response = await fetch(`/api/masjid/${id}`, { method: 'DELETE' });
            if (!response.ok) throw new Error('Failed to delete masjid');
            
            setMasjids(masjids.filter(masjid => masjid.mid !== id));
            setSuccess('Masjid deleted successfully');

            if (selectedMasjid === id) {
                setSelectedMasjid(null);
                if (onSelectMasjid) onSelectMasjid(null);
            }
        } catch (error) {
            console.error('Failed to delete masjid:', error);
            setError('Failed to delete masjid');
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async () => {
        setLoading(true);
        try {
            const response = await fetch(`/api/masjid/${editing}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: newName }),
            });
            if (!response.ok) throw new Error('Failed to update masjid');
            const updatedMasjid = await response.json();
            setMasjids(masjids.map(masjid => masjid.mid === editing ? updatedMasjid : masjid));
            setEditing(null);
            setNewName('');
            setSuccess('Masjid updated successfully');
        } catch (error) {
            console.error('Failed to update masjid:', error);
            setError('Failed to update masjid');
        } finally {
            setLoading(false);
        }
    };

    const handleAdd = async () => {
        if (newMasjidName.trim() !== '') {
            setLoading(true);
            try {
                const response = await fetch('/api/masjid/add', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name: newMasjidName }),
                });
                if (!response.ok) throw new Error('Failed to add masjid');
                const newMasjid = await response.json();
                setMasjids([...masjids, newMasjid]);
                setNewMasjidName('');
                setSuccess('Masjid added successfully');
            } catch (error) {
                console.error('Failed to add masjid:', error);
                setError('Failed to add masjid');
            } finally {
                setLoading(false);
            }
        }
    };

    const handleClick = async (id) => {
        if (onSelectMasjid) onSelectMasjid(id);
        setSelectedMasjid(id);

        try {
            const response = await fetch(`/api/masjid/${id}/schedule`);
            if (!response.ok) throw new Error('Failed to fetch timetable');
            const data = await response.json();
            setTimetable(data);
        } catch (error) {
            console.error('Failed to fetch timetable:', error);
            setError('Failed to fetch timetable');
        }
    };

    return (
        <aside className="w-[80%] h-screen p-5">
            <h2 className="text-xl font-bold mb-4">Masjid List</h2>
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
            <MasjidList masjids={masjids} onClick={handleClick} onEdit={handleEdit} onDelete={handleDelete} />
            <AddMasjid newMasjidName={newMasjidName} onChange={(e) => setNewMasjidName(e.target.value)} onAdd={handleAdd} />
            {editing !== null && (
                <EditMasjid newName={newName} onChange={(e) => setNewName(e.target.value)} onSave={handleSave} />
            )}
        </aside>
    );
};

export default SideMenu;
