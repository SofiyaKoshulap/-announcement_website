import React, { Component } from "react";
import { Link } from 'react-router-dom'
import AddItem from "./addItem";



export default class AnnoucementList extends Component {
    constructor(props) {
        super(props);
        let data = JSON.parse(localStorage.getItem("data"));
        this.state = {
            announcements: data || [],
        };

    }
    showList = (list) => {
        let announcementList = 'No announcement'
        if (list) {
            announcementList = list.map(announcement => {
                return (
                    <div key={announcement.id}>
                        <div>
                            <h4>{announcement.title}</h4>
                            <p>{announcement.description}</p>
                            <p>{announcement.time}</p>
                        </div>

                    </div>)
            })

        }
        return announcementList;
    }
    render() {
        const announcements = this.state.announcements
        let announcementList = 'No announcement'
        console.log(localStorage)
        console.log(this.state.announcements)
        return (
            <div>
                <div>
                    <AddItem data={announcements} />
                </div>
                <div>
                    {

                        announcementList = announcements.map(announcement => {
                            return (
                                <Link><div key={announcement.id}>
                                    <h4>{announcement.title}</h4>
                                    <p>{announcement.description}</p>
                                    <p>{announcement.time}</p>
                                </div>
                                </Link>

                            )
                        })

                    }

                </div>
            </div>

        )
    }
}

