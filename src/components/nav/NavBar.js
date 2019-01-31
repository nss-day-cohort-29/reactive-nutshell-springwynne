import React, { Component } from "react"
import { Link } from "react-router-dom"
import FriendsSearch from './FriendSearch'
import "bootstrap/dist/css/bootstrap.min.css"


class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light light-blue flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <Link className="nav-link" to="/news">News</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/events">Events</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/tasks">Tasks</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/messages">Messages</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/friends">Friends</Link>
                    </li>
                    <Link to="/friends/searchresults"><FriendsSearch jsonQuery={this.props.jsonQuery} results={this.props.results} handleInputChange={this.props.handleInputChange}/></Link>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Logout</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar
