// src/components/ThreatNews.js
import './ThreatNews.css';
import React, { useState, useEffect } from 'react';
import { fetchThreatNews } from '../services/newsService'; // Import the news service

const ThreatNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNews = async () => {
      const fetchedNews = await fetchThreatNews();
      setNews(fetchedNews);
      setLoading(false);
    };

    getNews();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="threat-news-container">
      <h2>Latest Cybersecurity News</h2>
      <ul>
        {news.map((article, index) => (
          <li key={index} className="news-item">
            <h3><a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a></h3>
            <p>{article.description}</p>
            <small>Source: {article.source.name}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThreatNews;
