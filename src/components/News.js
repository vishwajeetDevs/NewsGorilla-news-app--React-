import React, { Component } from 'react';
import NewsItems from './NewsItems';
import InfiniteScroll from 'react-infinite-scroll-component';
import LoadingBar from 'react-top-loading-bar'


export default class News extends Component {
    articles = []
    capitalizeFirstLetter(val) {
        return String(val).charAt(0).toUpperCase() + String(val).slice(1);
    }
    constructor(props) {
        super(props)
        this.state = {
            articles: this.articles,
            loading: false,
            totalResults: 0,
            page: 1,
            progress : 0
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - News Gorilla`;
    }

    setProgress = (progress) => {
        this.setState({progress});
    };



    async componentDidMount() {
        this.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`
        let fetchedUrl = await fetch(url);
        this.setProgress(40);
        let data = fetchedUrl;
        let newData = await data.json()
        this.setProgress(70);
        console.log(newData)
        this.setState({
            articles: newData.articles,
            totalResults: newData.totalResults
        })
        this.setProgress(100);
    }

    fetchMoreData = async () => {
        this.setState(
            (prevState) => ({ page: prevState.page + 1 }),
            async () => {
                const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
                const fetchedUrl = await fetch(url);
                const newData = await fetchedUrl.json();
                console.log(newData);
                this.setState((prevState) => ({
                    articles: prevState.articles.concat(newData.articles),
                    totalResults: newData.totalResults,
                }));
            }
        );
    };

    
    render() {
        return (
            <div>
                <LoadingBar
                    color='#f11946'
                    progress={this.state.progress}

                />
                <div className="container my-4">
                    <h2 className='text-center m-4' style={{paddingTop : '60px'}} >NewsGorilla - Top Headlines on {this.capitalizeFirstLetter(this.props.category)}</h2>
                    <div className=" container row my-2">

                        <InfiniteScroll
                            dataLength={this.state.articles.length}
                            next={this.fetchMoreData}
                            hasMore={this.state.articles.length !== this.state.totalResults}
                            loader={<h4>Loading ... </h4>}
                        >
                            <div className="container row">
                                {this.state.articles.map((elements, index) => {
                                    return <div className="col-md-4 my-2" key={index}>
                                        <NewsItems myTitle={elements.title} description={elements.description} imageUrl={elements.urlToImage} url={elements.url} author={elements.author} date={new Date(elements.publishedAt).toGMTString()} name={elements.source.name} />
                                    </div>
                                })}
                            </div>
                        </InfiniteScroll>

                        <div className="container d-flex justify-content-between mx-4 my-4">

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
