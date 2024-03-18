import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons'

import NavbarDashbord from "../../components/NavbarDashbord";

function ListPartai() {
  const [partaiList, setPartaiList] = useState<any[]>([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/v1/partai");
        if (response.ok) {
          const data = await response.json();
          setPartaiList(data.data);
        } else {
          console.error("Failed to fetch partai data");
        }
      } catch (error) {
        console.error("Error fetching partai data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:5000/api/v1/partai/${id}`, {
        method: "DELETE"
      });
      if (response.ok) {
        setPartaiList(partaiList.filter((partai) => partai.id !== id));
        console.log("Partai deleted successfully");
      } else {
        console.error("Failed to delete partai");
      }
    } catch (error) {
      console.error("Error deleting partai:", error);
    }
  };

  return (
    <>
      <NavbarDashbord />

      <header>
        <h1 className="text-center text-4xl font-bold text-yellow-900 mt-10">
          LIST PARTAI
        </h1>

        <div className="flex justify-end mr-48 px-10 mt-10">
          <Link
            to="/addpartai"
            className="flex items-center bg-yellow-900 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out hover:bg-yellow-800 hover:scale-105"
          >
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
            Add Partai
          </Link>
        </div>
        <table className="max-w-full mx-auto mt-10">
          <thead>
            <tr className="border-current bg-white bg-gray-100">
              <th className="border px-4">No Urut</th>
              <th className="border ">Image</th>
              <th className="border px-10">Name</th>
              <th className="border px-6">Visi & Misi</th>
              <th className="border px-3">Alamat</th>
              <th className="border px-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {partaiList.map((partai: any, index: number) => (
              <tr key={index} className="border-black bg-white w-full">
                <td className="border px-4 text-center">{index + 1}</td>
                <td className="border px-12 w-[10rem] ">
                  <img src={partai.image} alt="profile" className="w-full" />
                </td>
                <td className="border px-10">{partai.namePartai}</td>
                <td className="border px-3">
                  <p>{partai.visiMisi}</p>
                </td>
                <td className="border w-52 text-center">
                  {partai.Address}
                </td>
                <td className="border px-3">
                  <div className="flex flex-col">
                    <button onClick={() => handleDelete(partai.id)} className="text-red-600 mb-2">
                      <FontAwesomeIcon icon={faTrash} /> Delete
                    </button>

                    <Link to={`/updatepartai/${partai.id}`} className="text-blue-600">
                      <FontAwesomeIcon icon={faEdit} /> Edit
                    </Link>
                  </div>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </>
  );
}

export default ListPartai;
