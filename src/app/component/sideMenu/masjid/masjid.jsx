import React from 'react';
import PropTypes from 'prop-types';

const MasjidList = ({ masjids, onClick, onEdit, onDelete }) => {
    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this masjid?')) {
            onDelete(id);
        }
    };

    return (
        <ul className=''>
            {masjids.map(masjid => (
                <li key={masjid.mid} className="flex justify-between items-center mb-2">
                    <button
                        className="text-gray-700 hover:text-gray-900"
                        onClick={() => onClick(masjid.mid)}
                        aria-label={`Select masjid ${masjid.name}`}
                    >
                        {masjid.name}
                    </button>
                    <div>
                        <button
                            className="text-blue-600 hover:text-blue-800 mx-2"
                            onClick={() => onEdit(masjid.mid)}
                            aria-label={`Edit masjid ${masjid.name}`}
                        >
                            Edit
                        </button>
                        <button
                            className="text-red-600 hover:text-red-800"
                            onClick={() => handleDelete(masjid.mid)}
                            aria-label={`Delete masjid ${masjid.name}`}
                        >
                            Del
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

MasjidList.propTypes = {
    masjids: PropTypes.arrayOf(
        PropTypes.shape({
            mid: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        })
    ).isRequired,
    onClick: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default MasjidList;
