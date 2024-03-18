
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Link } from "react-router-dom";

const DetailPaslon = () => {
  const data = [
    { name: "Cintara Surya Paloh", value: 78 , label:"78%" },
    { name: "Cintara", value: 25 },
    { name: "Surya surya", value: 40 }
  ];

  const COLORS = ["rgb(255,99,132)", "rgb(54,162,235)", "rgb(255,205,86)"];
  return (
    <>
      <section>
        <div className="w-full h-full bg-white gap-5 p-12 ">
          <h1 className="font-bold text-3xl text-center p-10">
            INFO PEMILU TERUPDATE
          </h1>

          <section className="flex  flex-wrap  gap-5 ml-20">
          <div className="w-4/12">
            <h1 className="text-4xl font-bold text-center">Hasil:</h1>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart >
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={180}
                  fill="#8884d8"
                  label
                  
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
            <div className="flex flex-col p-10 gap-5">
              <div>
                <div className="w-[30rem] bg-rose-400 flex  p-3 pl-10  gap-5 rounded-md">
                  <div className="w-[80px] h-[118px] bg-black text-center bg-red-800 rounded-xl" style={{
                    MozBorderRadius: "5px",
                    border: "3px solid white",
                  }}>
                    <p className="text-white font-bold text-[19px]">
                      No. Paslon
                    </p>
                    <p className="text-white text-4xl">3</p>
                  </div>
                  <div className="flex flex-col font-bold text-2xl text-red-900" style={{
                    
                    WebkitTextStroke: "1px white",
                    WebkitTextStrokeColor: "white",
                  }}>
                    <h1>CINTARA SURYA PALOH</h1>
                    <p>78%</p>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="w-[30rem] bg-yellow-400 flex  p-3 pl-10  gap-5 rounded-md">
                  <div className="w-[80px] h-[118px] bg-black text-center bg-yellow-900 rounded-xl"style={{
                    MozBorderRadius: "5px",
                    border: "3px solid white",
                  }}>
                    <p className="text-white font-bold text-[19px]">
                      No. Paslon
                    </p>
                    <p className="text-white text-4xl">3</p>
                  </div>
                  <div className="flex flex-col font-bold text-2xl text-yellow-900" style={{
                                        WebkitTextStroke: "1px white",
                                        WebkitTextStrokeColor: "white",
                  }}>
                    <h1>SURYA SURYA</h1>
                    <p>45%</p>
                  </div>
                </div>
              </div>

              <div >
                <div className="w-[30rem] bg-blue-300 flex  p-3 pl-10  gap-5 rounded-md">
                  <div className="w-[80px] h-[118px] bg-black text-center bg-blue-900 rounded-xl" style={{
                     MozBorderRadius: "5px",
                     border: "3px solid white",
                  }}>
                    <p className="text-white font-bold text-[19px]">
                      No. Paslon
                    </p>
                    <p className="text-white text-4xl">3</p>
                  </div>
                  <div className="flex flex-col font-bold text-2xl text-blue-900" style={{
                                        WebkitTextStroke: "1px white",
                                        WebkitTextStrokeColor: "white",
                  }}>
                    <h1>CINTARA </h1>
                    <p>25%</p>
                  </div>
                </div>
              </div>
              <div>
                <button className="w-11/12 h-10 mt-10 bg-yellow-900 text-white font-bold text-[20px] rounded-md">
                  <Link to="/ModalVote">
                  MASUKAN SUARA MU
                  </Link>
                </button>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default DetailPaslon;
