import React, { Component } from 'react'

export default class NewsItems extends Component {

    render() {
        let { myTitle, description, imageUrl, url, author, date, name } = this.props;
        return (
            <div>
                <div className="card">
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "end",
                            position:"absolute",
                            right:"0"
                        }}
                    >
                        <span className="badge rounded-pill bg-danger" style={{ left: "87%", zIndex: 1 }}> {name} </span>
                    </div>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="News">{myTitle}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">by {author} at {date}</small></p>

                        <a href={url} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
