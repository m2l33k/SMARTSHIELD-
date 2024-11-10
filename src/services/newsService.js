// src/services/newsService.js
import axios from 'axios';

const NEWS_API_KEY = '189e3538a180413aacaf00c3424a63b0'; // Replace with your NewsAPI key
const NEWS_API_URL = 'https://newsapi.org/v2/everything'; // NewsAPI endpoint for fetching articles

export const fetchThreatNews = async () => {
  try {
    const response = await axios.get(NEWS_API_URL, {
      params: {
        q: 'cybersecurity OR hacking OR vulnerabilities OR malware', // Keywords related to cybersecurity
        sortBy: 'publishedAt', // Sort by the latest articles
        pageSize: 10, // Limit to 10 articles for the feed
        apiKey: NEWS_API_KEY,
      },
    });

    const articles = response.data.articles;
    return articles.map(article => ({
      title: article.title,
      description: article.description,
      url: article.url,
      source: article.source.name,
    }));
  } catch (error) {
    console.error('Error fetching news:', error);
    throw new Error('Failed to fetch news from API');
  }
};
