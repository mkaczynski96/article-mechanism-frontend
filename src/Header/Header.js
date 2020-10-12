import React from 'react'

class Header extends React.Component {
    render() {
        const logoNameOnePart = "Article"
        const logoNameTwoPart = "mechanism"
        const login = "Log in"
        return (
            <header id="header">
                <div id="logo"><h1>{logoNameOnePart} <span id="logo--color">{logoNameTwoPart}</span></h1></div>
                <div id="auth"><a href="/login" id="auth--link">{login}</a></div>
            </header>
        )
    }
}

export default Header