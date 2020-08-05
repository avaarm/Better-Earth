import React, { useEffect, useState } from "react";
import { Row, Col } from "react-materialize";
import NewsCard from "../NewsCard";
import API from "../../utils/API";
import "./style.css";

function News() {
  const [news, setNews] = useState([]);

  // toggling between 5 vs all the results
  const [seeAll, toggleSeeAll] = useState(false);

  useEffect(() => {
    loadNews();
    // API.coolClimate().then(response => {
    //   // response.json(response.data);
    //   console.log(response.data)
    // }).catch(err => {
    //   console.log(err);
    // })
  }, []);

  function loadNews() {
    API.getNews()
      .then((response) => {
        setNews(response.data.articles);
      })
      .catch((err) => console.log("error is caught" + err));
  }

  function handleToggleSeeAll() {
    toggleSeeAll(!seeAll);
  }

  return (
    <Row>
      <Col>
      <div className="card-panel">
      <div className="container">
        <h3 className="backColor">Environmental News</h3>
      </div>
      <Row>

        <Col  >
          {/* can make a react router link here  */}
          {
            !seeAll ? (
              <button
                className="waves-effect waves-light btn newsButton"
                onClick={handleToggleSeeAll}
              >
                See More
              </button>
            ) : (
              <button
                className="waves-effect waves-light btn newsButton"
                onClick={handleToggleSeeAll}
              >
                See Less
              </button>
            )
          }
        </Col>
      </Row>

      <Row>
        <Col
          m={6}
          s={12}>

          {!seeAll
            ? 
              news.slice(0, 2).map((item, index) => (
                <NewsCard
                  title={item.title}
                  source={item.source.name}
                  author={item.author}
                  description={item.description}
                  url={item.url}
                  urlToImage={item.urlToImage}
                  publishedAt={item.publishedAt}
                  id={index}
                />
              ))
            : 
            news.slice(4, 6).map((item, index) => (
                <NewsCard
                  title={item.title}
                  source={item.source.name}
                  author={item.author}
                  description={item.description}
                  url={item.url}
                  urlToImage={item.urlToImage}
                  publishedAt={item.publishedAt}
                  id={index}
                />
            ))}
        </Col>
      </Row>
      <Row>
        <Col
          m={6}
          s={12}
          l={6}>

          {!seeAll
            ? 
              news.slice(2, 4).map((item, index) => (
                <NewsCard
                  title={item.title}
                  source={item.source.name}
                  author={item.author}
                  description={item.description}
                  url={item.url}
                  urlToImage={item.urlToImage}
                  publishedAt={item.publishedAt}
                  id={index}
                />
              ))
            : 
            news.slice(6, 8).map((item, index) => (
                <NewsCard
                  title={item.title}
                  source={item.source.name}
                  author={item.author}
                  description={item.description}
                  url={item.url}
                  urlToImage={item.urlToImage}
                  publishedAt={item.publishedAt}
                  id={index}
                />
            ))}
        </Col>
      </Row>

    </div>
      </Col>
    </Row>
    
  );
}

export default News;
