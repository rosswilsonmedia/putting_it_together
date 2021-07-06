import React, {Component} from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }
    birthday = () => {
        this.setState({age: this.state.age+1});
    }
    render(){
        return(
            <div className="PersonCard">
                <h1>{this.props.last_name}, {this.props.first_name}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.hair_color}</p>
                <button onClick={ () => this.birthday()}>Birthday Button</button>
            </div>
        )
    }
}

export default PersonCard;