import React from 'react';

const UserDetails = ({ user }) => (
  <div className="mb-8 bg-white p-6 rounded-lg shadow">
    <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
    <p className="mb-2"><strong>Email:</strong> {user.email}</p>
    <p><strong>Phone:</strong> {user.phone}</p>
  </div>
);

export default UserDetails;