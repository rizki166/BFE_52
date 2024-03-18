
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Aside from '../../components/Aside';
import Section from '../../components/Home/Section';
import Header from '../../components/Home/HeaderHome';
import axios from 'axios';
import Article from '../../interface/Article';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/Article');
                setArticles(response.data.data);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };

        fetchArticles();
    }, []);

    return (
        <div>
            <Navbar />
            <Header />

            <div className="flex flex-wrap justify-center items-center gap-4 mt-12 px-6">
                {articles.slice(0, 5).map((article) => (
                    <div key={article.id}>
                        <Section {...article} />
                    </div>
                ))}
            </div>

            <Aside />
            <Footer />
        </div>
    );
};

export default HomePage;
