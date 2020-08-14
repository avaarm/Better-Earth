import React, { useEffect, useState } from "react";
import { Row, Col } from "react-materialize";
import NewsCard from "../NewsCard";
import "./style.css";
import axios from "axios";

function News(props) {
  const [news, setNews] = useState([]);
  // const [seeAll, toggleSeeAll] = useState(false);
  const [newsIndex, setNewsIndex] = useState(0);

  useEffect(() => {
    loadNews(props.search);
  }, [props.search]);

  function loadNews(query) {
    axios
      .get("/api/getnews/" + query)
      .then((response) => {
        setNews(response.data);
      })
      .catch((err) => console.log("error is caught" + err));
  }

  // function handleToggleSeeAll() {
  //   toggleSeeAll(!seeAll);
  // }

  function moreNews() {
    if (newsIndex < 16) {
      setNewsIndex(newsIndex + 4);
    } else {
      setNewsIndex(0);
    }

    console.log(newsIndex);
  }

  return (
    <Row>
      <Col>
        <Row>
          <Col s={12}>
            {news.slice(newsIndex, newsIndex + 4).map((item, index) => (
              <NewsCard
                title={item.title}
                source={item.source.name}
                author={item.author}
                description={item.description}
                url={item.url}
                urlToImage={item.urlToImage}
                publishedAt={item.publishedAt}
                key={index}
              />
            ))}
          </Col>
        </Row>
        <Row>
          <Col s={12} className="buttonCol">
            <button
              className="waves-effect waves-light btn newsButton"
              onClick={moreNews}
            >
              More
            </button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default News;
