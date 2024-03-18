import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Article from "../../interface/Article"

function Section(data: Article) {
  const navigate = useNavigate();

  const handleDetailClick = () => {
    navigate(`/detail/${data.id}`); 
  };

  return (
    <section className="mt-2">
      <div className="p-2 mb-3">
        {data.id === 1 && (
         <div className="relative ">
         <img src={data.image} alt="kpu" className="w-[45vw] h-auto " />
         <div className="absolute bottom-0 left-0">
           <div className="bg-red-600 rounded-lg p-absolute bottom-4 left-4 w-5/12 h-10 text-center p-1">
             <p className="text-white text-lg font-bold">{data.date}</p>
           </div>
           <button className="text-white text-3xl font-semibold " onClick={handleDetailClick}>
             {data.title}
           </button>
           <p className="text-white text-2xl font-bold mt-2">{data.author}</p>
         </div>
       </div>
     
        )}

        {data.id > 1 && (
          <div className=" flex flex-wrap bg-white w-[20rem]   h-11/12 m-1">
            <div className=" w-full ">
              <img src={data.image} alt=""  className="w-full"/>
            </div>
            <div className="bg-red-600 w-auto  rounded-lg m-3 p-2 mt-4">
              <button className="text-white font-bold text-xl  " onClick={handleDetailClick}>{data.date}</button>
            </div>
            <div className="">
              <h1 className="text-3xl  font-bold ">
                <Link to={`/detail/${data.id}`}> {data.title} </Link>
              </h1>
              <p className="text-xl font-semibold ">{data.author}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Section;
