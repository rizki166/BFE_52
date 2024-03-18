import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Detail from "../../components/Detail";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";

const DetailPage: React.FC = () => {
    const [detailData, setDetailData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/v1/Article/${id}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                setDetailData(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };
        fetchArticle();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!detailData) {
        return <div>Data not found</div>;
    }

    return (
        <>
            <Navbar />
            <Detail
                id={detailData.id}
                image={detailData.image}
                date={detailData.date}
                title={detailData.title}
                author={detailData.author}
                content={detailData.content} 
            />
            <Footer />
        </>
    );
};

export default DetailPage;
