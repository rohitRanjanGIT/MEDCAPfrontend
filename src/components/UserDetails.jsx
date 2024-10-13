import React from 'react';
import { formatDate } from '../utils/utils'; // Adjust the import path as needed

const UserDetails = ({ user }) => (
  <div className="mb-8 bg-white p-6 rounded-lg shadow">
    <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
    <p className="mb-2"><strong>Email:</strong> {user.email}</p>
    <p className="mb-2"><strong>Phone:</strong> {user.phone}</p>

    {/* New Fields for Personal Information */}
    <h3 className="text-lg font-semibold mt-6 mb-4">Personal Information</h3>
    {/* Display First Name and Last Name */}
    <p className="mb-2"><strong>First Name:</strong> {user.firstName}</p>
    <p className="mb-2"><strong>Last Name:</strong> {user.lastName}</p>
    <p className="mb-2"><strong>Date of Birth:</strong> {formatDate(user.dob)}</p>
    <p className="mb-2"><strong>Gender:</strong> {user.gender}</p>
    
    {/* New Fields for Health Information */}
    <h3 className="text-lg font-semibold mt-6 mb-4">Health Information</h3>
    <p className="mb-2"><strong>Blood Type:</strong> {user.bloodType}</p>
    <p className="mb-2"><strong>Height:</strong> {user.height} cm</p>
    <p className="mb-2"><strong>Weight:</strong> {user.weight} kg</p>
  </div>
);

export default UserDetails;
