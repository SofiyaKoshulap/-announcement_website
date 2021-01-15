import React, { Component } from "react";
import { Link } from 'react-router-dom'



export default class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            announcements: [],
        };

    }
    componentDidMount() {
        const data = JSON.parse(localStorage.getItem("data"));
        let title = this.props.match.params.input;
        let searchItem = []
        data.map(item => {
            if (item.title === title) {
                searchItem.push(item)
            }
        })
        this.setState(state => ({
            announcements: searchItem
        }))
    }

    handleDelete(id) {
        let data = this.state.announcements;
        data.splice(id, 1);
        this.setState(state => ({
            announcements: data
        }))
        localStorage.setItem("data", JSON.stringify(data));

    }
    render() {
        let announcements = this.state.announcements
        let announcementList = 'ms;lcm;'
        return (
            <div>
                <h2>Your search results for: "{this.props.match.params.input}"</h2>
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

