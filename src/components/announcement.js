import React, { Component } from "react";
import EditItem from "./editItem";



export default class Announcement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            description: '',
            time: '',
            index: ''
        };

    }
    componentDidMount() {
        const data = JSON.parse(localStorage.getItem("data"));
        let id = this.props.match.params.announcement_id;
        data.map(item => {
            if (item.id === id) {
                return (this.setState(state => ({
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    time: item.time,
                    index: data.indexOf(item)
                })))
            }
        })

    }

    render() {
        return (
            <div>
                <div>
                    <EditItem title={this.state.title} description={this.state.description} id={this.state.id} index={this.state.index} />
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



