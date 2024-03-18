import React from 'react';
import { Link } from 'react-router-dom';
import Article from "../interface/Article";

function Detail(props: Article) {
    return (
        <section className="bg-white w-[70rem] h-full mt-5 ml-[100px]">
            <div className="bg-white">
                <div className="flex justify-between p-10">
                    <p className="ml-5 font-bold"><Link to="/">Beranda</Link></p>
                    <h1 className="flex justify-center flex-grow">BERITA HARI INI</h1>
                </div>

                <div className="mt-10 ">
                    <h1 className="text-center text-4xl font-bold">{props.title}</h1>
                    <p className="text-center font-medium">{props.author}</p>
                    <p className="text-center font-medium">{props.date}</p>
                </div>

                <div className='flex justify-center my-10'>
                    <img src={props.image} alt='logo' className='w-11/12' />
                </div>

                <div className='paragraph w-11/12 ml-10 leading-loose'>
                    {props.content.split('\n').map((paragraph: string, index: number) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Detail;
