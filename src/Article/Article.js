import React from 'react'
import ReadMoreReact from 'read-more-react'

class Article extends React.Component {
    render() {
        const readMore = "Read more"
        let date = new Date(this.props.date)
       
        return (
            <article className="article">
                <h1><u>{this.props.name}</u></h1>
                <p>{date.toString()}</p>
               {/* <p>{this.props.content} <a href="localhost:3000">{readMore}</a></p> */}
               <p><ReadMoreReact text={this.props.content} min={550} ideal={550} max={50000} readMoreText={<a href="#">{readMore}</a>} /></p>
            </article>
        )
    };
}

export default Article