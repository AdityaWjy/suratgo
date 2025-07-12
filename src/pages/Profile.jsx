import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    fullname: "",
  });

  // Get data user
  useEffect(() => {
    const loggedInFullName = localStorage.getItem("fullname");

    if (loggedInFullName) {
      setProfile({ fullname: loggedInFullName });
    }
  }, []);

  // Handle change input
  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  // Handle submit method
  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("fullname", profile.fullname);
    alert("Nama panjang berhasil diperbarui");

    navigate("/");
  };

  return (
    <div className="bg-gray-800 min-h-screen p-4 sm:p-6 lg:p-8 flex items-center justify-center">
      <div className="mx-auto max-w-md w-full">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">
          Edit Profile
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-700 p-6 rounded-lg shadow-lg space-y-4"
        >
          <div>
            <label
              htmlFor="fullname"
              className="block text-sm font-medium text-gray-300"
            >
              Nama panjang
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={profile.fullname}
              onChange={handleChange}
              required
              className="mt-1 block w-full bg-gray-600 border border-gray-500 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 cursor-pointer rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 "
            >
              Simpan Perubahan
            </button>
          </div>

          <div>
            <Link
              to={"/"}
              type="button"
              className="w-full flex justify-center py-2 px-4 cursor-pointer rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 "
            >
              Kembali
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
