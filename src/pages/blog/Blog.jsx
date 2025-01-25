import React, { useState } from "react";
import { blogPosts } from "../../data"; 
import "./blog.css";

const Blog = () => {
    const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; 

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  return (
    <section className="blog section">
      <header className="section__header">
        <h1 className="bg-text">POSTS</h1>
        <h2 className="section__title">
          MY <span>BLOGS</span>
        </h2>
      </header>

      <div className="blog__container container grid">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog__item">
            <img src={post.img} alt={post.title} className="blog__img" />
            <h3 className="blog__title">{post.title}</h3>
            <h4 className="blog__subtitle">{post.subtitle}</h4>
            <p className="blog__description">{post.description}</p>
          </div>
        ))}
      </div>

      <div className="pagination">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`pagination__button ${currentPage === index + 1 ? 'active' : ''}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Blog;
