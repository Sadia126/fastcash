import React, { useState } from "react";
import { FiEdit2 } from "react-icons/fi";

import { toast } from "react-hot-toast";
import useAuth from "../../../Hooks/useAuth";

const MyProfile = () => {
  const { user, handleUpdateProfile } = useAuth();
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!name || !photo) {
      toast.error("Name and photo URL are required");
      return;
    }

    handleUpdateProfile(name, photo)
      .then(() => {
        toast.success("Profile updated successfully");
        setEditMode(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to update profile");
      });
  };

  return (
    <div className="max-w-md mx-auto my-20 text-center ">
      {/* Profile Image + Edit Button */}
      <div className="relative w-40 h-40 mx-auto">
        <img
          src={user?.photoURL }
          alt="User"
          className="w-full h-full rounded-full object-cover border-4 border-gray-300"
        />
        <button
          onClick={() => setEditMode(!editMode)}
          className="absolute bottom-2 right-2 bg-white border rounded-full p-2
           hover:bg-gray-100"
          title="Edit Profile"
        >
          <FiEdit2 size={18} />
        </button>
      </div>

      {/* User Info */}
      <h2 className="text-2xl font-bold mt-4">
        {user?.displayName || "Anonymous"}
      </h2>
      <p className="text-gray-500">{user?.email}</p>

      {/* Edit Fields */}
      {editMode && (
        <form onSubmit={handleUpdate} className="mt-6 space-y-4 text-left">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Photo URL</label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              required
            />
          </div>
          <button className="btn bg-[#95b864] text-white w-full">Update Profile</button>
        </form>
      )}
    </div>
  );
};

export default MyProfile;
