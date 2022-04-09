import React from 'react'

import { articles } from '../data'

import './styles/Articles.css'

const Articles = () => {
  return (
  <section className='to-center'>
      <div className="flex">
        <h3>My thoughts about code</h3>
      </div>
      {articles.map((article) => {
        return (
          <articles>
            <div className="medium__card__image">
              <img src={article.img} alt="article" />
            </div>
            <div className="medium__card__text-box">
              <a
                href={article.link}>
                <p>{article.date}</p>
                <h6>{article.title}</h6>
              </a>
              <p> {article.preview}</p>
              <a className="medium__article--link brick-color" target="_blank" rel="noopener noreferrer"
                href={article.link}>
                Read the full article >> </a>
            </div>
          </articles>
        )
      })}
    </section>
  )
}

export default Articles