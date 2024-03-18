import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import profile from "../../assets/image2.png";
import NavbarDashbord from "../../components/NavbarDashbord";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

function ListPaslon() {
  const [paslonList, setPaslonList] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/v1/Paslon");
        if (response.ok) {
          const data = await response.json();
          setPaslonList(data.data);
        } else {
          console.error("Failed to fetch paslon data");
        }
      } catch (error) {
        console.error("Error fetching paslon data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:5000/api/v1/paslon/${id}`, {
        method: "DELETE"
      });
      if (response.ok) {
        setPaslonList(paslonList.filter((paslon) => paslon.id !== id));
        console.log("Partai deleted successfully");
      } else {
        console.error("Failed to delete partai");
      }
    } catch (error) {
      console.error("Error deleting partai:", error);
    }
  };

  return (
    <div className="">
      <NavbarDashbord />
      <header>
        <h1 className="text-center text-4xl font-bold text-yellow-900 mt-10">
          LIST PASLON
        </h1>
        <div className="flex justify-end mr-48 px-10 mt-10">
          <Link
            to="/addpaslon"
            className="flex items-center bg-yellow-900 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out hover:bg-yellow-800 hover:scale-105"
          >
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
            Add Paslon
          </Link>
        </div>
        <table className="max-w-full mx-auto mt-20">
          <thead>
            <tr className="border-current bg-white bg-gray-100">
              <th className="border px-4">No Urut</th>
              <th className="border px-12">Image</th>
              <th className="border px-10">Name</th>
              <th className="border px-6">Visi & Misi</th>
              <th className="border px-3">Koalisi</th>
              <th className="border px-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paslonList.map((paslon, index) => (
              <tr key={index} className="border-black bg-white w-full">
                <td className="border px-4 text-center">{paslon.nomerUrut}</td>
                <td className="border px-12">
                  <img src={profile} alt="profile" className="w-6/12 ml-10 p-1" />
                </td>
                <td className="border px-10">{paslon.name}</td>
                <td className="border px-3">
                  <p>{paslon.visiMisi}</p>
                </td>
                <td className="border w-56">
                  <p>{paslon.Koaslisi}</p>
                </td>
                <td className="border px-3">
                  <div className="flex flex-col">
                    <button onClick={() => handleDelete(paslon.id)} className="text-red-600 mb-2">
                      <FontAwesomeIcon icon={faTrash} /> Delete
                    </button>

                    <Link to={`/updatepaslon/${paslon.id}`} className="text-blue-600">
                      <FontAwesomeIcon icon={faEdit} /> Edit
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default ListPaslon;
