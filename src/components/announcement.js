import React, { Component } from "react";
import EditItem from "./editItem";
import { Link } from 'react-router-dom'


export default class Announcement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            description: '',
            time: '',
            index: '',
            announcement: null,
        };
        this.getData = this.getData.bind(this);
        this.findSimilarAnnouncements = this.findSimilarAnnouncements.bind(this);

    }
    componentDidMount() {
        this.getData()
    }
    getData() {
        const data = JSON.parse(localStorage.getItem("data"));
        let id = this.props.match.params.announcement_id;
        data.map(item => {
            if (item.id === id) {
                const indexItem = data.indexOf(item)
                this.setState(state => ({
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    time: item.time,
                    index: indexItem,
                    announcement: item
                }))
            }
        })
    }
    findSimilarAnnouncements(announcements, targetAnnouncement) {
        const targetTitleWords = targetAnnouncement.title.split(' ');
        const targetDescriptionWords = targetAnnouncement.description.split(' ');

        return announcements.filter(({ title, description }) => {
            const titleWords = title.split(' ');
            const descriptionWords = description.split(' ');

            const isTitleSimilar = targetTitleWords
                .some(word => titleWords.includes(word));
            const isDescriptionSimilar = targetDescriptionWords
                .some(word => descriptionWords.includes(word));

            return isTitleSimilar && isDescriptionSimilar;
        });
    };


    render() {
        const data = JSON.parse(localStorage.getItem("data"));
        const target = this.state.announcement
        if (target) { var similartList = this.findSimilarAnnouncements(data, target) }
        if (similartList) {
            var similarShow = similartList.map(announcement => {
                if (announcement.id !== this.state.id) {
                    return (
                        <div className="card d-flex flex-row justify-content-between my-2 mx-auto shadow-lg" key={announcement.id}>
                            <Link to={'/announcement/' + announcement.id}><div className="card-body" >
                                <h2 className="card-title ">{announcement.title}</h2>
                            </div>
                            </Link>
                        </div>
                    )
                }
            })
        }
        return (
            <div>
                <div class="card w-75 my-5 mx-auto shadow-lg" >
                    <div class="card-body" key={this.state.id}>
                        <h4 class="card-title">{this.state.title}</h4>
                        <p class="card-text text-black-50">{this.state.time
                            .replace("-", "/")
                            .split("T")[0]
                            .replace("-", "/")}</p>
                        <p class="card-text">{this.state.description}</p>
                    </div>
                    <div>
                        <Link to={'/'}><button class="btn btn-info mx-4 my-3">Main Page</button></Link>
                        <EditItem title={this.state.title} description={this.state.description} id={this.state.id} index={this.state.index} />
                    </div>
                </div>
                <div className='w-75 my-3 mx-auto'>
                    <h2 className='text-info'>Similar announcement</h2>
                    {similarShow}
                </div>
            </div>

        )
    }
}



