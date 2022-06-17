import React  from 'react'

const NewsItem=(props)=>{

  let {title,description,imageUrl,newUrl,publishedAt,author,source}=props;
  return (
    <div className='my-3'>
        <div className="card" >
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
   {!source?"News":source}
  </span>
      <img src={imageUrl}  className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}....</p>
        <p>By {author} on {new Date(publishedAt).toGMTString()}</p>
        <a href={newUrl} rel="  noreferrer" target="_blank" className="btn btn-sm btn-success ">Read More</a>
      </div>
    </div>    
    </div> 
    )
  }


export default NewsItem