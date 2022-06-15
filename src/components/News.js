import React, { Component } from 'react'
import NewItem from './NewItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
export class News extends Component {
  
  static defaultProps={
    country:'in',
    pagesize:8,
    category:"general",
  }
  static propTypes={
    country:PropTypes.string,
    pagesize:PropTypes.number,
    category:PropTypes.string,
    
  }
  constructor(){
    super();
    this.state={
      articles: [],
      loading:false,
      page:1,
    }
  }
  async updateNews(){
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    this.setState({loading:true});
    let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({
      articles:parsedData.articles,
      totalResults:parsedData.totalResults,
      loading:false,
    });
  }
  async componentDidMount() { 
    console.log("Reloading...")
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.page}&pagesize=${this.props.pagesize}`;
    // this.setState({loading:true});
    // let data=await fetch(url);
    // let parsedData=await data.json();
    // this.setState({
    //   articles:parsedData.articles,
    //   totalResults:parsedData.totalResults,
    //   loading:false,
    // });
    this.updateNews();
   }
  
  HandlePrev=async()=>{
      //  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page-1}&pagesize=${this.props.pagesize}`;
      //  this.setState({loading:true});

      //  let data=await fetch(url);
      //  let parsedData=await data.json();
      //  this.setState({
      //   page:this.state.page-1,
      //   articles:parsedData.articles,
      //   loading:false,  
      // });
      this.setState({
        page:this.state.page - 1 ,
      })
      this.updateNews();

     }

      HandleNext=async ()=>{
        // window.scrollTo({
        //   top: 0, 
        //   behavior: 'smooth'
        //   /* you can also use 'auto' behaviour
        //      in place of 'smooth' */
        // });
      //  if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pagesize))){
      //    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
      //    this.setState({loading:true});
      //    let data=await fetch(url);
      //    let parsedData=await data.json();
      //     this.setState({
      //           page:this.state.page + 1,
      //           articles:parsedData.articles,
      //           loading:false,
      //         })
      //       }
      this.setState({
        page:this.state.page + 1 ,
      });
      this.updateNews();
    }
      // pageSecond=async ()=>{

      //   //  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=2&pagesize=20`;
      //   //  let data=await fetch(url);
      //   //  let parsedData=await data.json();
      //     this.setState({
      //           page:this.state.page===2,
      //           // articles:parsedData.articles
      //     })
      // }
    
  render() {
    return (
      <div className='container my-3'>
        <h3 id='head'>JatPat News-Top HeadLines</h3>
          {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element)=>{

            return <div className="col-md-4" key={element.url} >
                  <NewItem title={element.title?element.title:"Title is unavailable"} description={element.description?element.description.slice(0,75):"description is unavailable....                                                 ."} imageUrl={element.urlToImage?element.urlToImage:"https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmV3c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"} newUrl={element.url} author={element.author?element.author:"Unkown"} publishedAt={element.publishedAt} source={element.source.id}/>
              </div>
          })}
             
        </div>
        <div className="container d-flex justify-content-between">
          <button onClick={this.HandlePrev} className="btn btn-dark" disabled={this.state.page === 1}>&larr; Previous</button>
          
          {/* <button onClick={this.pageSecond} className="btn btn-warning" >2</button> */}
          
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pagesize)} onClick={this.HandleNext} className="btn btn-dark ">Next &rarr;</button>
        </div>
       
      </div>
    )
  }
}

export default News