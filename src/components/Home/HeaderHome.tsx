import dumbwaysLogo from '../../assets/brandred 1.png'
import logoKpu from '../../assets/logoKpu.png'

function Header (){
    return(
        <header >
        <div className="flex justify-end w-10/12 h-full bg-orange-900 mt-20 ml-20  rounded-3xl">
       <div className="flex justify-between w-full h-full">
         <div>
           <img src={dumbwaysLogo} alt="Dumbways Logo" className="w-5/12 " />
           <div className=" p-5 mt-20 ">
             <h1 className="text-white text-5xl font-bold ">SELAMAT DATANG</h1>
             <p className="w-6xl  text-white text-2xl font-bold ">PEMILU PRESIDEN DUMBWAYS.ID YANG JUJUR DIPILIH MELALUI SEBUAH ARTI NAMA</p>
           </div>
         </div>
         <div>
           <img src={logoKpu} alt="KPU Logo" className="w-full " />
         </div>
       </div>
     </div>
   </header>
    )
}

export default Header;