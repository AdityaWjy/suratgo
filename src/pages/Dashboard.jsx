import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import SuratTable from "../components/SuratTable.JSX";
import { useSearchParams } from "react-router-dom";

const Dashboard = () => {
  // data
  const [dataLetter, setDataLetter] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const querySearch = searchParams.get("search") || "";
  const queryPage = parseInt(searchParams.get("page")) || 1;

  const [searchData, setSearchData] = useState(querySearch);
  const [currentPage, setCurrentPage] = useState(queryPage);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    const storedData = localStorage.getItem("suratData");

    if (storedData) {
      setDataLetter(JSON.parse(storedData));
    }
  }, []);

  // search filter
  const filteredData = dataLetter.filter((item) =>
    item.location.toLowerCase().includes(searchData.toLowerCase())
  );

  // data pagination
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = filteredData.slice(firstPostIndex, lastPostIndex);

  // update url if search data
  useEffect(() => {
    const params = {};
    if (searchData) params.search = searchData;
    if (currentPage > 1) params.page = currentPage;
    setSearchParams(params);
  }, [searchData, currentPage, setSearchParams]);

  // handle delete method

  const handleDelete = (letterNumber) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus surat ini?")) {
      // get data from local
      const storedData = localStorage.getItem("suratData");
      const suratArray = storedData ? JSON.parse(storedData) : [];

      const newData = suratArray.filter(
        (surat) => surat.letterNumber !== letterNumber
      );

      localStorage.setItem("suratData", JSON.stringify(newData));

      setDataLetter(newData);

      alert("Surat berhasil dihapus.");
    }
  };
  return (
    <div className="bg-gray-800 min-h-screen antialiased md:subpixel-antialiased ">
      <Navbar />

      <div className="mt-7 mx-3 md:mx-0 lg:mx-0">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          {/* table component */}
          <SuratTable
            dataLetter={currentPost}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            postsPerPage={postsPerPage}
            totalPosts={filteredData.length}
            searchData={searchData}
            setSearchData={setSearchData}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
