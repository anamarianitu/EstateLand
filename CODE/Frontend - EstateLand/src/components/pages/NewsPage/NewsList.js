import React, { useState, useEffect } from 'react'
import NewsService from '../../../services/NewsService';
import NewsBoxForDisplay from '../../NewsBoxForDisplay';
import './News.css'

function NewsList() {

    const [news, setNews] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        NewsService.getAllNews(setNews);
    }, []);

    if (!news) return null;

    return (
        <div>
            <div className="propertySearchFilter text-center">
                <div>
                    <input className="propertySearchInput" type="text" placeholder="Search..." onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }}></input>

                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            

            {news.filter((item) => {
                if (searchTerm === "") {
                    return item;
                } else if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return item;
                }
            }).map(item => <NewsBoxForDisplay key={item.id} idNews={item.id} title={item.title} category={item.category} content={item.content} />)}
        </div>
    )
}

export default NewsList
