import { useState, useEffect, ChangeEvent } from 'react';
import { useParams } from 'react-router-dom';
import NavbarDashbord from '../../components/NavbarDashbord';

function UpdatePartai() {
  const { id } = useParams<{ id: string }>(); 
  const [formData, setFormData] = useState({
    image: "",
    namePartai: "",
    ketuaUmum: "",
    visiMisi: "",
    Address: "" 
  });

  useEffect(() => {
    
    const fetchPartaiData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/v1/partai/${id}`);
        if (response.ok) {
          const data = await response.json();
          setFormData(data); 
        } else {
          console.error("Failed to fetch partai data");
        }
      } catch (error) {
        console.error("Error fetching partai data:", error);
      }
    };

    fetchPartaiData();
  }, [id]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/v1/Partai/${id}`, {
        method: "PUT", 
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log("Data updated successfully");
      } else {
        console.error("Failed to update data");
      }
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div className="bg-white w-full h-full">
      <NavbarDashbord />
      <header>
        <h1 className="text-center font-bold text-3xl text-yellow-900 p-10">
          UPDATE PARTAI
        </h1>
        <section className="flex justify-center gap-10 pb-10">
          <img src={formData.image} alt="Poto profile" className="w-3/12 h-96" />
          <div className="flex flex-col w-4/12">
            <label className="font-bold text-gray-600">Image</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full h-10 ring-2 ring-black w-full mt-2 ring-offset-slate-50 rounded"
            />

            
            <label className="font-bold text-gray-600">Nama Partai</label>
            <input
              type="text"
              name="namePartai"
              value={formData.namePartai}
              onChange={handleChange}
              className="w-full h-10 ring-2 ring-black w-full mt-2 ring-offset-slate-50 rounded"
            />

            <label className="font-bold text-gray-600">Ketua Umum</label>
            <input
              type="text"
              name="ketuaUmum"
              value={formData.ketuaUmum}
              onChange={handleChange}
              className="w-full h-10 ring-2 ring-black w-full mt-2 ring-offset-slate-50 rounded"
            />

            <label className="font-bold text-gray-600">Visi & Misi</label>
            <textarea  
              name="visiMisi"
              value={formData.visiMisi}
              onChange={handleChange}
              className="w-full h-20 h-10 ring-2 ring-black w-full mt-2 ring-offset-slate-50 rounded"
            />
            

            <label className="font-bold text-gray-600">Alamat</label>
            <textarea  
  name="Address" 
  value={formData.Address} 
  onChange={handleChange}
  className="w-full h-20 h-10 ring-2 ring-black w-full mt-2  rounded"
/>

            <button
              onClick={handleSubmit}
              className="w-11/12 h-10 bg-yellow-900 mt-5 rounded-xl text-white font-bold text-2xl"
            >
              SUBMIT
            </button>
          </div>
        </section>
      </header>
    </div>
  );
}

export default UpdatePartai;
