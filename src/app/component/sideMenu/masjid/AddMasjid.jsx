import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddMasjid = ({ newMasjidName, onChange, onAdd }) => (
    <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Add New Masjid</h3>
        <input
            type="text"
            value={newMasjidName}
            onChange={onChange}
            placeholder="Enter masjid name"
            className="p-2 border border-gray-300 rounded mb-2 w-full"
            aria-label="Masjid name input"
        />
        <button
            className="bg-green-500 text-white px-4 py-2 rounded disabled:bg-gray-300"
            onClick={onAdd}
            disabled={!newMasjidName.trim()}
            aria-label="Add new masjid"
        >
            Add
        </button>
    </div>
);

AddMasjid.propTypes = {
    newMasjidName: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired,
};

const AddMasjidToggle = () => {
    const [isFormVisible, setFormVisible] = useState(false);
    const [newMasjidName, setNewMasjidName] = useState('');

    const handleAddClick = () => {
        setFormVisible(false);
        setNewMasjidName('');
        // Add your logic to add the masjid here
    };

    return (
        <div>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                onClick={() => setFormVisible(!isFormVisible)}
            >
                {isFormVisible ? 'Hide Form' : 'Add New Masjid'}
            </button>
            {isFormVisible && (
                <AddMasjid
                    newMasjidName={newMasjidName}
                    onChange={(e) => setNewMasjidName(e.target.value)}
                    onAdd={handleAddClick}
                />
            )}
        </div>
    );
};

export default AddMasjidToggle;
