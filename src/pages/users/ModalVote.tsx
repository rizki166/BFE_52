import profile from "../../assets/image 1.png";

function ModalVote() {
  return (
    <section>
      <h1 className="font-bold text-center text-3xl text-yellow-900 mt-3 p-5">
        MASUKAN PILIHAN MU
      </h1>
      <div className="flex justify-evenly">
        <div className="w-[25rem] h-full bg-yellow-300 p-5  rounded-xl ">
          <div className="relative">
            <img
              src={profile}
              alt="foto profle"
              className="w-full h-[15rem] rounded z-0"
            />
            <div
              className="absolute bg-pink-400 w-20 h-20   rounded-full right-0 top-0 flex justify-center items-center z-10"
              style={{
                transform: "translate(15%, -30%)",
                MozBorderRadius: "5px",
                border: "2px solid white",
              }}
            >
              <h1 className="text-white text-3xl font-bold">1</h1>
            </div>
          </div>

          <h1
            className="font-bold text-3xl mt-2 text-yellow-900"
            style={{
              WebkitTextStroke: "1.5px white",
              WebkitTextStrokeColor: "white",
            }}
          >
            CINTARA SURYA PALOH
          </h1>

          <p className="font-semibold">Memindahkan indonesia ke isekai</p>

          <h6 className="text-xl font-semibold ">Partai Pengusung : </h6>
          <p> partai persatuan monyet</p>
          <p>partai sapi perah indonesia</p>
          <p>partai pisang masak</p>
        </div>
        {/* Card kedua */}
        <div className="w-[25rem] h-full bg-gray-300 p-5  rounded-md ">
          <div className="relative">
            <img
              src={profile}
              alt="foto profle"
              className="w-full h-[15rem] rounded z-0"
            />
            <div
              className="absolute bg-gray-400 w-20 h-20   rounded-full right-0 top-0 flex justify-center items-center z-10"
              style={{
                transform: "translate(15%, -30%)",
                MozBorderRadius: "5px",
                border: "2px solid white",
              }}
            >
              <h1 className="text-white text-3xl font-bold">2</h1>
            </div>
          </div>
          <h1
            className="font-bold text-3xl mt-2 text-yellow-900"
            style={{
              WebkitTextStroke: "1.5px white",
              WebkitTextStrokeColor: "white",
            }}
          >
            SURYA
          </h1>

          <p className="font-semibold">Memindahkan indonesia ke isekai</p>

          <h6 className="text-xl font-semibold ">Partai Pengusung : </h6>
          <p> partai persatuan monyet</p>
          <p>partai sapi perah indonesia</p>
          <p>partai pisang masak</p>
        </div>
        {/* Card ketiga */}
        <div className="w-[25rem] h-full bg-gray-300 p-5  rounded-md ">
          <div className="relative">
            <img
              src={profile}
              alt="foto profle"
              className="w-full h-[15rem] rounded z-0"
            />
            <div
              className="absolute bg-gray-400 w-20 h-20   rounded-full right-0 top-0 flex justify-center items-center z-10"
              style={{
                transform: "translate(15%, -30%)",
                MozBorderRadius: "5px",
                border: "2px solid white",
              }}
            >
              <h1 className="text-white text-3xl font-bold">3</h1>
            </div>
          </div>
          <h1
            className="font-bold text-3xl mt-2 text-yellow-900"
            style={{
              WebkitTextStroke: "1.5px white",
              WebkitTextStrokeColor: "white",
            }}
          >
            CINTARA SURYA PALOH
          </h1>

          <p className="font-semibold">Memindahkan indonesia ke isekai</p>

          <h6 className="text-xl font-semibold ">Partai Pengusung : </h6>
          <p> partai persatuan monyet</p>
          <p>partai sapi perah indonesia</p>
          <p>partai pisang masak</p>
        </div>
      </div>
      <div className="flex justify-evenly mt-10">
        <button
          className="w-4/12 h-10 bg-white font-bold text-2xl rounded-xl text-yellow-900 "
          style={{
            MozBorderRadius: "5px",
            border: "2px solid #5E5A00",
          }}
        >
          RESET
        </button>
        <button className="w-4/12 h-10 bg-white font-bold text-2xl bg-yellow-900 text-white rounded-xl">
          SUBMIT
        </button>
      </div>
    </section>
  );
}

export default ModalVote;
