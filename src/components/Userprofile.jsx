import React, { useEffect, useState } from 'react';
import { Pencil } from 'lucide-react';
import { getUserProfile, updateUserProfile } from './../API/userApi';

const UserProfileTab = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    avatar: '',
  });

  const [editMode, setEditMode] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  useEffect(() => {
    getUserProfile().then((res) => {
      if (res.success) {
        setUser(res.data);
        setEditedUser(res.data);
      }
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleSave = () => {
    updateUserProfile(editedUser).then((res) => {
      if (res.success) {
        setUser(editedUser);
        setEditMode(false);
      }
    });
  };

  const handleCancel = () => {
    setEditedUser(user);
    setEditMode(false);
  };

  return (
    <div className="text-sm text-gray-700 space-y-4">
      {/* Profile Picture */}
      <div className="flex items-center justify-between border-b py-3">
        <span>Profile</span>
        <div className="relative w-10 h-10">
          {editMode ? (
            <input
              type="text"
              name="avatar"
              value={editedUser.avatar}
              onChange={handleChange}
              className="text-xs border rounded px-1 w-40"
            />
          ) : (
            <img
              src={user.avatar}
              alt="Profile"
              className="rounded-full w-10 h-10 object-cover"
            />
          )}
        </div>
      </div>

      {/* Name */}
      <div className="flex items-center justify-between border-b py-3">
        <span>User Name</span>
        <div className="flex items-center space-x-2">
          {editMode ? (
            <input
              type="text"
              name="name"
              value={editedUser.name}
              onChange={handleChange}
              className="border rounded px-2 py-1 text-sm"
            />
          ) : (
            <span>{user.name}</span>
          )}
          {!editMode && (
            <Pencil
              className="w-4 h-4 text-gray-500 hover:text-black cursor-pointer"
              onClick={() => setEditMode(true)}
            />
          )}
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-center justify-between border-b py-3">
        <span>User Phone</span>
        {editMode ? (
          <input
            type="text"
            name="phone"
            value={editedUser.phone}
            onChange={handleChange}
            className="border rounded px-2 py-1 text-sm"
          />
        ) : (
          <span>{user.phone}</span>
        )}
      </div>

      {/* Email */}
      <div className="flex items-center justify-between border-b py-3">
        <span>Email</span>
        {editMode ? (
          <input
            type="email"
            name="email"
            value={editedUser.email}
            onChange={handleChange}
            className="border rounded px-2 py-1 text-sm"
          />
        ) : (
          <span>{user.email}</span>
        )}
      </div>

      {/* Password */}
      <div className="flex items-center justify-between border-b py-3">
        <span>Password</span>
        <div className="flex items-center space-x-4">
          <span>*******</span>
          <button className="border border-blue-500 text-blue-600 text-sm px-3 py-1 rounded hover:bg-blue-50">
            Change Password
          </button>
        </div>
      </div>

      {/* Save / Cancel Buttons */}
      {editMode && (
        <div className="flex space-x-2 pt-2 justify-center">
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:opacity-90"
          >
            Save
          </button>
          <button
            onClick={handleCancel}
            className="border border-gray-400 text-gray-600 px-4 py-2 rounded hover:bg-gray-50"
          >
            Cancel
          </button>
        </div>
      )}

      {/* Other Actions */}
      <div className="pt-6 flex justify-center space-x-4">
        <button className="border border-red-500 text-red-500 px-4 py-2 rounded hover:bg-red-50">
          Delete Account
        </button>
        <button className="bg-red-500 text-white px-6 py-2 rounded hover:opacity-90">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default UserProfileTab;
