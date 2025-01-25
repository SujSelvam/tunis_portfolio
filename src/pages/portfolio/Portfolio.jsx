import React from 'react'
import { portfolio } from '../../data';
import PortfolioItem from '../../components/PortfolioItem';
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section className='portfolio section'>
      <header className='section__header'>
        <h1 className="bg-text">WORKS</h1>
      <h2 className="section__title">My <span>Portfolio</span></h2>
      </header>
      <div className="portfolio__container container grid">
        {portfolio.map((item) => {
          return <PortfolioItem key={item.id} {...item} />;
        })}
      </div>
    </section>
  )
}

export default Portfolio
