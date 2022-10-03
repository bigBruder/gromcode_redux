import React, { Component } from 'react';

class CreateTaskInput extends Component {
    state = {
        value: '',
    }
    
    handleChange = event => {
        this.setState({
            value: event.target.value,
        });
    };

    handleTaskCeate = () =>{
        this.props.onCreate(this.state.value);
        this.setState({value: ''})
    }

    render(){
    return(
        <div className='create-task'>
            <input type="text" 
            value={this.state.value} 
            onChange={this.handleChange}
            className="create-task__input"/>
            <button className="btn create-task__btn" onClick={this.handleTaskCeate}>Create</button>
        </div>
    );
    }
}
export default CreateTaskInput;