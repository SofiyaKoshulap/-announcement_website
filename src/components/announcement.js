import React, { Component } from "react";
import AddItem from "./addItem";



export default class Announcement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            description: '',
            time: ''
        };

    }
    componentDidMount() {
        const data = JSON.parse(localStorage.getItem("data"));
        let id = this.props.match.params.announcement_id;
        console.log(data)
        data.map(item => {
            if (item.id === id) {
                return (this.setState(state => ({
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    time: item.time
                })))
            }
        })

    }
    render() {
        return (
            <div>
                <div>
                    {/* <AddItem data={announcements} /> */}
                </div>
                <div>
                    <div key={this.state.id}>
                        <h4>{this.state.title}</h4>
                        <p>{this.state.description}</p>
                        <p>{this.state.time}</p>
                    </div>
                </div>
            </div>

        )
    }
}



