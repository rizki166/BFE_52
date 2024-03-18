import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import profile from "../../assets/image 1.png";

const data = [
  {
    nomorUrut: 1,
    namaPaslon: "CINTARA SURYA PALOH",
    presentase: 78,
    koaslisi: "Partai Persatuan Monyet"

  },
  {
    nomorUrut: 2,
    namaPaslon: "SURYA SURYA",
    presentase: 30,


  },
  {
    nomorUrut: 3,
    namaPaslon: "CINTARA",
    presentase: 10,
  },
];

export default function Carousel() {
  return (
    <div className="bg-[#cecece]">
      <h1 className="text-center text-yellow-900 text-4xl font-bold p-10">INFO PASLON</h1>
      <Swiper className="rounded-lg mySwiper w-[100%]">
        <SliderButton />
        {data.map((d, index) => (
          <SwiperSlide key={index} className="px-20 pb-10">
            <div className="bg-white p-16 rounded-xl shadow-lg shadow-neutral-500">
              <div className="grid grid-cols-3 gap-16">
                <div className="col-span-1">
                  <img src={profile} className="rounded-xl" alt="" />
                </div>
                <div className="col-span-2 flex flex-col">
                  <div className="leading-9">
                    <h5 className="text-[24px] font-bold">
                      Nomor Urut : {d.nomorUrut}
                    </h5>
                    <h2 className="text-[40px] font-bold text-red-900">
                      {d.namaPaslon}
                    </h2>
                  </div>
                  <div className="text-[24px] mt-8">
                    <p>Visi & Misi</p>
                    <ul className="list-disc list-inside">
                      <li>Memindahkan Indonesia ke Isekai.</li>
                      <li>Nonton anime 3x sehari.</li>
                      <li>Melakukan peresapan pada budaya jepang.</li>
                    </ul>
                    <p className="mt-8">Koalisi</p>
                    <ul className="list-disc list-inside">
                      <li>Partai Persatuan Wiboo.</li>
                      <li>Partai Redbull.</li>
                      <li>Partai Black Magic.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

const SliderButton = () => {
  const swiper = useSwiper();

  return (
    <div>
      <button
        onClick={() => swiper.slidePrev()}
        className="focus:bg-white text-slate-500 font-[700] h-14 w-14 rounded-full flex items-center justify-center absolute left-0 top-[40%] z-50"
      >
        <FaAngleLeft size="35px" />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="focus:bg-white text-slate-500 font-[700] h-14 w-14 rounded-full flex items-center justify-center absolute right-0 top-[40%] z-50"
      >
        <FaAngleRight size="35px" />
      </button>
    </div>
  );
};
