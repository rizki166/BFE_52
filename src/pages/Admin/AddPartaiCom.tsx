import React, { useState } from 'react';
import profile from "../../assets/image 1.png";
import NavbarDashboard from '../../components/NavbarDashbord';

function AddPartaiForm() {
  const [formData, setFormData] = useState({
    image: "",
    namePartai: "",
    KetuaUmum: "",
    visiMisi: "",
    Address: "" 
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/v1/Partai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log("Data added successfully");
        clearFormData();
      } else {
        console.error("Failed to add data");
      }
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  const clearFormData = () => {
    setFormData({
      image: "",
      namePartai: "",
      KetuaUmum: "",
      visiMisi: "",
      Address: ""
    });
  };

  return (
    <div className="bg-white w-full h-full">
      <NavbarDashboard />
      <header>
        <h1 className="text-center font-bold text-3xl text-yellow-900 p-10">
          ADD PARTAI
        </h1>
        <section className="flex justify-center gap-10 pb-10">
          <img src={profile} alt="Poto profile" className="w-3/12 h-96" />
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
              name="KetuaUmum"
              value={formData.KetuaUmum}
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
              className="w-full h-20 h-10 ring-2 ring-black w-full mt-2 ring-offset-slate-50 rounded"
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

export default AddPartaiForm;
