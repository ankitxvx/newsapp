import React, { Component } from 'react'


export class Newsitem extends Component {
 
  render() {
    let {title,description,imageUrl,newsUrl} = this.props;
    return (
<div>
    <div className="card">
     <img src={imageUrl === null?"https://static.vecteezy.com/system/resources/thumbnails/004/216/831/original/3d-world-news-background-loop-free-video.jpg":imageUrl} className="card-img-top" alt="..."/>
     <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a rel = "noreferrer" href={newsUrl}className="btn btn-sm btn-primary"  target="_blank">Read More</a>
     </div>
    </div>
</div>
)}}

export default Newsitem
