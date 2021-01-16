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
            <Popup trigger={<button className='btn btn-info'>Add new announcement </button>} modal position='bottom center'>
                {close =>
                    <div class="modal-dialog modal-lg shadow-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title">Add new announcement</h4>
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


