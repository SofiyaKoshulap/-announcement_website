import React, { Component } from "react";
import Popup from "reactjs-popup";

export default class EditItem extends Component {
    constructor(props) {
        super(props);
        const data = JSON.parse(localStorage.getItem('data'));
        this.state = {
            data: data,
            title: "",
            description: '',
        }
    }

    handleTextChange = (e) => this.setState({ [e.target.name]: e.target.value });

    handleSubmit = (e) => {
        if (this.state.title && this.state.description) {
            const data = JSON.parse(localStorage.getItem("data"));
            data.forEach(item => {
                if (item.id === this.props.id) {
                    item.title = this.state.title;
                    item.description = this.state.description;
                    return item;
                }
            })
            localStorage.setItem('data', JSON.stringify(data));
            window.location.reload();
        }
    }

    render() {
        return (
            <Popup trigger={<button className="button"> Edit </button>} modal>
                {close =>
                    <div className="modal">
                        <h2>Edit</h2>
                        <div className="content">
                            <input onChange={this.handleTextChange} value={'data[index].title'} type="text" name="title" placeholder="Title" />
                            <textarea onChange={this.handleTextChange} value={this.state.description} name="description" placeholder="Description" rows='20' />
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


