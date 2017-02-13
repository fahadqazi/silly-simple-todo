import React, { Component } from 'react';

export default class CreateTodo extends Component{
    handleCreate(e){
        e.preventDefault()

        this.props.createTask(this.refs.createInput.value);
        this.refs.createInput.value = '';
    }

    render(){
        return(
            <form onSubmit={this.handleCreate.bind(this)}>
                <input type="text" placeholder="what do i need to do" ref="createInput" />
                <button>Create</button>
            </form>
        );
    }
}