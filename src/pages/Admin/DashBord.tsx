
import profile from "../../assets/profile.svg";
import NavbarDashbord from "../../components/NavbarDashbord";


function DashBord() {
  return (
    <>
      <NavbarDashbord />
      <section>
        <div className="w-full h-11/12 bg-white p-10  gap-5">
          <h1 className="text-yellow-600 text-center text-4xl font-bold">
            DASHBORD
          </h1>
          <div className="flex justify-evenly mt-10 gap-20">
            <div className="w-14 h-14 bg-yellow-800 rounded-full flex justify-center p-2">
              <h2 className="w-10 h-10 text-center bg-yellow-400  rounded-full text-3xl font-bold text-yellow-800">
                1
              </h2>
            </div>
            <div className="w-14 h-14 bg-blue-800 rounded-full flex justify-center p-2">
              <h2 className="w-10 h-10 text-center bg-blue-100  rounded-full text-3xl font-bold text-blue-800">
                2
              </h2>
            </div>
            <div className="w-14 h-14 bg-red-900 rounded-full flex justify-center p-2">
              <h2 className="w-10 h-10 text-center bg-red-600  rounded-full text-3xl font-bold text-red-900 ">
                3
              </h2>
            </div>
          </div>

          <div className="flex justify-evenly p-10 ml-8">
            {/* Card pertama */}
            <div className="w-auto h-full bg-yellow-500 p-5  rounded-md">
              <div className="h-auto ">
                <img
                  src={profile}
                  alt="foto profle"
                  className=" h-[18rem] ml-6"
                />
                <h1
                  className="font-bold text-3xl mt-2 text-red-900"
                  style={{

                    WebkitTextStroke: "2px white",
                    WebkitTextFillColor: "transparent",
                    WebkitTextStrokeColor: "white",
                  }}
                >
                  SURYA SURYA
                </h1>

                <p
                  className="text-2xl text-red-900"
                  style={{
                    WebkitTextStroke: "0.5px white",
                    WebkitTextFillColor: "transparent",
                    WebkitTextStrokeColor: "white",
                  }}
                >
                  Akumulasi : 45%
                </p>
                <p
                  className="text-2xl "
                  style={{
                    color: "red",
                    WebkitTextStroke: "0.5px white",
                    WebkitTextFillColor: "transparent",
                    WebkitTextStrokeColor: "white",
                  }}
                >
                  Jumlah Vote : 117 Voters
                </p>
              </div>
            </div>
            {/* Card kedua */}
            <div className="w-auto h-full bg-blue-300 p-5  rounded-md">
              <div className="h-auto ">
                <img
                  src={profile}
                  alt="foto profle"
                  className="  h-[18rem] ml-6"
                />
                <h1
                  className="font-bold text-3xl mt-2 text-red-900"
                  style={{
                    fontSize:'35px',
                    color: '#00585E',
                    WebkitTextStroke: "2px white",
                    WebkitTextStrokeColor: "white",
                  }}
                >
                  SURYA SURYA
                </h1>

                <p
                  className="text-2xl "
                  style={{
                    color: '#00585E',
                    WebkitTextStroke: "0.3px white",
                    WebkitTextStrokeColor: "white",
                  }}
                >
                  Akumulasi : 75%
                </p>
                <p
                  className="text-2xl "
                  style={{
                    
                    color: "#00585E",
                    WebkitTextStroke: "0.3px white",
                    WebkitTextStrokeColor: "white",
                  }}
                >
                  Jumlah Vote : 300 Voters
                </p>
              </div>
            </div>
            {/* Card ketiga */}
            <div className="w-auto h-full bg-red-600 p-5  rounded-md">
              <div className="h-auto ">
                <img
                  src={profile}
                  alt="foto profle"
                  className=" h-[18rem] ml-6"
                />
                <h1
                  className="font-bold text-3xl mt-2 text-red-900"
                  style={{
                    WebkitTextStroke: "2px white",
                    WebkitTextFillColor: "transparent",
                    WebkitTextStrokeColor: "white",
                  }}
                >
                  SURYA SURYA
                </h1>

                <p
                  className="text-2xl text-red-900"
                  style={{
                    WebkitTextStroke: "0.5px white",
                    WebkitTextFillColor: "transparent",
                    WebkitTextStrokeColor: "white",
                  }}
                >
                  Akumulasi : 45%
                </p>
                <p
                  className="text-2xl "
                  style={{
                    color: "red",
                    WebkitTextStroke: "0.5px white",
                    WebkitTextFillColor: "transparent",
                    WebkitTextStrokeColor: "white",
                  }}
                >
                  Jumlah Vote : 117 Voters
                </p>
              </div>
            </div>
          </div>
        </div>

        <aside>
          <h1 className="text-center text-5xl font-bold mt-10"
           style={{color:'#5E5400'}}
           >LIST VOTER</h1>
            <div className="w-full mt-10 h-96  justify-center p-10" >
               <table className="max-w-full mx-auto">
                <thead >
                    <tr className="border-current bg-white " >
                        <th className="border px-4 ">No</th>
                        <th className="border px-12">Nama</th>
                        <th className="border px-10">alamat</th>
                        <th className="border  px-6">jenis Kelamin</th>
                        <th className="border  px-3">Paslon</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-center border-black bg-white">
                        <td  className="border px-4 " >1</td>
                        <td  className="border px-12">Sugeng No Pants</td>
                        <td  className="border px-10">Cilengsi</td>
                        <td  className="border  px-6">Laki laki</td>
                        <td  className="border  px-3">Paloh</td>
                    </tr>
                    <tr className="text-center border-current bg-white">    
                        <td  className="border px-4 ">2</td>
                        <td   className="border px-12">Haris Gams</td>
                        <td className="border px-10">Serang</td>
                        <td  className="border  px-6">Perempuan</td>
                        <td  className="border  px-3">Paloh</td>
                        
                        
                        
                    </tr>
                    <tr className="text-center border-current bg-white">
                        <td className="border px-4 ">3</td>
                    <td className="border px-12">Aziz Union</td>
                        <td className="border px-10">Bekasi</td>
                        <td className="border  px-6">Laki laki</td>
                        <td className="border  px-3">Surya</td>
                        
                        
                    </tr>
                    <tr className="text-center border-black bg-white">
                        
                        <td className="border px-4 ">4</td>
                    <td className="border px-12">Lae tanjung balai</td>
                    <td className="border px-10">Tanjung balai</td>
                <td className="border  px-6">Laki laki</td>
                <td className="border  px-3">Cintara</td>
                    </tr>
                    <tr>
                        
                        
                        
                        
                    </tr>
                </tbody>
                
                </table>
                <h1 className="mt-5 font-bold text-2xl text-center">TOTAL SUARA TERKUMPUL : 1000 Voters</h1>
            </div>
        </aside>
      </section>

    </>
  );
}

export default DashBord;
