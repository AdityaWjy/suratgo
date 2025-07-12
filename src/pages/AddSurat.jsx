import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddSurat = () => {
  // data surat
  const [letterNumber, setLetterNumber] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [goods, setGoods] = useState("");

  const navigate = useNavigate();

  // handle submit method
  const handleSubmit = (e) => {
    e.preventDefault();

    const existingSurat = localStorage.getItem("suratData");
    const suratArray = existingSurat ? JSON.parse(existingSurat) : [];

    // check data duplicate
    const isDuplicate = suratArray.some((s) => s.letterNumber === letterNumber);

    if (isDuplicate) {
      alert("Nomor surat bertipe unik.");
      return;
    }

    const newSurat = {
      letterNumber: letterNumber,
      date: date,
      location: location,
      goods: goods,
    };

    suratArray.push(newSurat);

    localStorage.setItem("suratData", JSON.stringify(suratArray));

    alert("Surat berhasil ditambahkan!");
    navigate("/");
  };

  return (
    <div className="bg-gray-800 min-h-screen pt-10">
      <div className="mx-auto max-w-2xl px-4">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Tambah Surat Jalan Baru
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="letterNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Nomor Surat
              </label>
              <input
                type="text"
                id="letterNumber"
                value={letterNumber}
                onChange={(e) => setLetterNumber(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700"
              >
                Tanggal
              </label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700"
              >
                Tujuan
              </label>
              <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="goods"
                className="block text-sm font-medium text-gray-700"
              >
                Barang (pisahkan dengan koma)
              </label>
              <input
                type="text"
                id="goods"
                value={goods}
                onChange={(e) => setGoods(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="flex justify-end pt-4 gap-3">
              <div>
                <Link
                  to={"/"}
                  type="button"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Kembali
                </Link>
              </div>
              <div>
                <button
                  type="submit"
                  className="cursor-pointer inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Simpan Surat
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddSurat;
