import React from 'react';
import { Link } from 'react-router-dom';


const renderOtherNews = ({otherNews}) => {
  if(otherNews) {
    return (otherNews.map(item => {
        return (
          <Link to={`/news/${item.id}`} key={item.id} className="item">
            <div 
              className="left"
              style={{background: `url(/images/articles/${item.img})`}}
            >
              hhhhh
            </div>
          
          </Link>
        )
      })
    )
  }
}

const OtherNews = (props) => {
  console.log('other newsss', props)
  return (
    <div className="other-news">
      <h2>OTHER NEWS</h2>
      <div className="other-news-items">
        {renderOtherNews(props)}
      </div>
    </div>
  )
}

export default OtherNews;