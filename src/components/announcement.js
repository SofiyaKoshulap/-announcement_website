import React, { Component } from "react";
import EditItem from "./editItem";
import { Link } from 'react-router-dom'
// import SimilarAnnousement from "./similarAnnounsement";


export default class Announcement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            description: '',
            time: '',
            index: '',
            similar: []
        };
        this.getData = this.getData.bind(this);

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
                }))
            }
        })
    }

    render() {
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
                <div>
                    {/* <SimilarAnnousement id={this.state.index} /> */}
                </div>
            </div>

        )
    }
}



