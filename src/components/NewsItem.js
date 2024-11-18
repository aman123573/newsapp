import React from 'react'

const NewsItem =(props)=> {
        let { title, description, imageUrl, newsUrl, author, date, source } = props;


        const  bookmarkHandler = () => {
            
        }


        return (
            <div>
                <div className="card mt-5" style={{ width: "18rem" }}>
                    <img src={!imageUrl ? "https://images.moneycontrol.com/static-mcnews/2020/06/accumulate2-770x433.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title} <span className="badge text-bg-success">{source}</span></h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
                        <button className="btn btn-sm btn-dark m-2" onClick={bookmarkHandler}>Bookmark</button>
                    </div>
                </div>
            </div>
        )
}

export default NewsItem;
