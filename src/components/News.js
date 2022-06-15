import React, {   Component } from "react";
import NewItem from "./NewItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";
export class News extends Component {
  static defaultProps = {
    country: "in",
    pagesize: 8,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    const title = this.props.category.toUpperCase();
    document.title = `${title}- HOME`;
  }
  async updateNews() {
    // this.props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    // this.props.setProgress(100);
  }
  async componentDidMount() {
    console.log("Reloading...");
    this.updateNews();
  }

  // HandlePrev = async () => {
  //   this.setState({
  //     page: this.state.page - 1,
  //   });
  //   this.updateNews();
  // };

  // HandleNext = async () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //     /* you can also use 'auto' behaviour
  //            in place of 'smooth' */
  //   });
  //   this.setState({
  //     page: this.state.page + 1,
  //   });
  //   this.updateNews();
  // };
  FirstUper = (word) => {
    let lower = this.props.category.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
   fetchMoreData = async() => {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles:this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
      page:this.state.page + 1,
    });
  };
  
  render() {
    return (
      <>
        <h3 id="head">
          JatPat News-Top HeadLines of {this.FirstUper(this.props.category)}
        </h3>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !==this.state.totalResults }
          loader={<Spinner/>}
        >

        
        {/* {this.state.loading && <Spinner />} */}
        <div className="container">
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewItem
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
          {/* <button
            onClick={this.HandlePrev}
            className="btn btn-dark"
            disabled={this.state.page === 1}
          >
            &larr; Previous
          </button> */}

          {/* <button onClick={this.pageSecond} className="btn btn-warning" >2</button> */}

          {/* <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pagesize)
            }
            onClick={this.HandleNext}
            className="btn btn-dark "
          > */}
            {/* Next &rarr; */}
          {/* </button> */}
        </div>
    </>
    );
  }
}

export default News;
