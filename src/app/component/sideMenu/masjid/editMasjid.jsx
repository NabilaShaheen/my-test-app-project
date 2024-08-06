import React from 'react';
import PropTypes from 'prop-types';

const EditMasjid = ({ newName, onChange, onSave }) => (
    <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Edit Masjid Name</h3>
        <input
            type="text"
            value={newName}
            onChange={onChange}
            placeholder="Enter new masjid name"
            className="p-2 border border-gray-300 rounded mb-2 w-full"
            aria-label="Masjid name input"
        />
        <button
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300"
            onClick={onSave}
            disabled={!newName.trim()}
            aria-label="Save changes"
        >
            Save
        </button>
    </div>
);

EditMasjid.propTypes = {
    newName: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired
};

export default EditMasjid;
