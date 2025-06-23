import React, { useEffect, useState } from "react";
import "./Blog.css";

const Blog = () => {
  const [articles, setArticles] = useState([]);

  const fetchNews = async () => {
    const res = await fetch(
      `https://gnews.io/api/v4/search?q=cryptocurrency&lang=en&max=6&token=0b91f79e359b37022b26f5f77892489d`
    );
    const data = await res.json();
    setArticles(data.articles || []);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="blog">
      <h1>Crypto Blog</h1>
      <div className="blog-list">
        {articles.map((article, index) => (
          <div className="blog-card" key={index}>
            <img src={article.image} alt="news" />
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
