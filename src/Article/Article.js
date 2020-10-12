import React from 'react'

class Article extends React.Component {
    render() {
        const readMore = "Read more"
        let date = new Date(this.props.date * 1000)

        return (
            <article className="article">
                <h1><u>{this.props.name}</u></h1>
                <p>{date.toUTCString()}</p>
                <p>{this.props.content} <a href="localhost:3000">{readMore}</a></p>
            </article>
        )
    };
}

export default Article