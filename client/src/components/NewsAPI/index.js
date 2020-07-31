import React, { useEffect, useState } from "react";
import { Row, Col } from "react-materialize";
import NewsCard from "../NewsCard";
import API from "../../utils/API";
import { STATES } from "mongoose";

function News() {
  const [news, setNews] = useState([]);
  const [newsOne, setNewsOne] = useState({});

  // toggling between 2 vs all the results 
  const [seeAll, toggleSeeAll] = useState(false)

  useEffect(() => {
    loadNews();
  }, []);

  let res=[];
//   let title="";
  function loadNews() {
    API.getNews()
      .then((response) => {
        console.log(response)
        console.log(response.data)
        console.log(response.data.articles)
        console.log(response.data.articles[0]);
        console.log(response.data.articles[0].title);
        setNews(response.data.articles)
        setNewsOne(response.data.articles[0])
        // return title=response.data.articles[0].title
        
      })
      .catch((err) => console.log("error is caught"+err));
  }


  function handleToggleSeeAll(){
    toggleSeeAll(!seeAll)
  }

  return (
    <div>
      <Row>

        { !seeAll ?
        news.slice(0,3).map((item, index) => (
            <Col m={6} s={12} l={3}>
                <NewsCard
                title={item.title}
                source={item.source.name}
                author={item.author}
                description={item.description}
                url={item.url}
                urlToImage={item.urlToImage}
                publishedAt={item.publishedAt}
                id={item.index}
                />
            </Col>
          
        )):
        news.map((item, index) => (
            <Col m={6} s={12} l={3}>
                <NewsCard
                title={item.title}
                source={item.source.name}
                author={item.author}
                description={item.description}
                url={item.url}
                urlToImage={item.urlToImage}
                publishedAt={item.publishedAt}
                id={item.index}
                />
            </Col>
        ))}
      </Row>
{/* can make a react router link here  */}
      {!seeAll ? <button onClick={handleToggleSeeAll}> See More</button> : <button onClick={handleToggleSeeAll}>See Less</button>}
    </div>
  );
}

export default News;
