import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import profile from "../../assets/image 1.png";

function AddPaslon() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nomerUrut: "",
    name: "",
    visiMisi: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      const { nomerUrut, name, visiMisi } = formData;
      const newData = { nomerUrut, name, visiMisi };

      const response = await fetch("http://localhost:5000/api/v1/paslon", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newData)
      });

      if (response.ok) {
        console.log("Data added successfully");
        setFormData({
          nomerUrut: "",
          name: "",
          visiMisi: ""
        });
        navigate('/listpaslon');
      } else {
        console.error("Failed to add data");
      }
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  return (
    <div className="bg-white w-full h-full ">
      <header>
        <h1 className="text-center font-bold text-3xl text-yellow-900 p-10">
          ADD PASLON
        </h1>
        <section className="flex justify-center gap-10 pb-10">
          <img src={profile} alt="Poto profile" className="w-3/12 h-96" />
          <div className="flex flex-col w-4/12">
            <label className="font-bold text-gray-600">Nomer Urut</label>
            <input
              type="text"
              name="nomerUrut"
              value={formData.nomerUrut}
              onChange={handleChange}
              className="w-full h-10 ring-2 ring-black w-full mt-2 ring-offset-slate-50 rounded"
            />

            <label className="font-bold text-gray-600">Nama</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full h-10 ring-2 ring-black w-full mt-2 ring-offset-slate-50 rounded"
            />

            <label className="font-bold text-gray-600">Visi & Misi</label>
            <textarea
              name="visiMisi"
              value={formData.visiMisi}
              onChange={handleChange}
              className="w-full h-20 h-10 ring-2 ring-black w-full mt-2 ring-offset-slate-50 rounded"
            ></textarea>

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

export default AddPaslon;
