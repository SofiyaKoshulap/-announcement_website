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
            <Popup trigger={<button className='btn btn-info' > Edit announcement </button>} modal position='bottom center'>
                {close =>
                    <div class="modal-dialog modal-lg shadow-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title">Edit</h4>
                            </div>
                            <div class="modal-body">
                                <input className="form-control" onChange={this.handleTextChange} value={this.state.title} type="text" name="title" placeholder="Title" /><br></br>
                                <textarea className="form-control" onChange={this.handleTextChange} value={this.props.description} name="description" placeholder="Description" rows='15' />
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-info" data-dismiss="modal" onClick={this.handleSubmit.bind(this)}>Save</button>
                                <button type="button" class="btn btn-info" data-dismiss="modal" onClick={() => { close(); }}>Close</button>
                            </div>
                        </div>
                    </div>
                }
            </Popup>

        )
    }
}


