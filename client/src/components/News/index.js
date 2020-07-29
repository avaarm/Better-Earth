import React, { useEffect, useState } from "react";
import { Row, Col } from "react-materialize";
import NewsCard from "../NewsCard";
import API from "../../utils/API";

function News() {
  const [news, setNews] = useState([]);
  const [newsOne, setNewsOne] = useState([]);

  useEffect(() => {
    loadNews();
  }, []);

  let res=[];
  let title="";
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
        return title=response.data.articles[0].title
        
      }
      )
      .then(()=> console.log(news))
        
      
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <Row>

        {/* {news.map((item, index) => (
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
    */}

        <Col m={6} s={12} l={3}>
          <NewsCard
            title={newsOne.title}
            source="source"
            author={newsOne.author}
            description={newsOne.description}
            url={newsOne.url}
            urlToImage={newsOne.urlToImage}
            publishedAt={newsOne.publishedAt}
            id="1"
          />
        </Col>
        <Col m={6} s={12} l={3}>
          <NewsCard
            title="MANUAL LOADED INFO: Humans left behind a record amount of e-waste in 2019"
            source="The Verge"
            author="Justine Calma"
            description="E-waste increased 21 percent over five years, according to a new global report. In 2019, people generated 53 million metric tons of electronic waste that poses a threat to the environment and human health."
            url="https://www.theverge.com/21309776/record-amount-ewaste-2019-global-report-environment-health"
            urlToImage="https://cdn.vox-cdn.com/thumbor/FyC7B8uFVNgBFa9YwmCkdLNKnvI=/0x336:5337x3130/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/20062074/1096277740.jpg.jpg"
            publishedAt="2020-07-02T14:00:00Z"
            id="1"
          />
        </Col>
      </Row>
    </div>
  );
}

export default News;
