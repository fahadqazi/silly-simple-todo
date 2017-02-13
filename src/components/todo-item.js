import React, { Component } from 'react';

export default class TodoItem extends Component{
    constructor(props){
        super(props)
        this.state = {
            isEditing: false
        }
    }

    renderActionSection(){
        if(this.state.isEditing){
            return(
                <td>
                    <button onClick={this.onSaveClick.bind(this)}>Save</button>
                    <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
                </td>
            );
        }
        return (
            <td>
            <button onClick={this.onEditClick.bind(this)}>Edit</button>
            <button>Delete</button>
            </td>
        );
    }
    onSaveClick(event){
        event.preventDefault();
        const oldTask = this.props.todo;
        const newTask = this.refs.editInput.value;
        this.props.saveTask(oldTask, newTask);
        this.setState({
            isEditing: false
        })
    }

    onEditClick(){
        this.setState({
            isEditing: true
        })
    }

    onCancelClick(){
        this.setState({
            isEditing: false
        })
    }

    renderTaskSection(){
        const task = this.props.todo;
        const isCompleted = this.props.todo.isCompleted;
        const taskStyle = {
            color: isCompleted ? 'green' : 'red',
            cursor: 'pointer'
        }
        if(this.state.isEditing){
            return(
                <td>
                <form onSubmit={this.onSaveClick.bind(this)}>
                    <input type="text" defaultValue={task.task} ref="editInput"/>
                </form>
                </td>
            );
        }
        return(
            <td style={taskStyle} onClick={this.props.toggleTask.bind(this, task)}>{task.task}</td>
        );
    }

    render(){
        return(
            <tr>
                {this.renderTaskSection()}
                {this.renderActionSection()}
            </tr>
        );
    }
}