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
        let announcementList = ' '
        return (
            <div>
                <div className='d-flex flex-row justify-content-between w-75 my-3 mx-auto'>
                    <div className="d-flex flex-row">
                        <input className="form-control" onChange={this.handleTextChange} value={this.state.searchTitle} type="text" name="searchTitle" placeholder="Title" />
                        <Link to={'/search/' + this.state.searchTitle}><button className='btn btn-info '>Search</button></Link>
                    </div>
                    <AddItem data={announcements} />
                </div>
                <div>
                    <h1 className='text-info w-75 mx-auto'>List of announcement</h1>
                    {
                        announcementList = announcements.map(announcement => {
                            return (
                                <div class="card d-flex flex-row justify-content-between w-75 my-2 mx-auto shadow-lg">
                                    <Link to={'/announcement/' + announcement.id}><div class="card-body" key={announcement.id}>
                                        <h2 class="card-title ">{announcement.title}</h2>
                                    </div>
                                    </Link>
                                    <div class=" float-right">
                                        <button class="btn btn-info float-right" onClick={this.handleDelete.bind(this, announcements.indexOf(announcement))}><i class="fas fa-trash"></i></button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div >

        )
    }
}

