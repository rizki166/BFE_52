import { useState } from 'react';
import { Link } from "react-router-dom";

interface FormData {
  nameUser: string;
  address: string;
  gender: string;
  username: string;
  password: string;
}

function Register() {
  const [formData, setFormData] = useState<FormData>({
    nameUser: "",
    address: "",
    gender: "", 
    username: "",
    password: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/v1/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        console.log("Registration successful");
        
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <>
      <section className="flex justify-center items-center w-auto mt-10">
        <div className="w-4/12 h-full bg-white p-12 rounded-lg">
          <h1 className="text-center text-2xl mt-0 font-bold text-yellow-800">Register</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="fullname" className="text-base font-semibold text-gray-600">Fullname</label>
            <input type="text" name="nameUser" id="fullname" value={formData.nameUser} onChange={handleChange} className="h-8 ring-1 ring-black w-full mt-2 ring-offset-slate-50  rounded" />

            <label htmlFor="address" className="text-base font-semibold text-gray-600">Address</label>
            <input type="text" name="address" id="address" value={formData.address} onChange={handleChange} className="h-8 ring-1 ring-black w-full mt-2 ring-offset-slate-50  rounded" />

            <label htmlFor="jenisKelamin">Jenis Kelamin:</label>
            <select id="jenisKelamin" name="gender" value={formData.gender} onChange={handleChange} className="h-8 ring-1 ring-black w-full mt-2 ring-offset-slate-50 rounded">
              <option value="">Pilih jenis kelamin</option>
              <option value="laki-laki">Laki-laki</option>
              <option value="perempuan">Perempuan</option>
            </select>

            <label htmlFor="username" className="text-base font-semibold text-gray-600">Username</label>
            <input type="text" name="username" id="username" value={formData.username} onChange={handleChange} className="h-8 ring-1 ring-black w-full mt-2 ring-offset-slate-50  rounded" />

            <label htmlFor="password" className="text-base font-semibold text-gray-600">Password</label>
            <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} className="h-8 ring-1 ring-black w-full mt-2 ring-offset-slate-50  rounded" />

            <button type="submit" className="w-full bg-yellow-600 mt-6 h-10 rounded-xl font-bold text-xl text-white">SUBMIT</button>
          </form>
          <p className="text-center mt-4">Already have an account? <Link to="/login" className="text-blue-900">Login</Link></p>
        </div>
      </section>
    </>
  );
}

export default Register;
