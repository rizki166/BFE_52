import logo from "../assets/logo.png"

function Footer () {
    return (
<div className="w-full h-52 bg-black" >
  <div className="flex ml-[145px] pt-[2rem] gap-5">
    <img src={logo} alt="logo" className="w-20 h-20" />
    <div className="mt-3">
    <h1 className="text-white text-[16px] leading-[19px]">DUMBWAYS.ID</h1>
    <p className="text-white text[24px] leading-[29px ]font-bold w-[20rem]">Jl. Elang IV, Sawah Lama, Kec. Ciputat, Kota Tangerang Selatan, Banten 15413</p>
   </div>
  </div>
  <div className="w-auto mt-10">
  <hr className=" bg-whites"></hr>
  <p className="text-white m-5 text-center text-[20px] leading-[24px] font-medium">Komisi Pemilihan Umum DumbWays.ID | Rizki 2023</p>
  </div>
 
</div>
    )
}

export default Footer;