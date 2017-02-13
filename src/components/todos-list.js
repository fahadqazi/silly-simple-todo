import React, { Component } from 'react';
import TodoListHeader from './todo-list-header';
import TodoItem from './todo-item';

export default class TodosList extends Component{
    // renderItems(){
    //     return this.props.todos.map((todo) => {

    //     })
    // }

    render(){
        const todoItems = this.props.todos.map((todo) => {
            return <TodoItem 
                    key={todo.task} 
                    todo={todo} 
                    toggleTask={this.props.toggleTask.bind(this)}
                    saveTask={this.props.saveTask.bind(this)}
                    />
        })
        return(
            <table>
                <TodoListHeader />
                <tbody>
                    {todoItems}
                </tbody>
            </table>
        );
    }
}