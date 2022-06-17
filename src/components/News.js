import React,{ useEffect,useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";
const News=(props)=>{
  const [articles,setArticles]=useState([])
  const [loading,setLoading]=useState(true)
  const [page,setPage]=useState(1)
  const [totalResults, setTotalResults] = useState(0)

  // TODO
  
  
  const updateNews= async ()=> {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page}&pagesize=${props.pagesize}`;
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    
  } 
  useEffect(() => {
    updateNews();
    const title = props.category.toUpperCase();
    document.title = `${title}- HOME`;
   
  }, [])
  
  const FirstUper = (word) => {
    let lower = props.category.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  const fetchMoreData = async() => {
    setPage(page+1)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page+1}&pagesize=${props.pagesize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setLoading(false)
  };
  
    return (
      <>
        <h3 id="head">
          JatPat News-Top HeadLines of {FirstUper(props.category)}
        </h3>
        {loading==true && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !==totalResults }
          loader={<Spinner/>}
        >

        
        <div className="container">
        <div className="row">
          {articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : "Title is unavailable"}
                  description={
                    element.description
                      ? element.description.slice(0, 75)
                      : "description is unavailable....                                                 ."
                  }
                  imageUrl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmV3c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  }
                  newUrl={element.url}
                  author={element.author ? element.author : "Unkown"}
                  publishedAt={element.publishedAt}
                  source={element.source.id}
                />
              </div>
            );
          })}
        </div>
        </div>
          </InfiniteScroll>
        <div className="container d-flex justify-content-between">
         
        </div>
    </>
    );
  }
News.defaultProps = {
  country: "in",
  pagesize: 8,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
