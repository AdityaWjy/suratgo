import React from "react";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";

export default function SuratTable({
  dataLetter,
  currentPage,
  setCurrentPage,
  postsPerPage,
  totalPosts,
  searchData,
  setSearchData,
  handleDelete,
}) {
  return (
    <div className="min-h-full">
      <div className="my-4 flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <p className="text-white text-[15px] uppercase font-semibold tracking-wider">
            Cari surat berdasarkan tujuan
          </p>
          <div className="mt-2">
            <input
              type="text"
              placeholder="Cari surat..."
              className="w-full sm:w-72 px-4 py-2 border border-gray-500 rounded-lg text-white placeholder:text-gray-400 bg-gray-700 "
              value={searchData}
              onChange={(e) => {
                setSearchData(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
        </div>
        <div className="self-start md:self-center">
          <Link
            to={"/add-surat"}
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-150 ease-in-out cursor-pointer"
          >
            Tambah Surat
          </Link>
        </div>
      </div>

      <div className="mt-3 overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full">
          <caption className="caption-top font-semibold p-4 text-sm text-gray-800 text-left">
            Tabel Data Surat Jalan
          </caption>
          {/* table head */}
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                #
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Nomor Surat
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Tanggal
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Tujuan
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Barang
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Aksi
              </th>
            </tr>
          </thead>

          {/* table body*/}
          <tbody className="bg-white divide-y divide-gray-200">
            {dataLetter.map((letter, index) => {
              const rowNumber = (currentPage - 1) * postsPerPage + index + 1;

              return (
                <tr key={letter.letterNumber}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {rowNumber}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {letter.letterNumber}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {letter.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {letter.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {letter.goods}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <Link to={`/edit-surat/${letter.letterNumber}`}>
                        <button className="px-3 py-1 rounded-md bg-yellow-500 hover:bg-yellow-600 text-gray-800 cursor-pointer">
                          Edit
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(letter.letterNumber)}
                        className="px-3 py-1 rounded-md bg-red-500 hover:bg-red-600 text-white cursor-pointer"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <Pagination
          totalPosts={totalPosts}
          postsPerPage={postsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}
