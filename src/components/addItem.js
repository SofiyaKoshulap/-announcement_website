import React, { Component } from "react";
import Popup from "reactjs-popup";
import { v4 as uuidv4 } from 'uuid';

export default class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
        }
    }

    handleTextChange = (e) => this.setState({ [e.target.name]: e.target.value });

    handleSubmit = (e) => {
        if (this.state.title && this.state.description) {
            const idItem = uuidv4();
            let data = this.props.data;
            data.push({
                id: idItem,
                title: this.state.title,
                description: this.state.description,
                time: new Date()
            })
            localStorage.setItem('data', JSON.stringify(data));
            this.setState({ title: '', description: '' });
            window.location.reload();
        }
    }

    render() {
        return (
            <Popup trigger={<button className="button"> Add new announcement </button>} modal>
                {close =>
                    <div className="modal">
                        <h2>Add new announcement</h2>
                        <div className="content">
                            <input onChange={this.handleTextChange} value={this.state.title} type="text" name="title" placeholder="Title" />
                            <textarea onChange={this.handleTextChange} value={this.state.body} name="description" placeholder="Description" rows='20' />
                        </div>
                        <div className="actions">
                            <button className="button" onClick={this.handleSubmit.bind(this)}>Save</button>
                            <button className="button" onClick={() => { close(); }}>Cancel</button>
                        </div>
                    </div>
                }
            </Popup>

        )
    }
}


