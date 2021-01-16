import React, { Component } from "react";




export default class SimilarAnnousement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            similar: []
        };

    }
    componentDidMount() {
        const data = JSON.parse(localStorage.getItem("data"));
        const index = this.props.id;
        let title = data[index]
        // let description = data[id].description.split(' ');
        let a = []
        //  title.map(world=> {
        //     data.map(item=>{
        //         if(item.title.includes(world)){
        //           a.push(item)
        //         }     
        //     })
        // }
        // )
        // console.log(title)
        console.log(data)
        console.log(index)
        console.log(a)
        console.log(this.props.id)
    }

    render() {
        console.log(this.props.id)
        return (
            <div>
                <div>
                    {/* <div key={this.state.id}>
                        <h4>{this.state.title}</h4>
                        <p>{this.state.description}</p>
                        <p>{this.state.time}</p>
                    </div> */}
                </div>
                <div>

                </div>
            </div>

        )
    }
}



