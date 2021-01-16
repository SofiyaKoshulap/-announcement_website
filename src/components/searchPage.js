import React, { Component } from "react";
import { Link } from 'react-router-dom'



export default class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            announcements: [],
        };
        this.getSearchData = this.getSearchData.bind(this);

    }

    componentDidMount() {
        this.getSearchData();
    }

    getSearchData() {
        const data = JSON.parse(localStorage.getItem("data"));
        let title = this.props.match.params.input;
        let searchItem = []
        data.map(item => {
            let include = item.title.split(' ').includes(title)
            if (include) {
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
        let announcementList = ' '
        return (
            <div>
                <div className='d-flex flex-row justify-content-between w-75 my-3 mx-auto'>
                    <h2 className='text-info'>Your search results for: "{this.props.match.params.input}"</h2>
                    <Link to={"/"}><button class="btn btn-info">Main Page</button></Link>
                </div>
                <div>
                    {
                        announcementList = announcements.map(announcement => {
                            return (
                                <div class="card d-flex flex-row justify-content-between w-75 my-2 mx-auto shadow-lg">
                                    <Link to={'/announcement/' + announcement.id}><div class="card-body" key={announcement.id}>
                                        <h2 class="card-title text-decoration-none">{announcement.title}</h2>
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
            </div>

        )
    }
}

