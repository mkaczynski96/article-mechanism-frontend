import React from 'react'
import Article from '../Article/Article'


class ArticleBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            posts: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:8001/articles/getAllArticles")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        posts: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, posts } = this.state;
        if (error) {
            var date = new Date(Date.now())
            return <div id="articleBoard">
                <Article name="ERROR: Something went wrong..." date={date} content={error.message} />
                </div>
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div id="articleBoard">
                    {posts.map(post => (
                        <Article key={post.id} name={post.title} date={post.date} content={post.content} />
                    ))}
                </div>
            )
        }
    }
}

export default ArticleBoard