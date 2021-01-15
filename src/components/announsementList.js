import React, { Component } from "react";
import { Link } from 'react-router-dom'
import AddItem from "./addItem";



export default class AnnoucementList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            announcements: JSON.parse(localStorage.getItem("data")) || [],
            searchTitle: ''
        };

    }
    handleDelete(id) {
        let data = this.state.announcements;
        data.splice(id, 1);
        this.setState(state => ({
            announcements: data
        }))
        localStorage.setItem("data", JSON.stringify(data));

    }
    handleTextChange = (e) => this.setState({ [e.target.name]: e.target.value });
    render() {
        const announcements = this.state.announcements
        let announcementList = 'ms;lcm;'
        return (
            <div>
                <div>
                    <input onChange={this.handleTextChange} value={this.state.searchTitle} type="text" name="searchTitle" placeholder="Title" />
                    <Link to={'/search/' + this.state.searchTitle}><button>Search</button></Link>
                </div>
                <div>
                    <AddItem data={announcements} />
                </div>
                <div>
                    {
                        announcementList = announcements.map(announcement => {
                            return (
                                <div>
                                    <Link to={'/announcement/' + announcement.id}><div key={announcement.id}>
                                        <h4>{announcement.title}</h4>
                                        <p>{announcement.description}</p>
                                        <p>{announcement.time}</p>
                                    </div>
                                    </Link>
                                    <button onClick={this.handleDelete.bind(this, announcements.indexOf(announcement))}>Delete</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        )
    }
}

