import DetailPaslon from "../../components/Paslon/DetailPaslon";
import Footer from "../../components/Footer";
import  Carousel  from "../../components/Paslon/Carousel";
import Navbar from "../../components/Navbar";
import AsidePaslon from "../../components/Paslon/AsidePaslon";




const Paslon: React.FC = () => {
    return (
      <div>
          <Navbar />
          <DetailPaslon />
          <Carousel />
          <AsidePaslon />
          <Footer />
      </div>
    )  
  }
  
  export default Paslon;
