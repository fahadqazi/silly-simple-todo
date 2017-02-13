import React, { Component } from 'react';
import CreateTodo from './create-todo';
import TodosList from './todos-list';
const todos = [
    {
        task: 'make react tutorial',
        isCompleted: false
    },
    {
        task: 'dedicated deliberate practice',
        isCompleted: true
    }
];

export default class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            todos: todos
        }
    }
    createTask(task){
        this.state.todos.push({
            task,
            isCompleted: false
        });
        this.setState({
            todos: this.state.todos
        })
    }
    toggleTask(task){
        const taskState = !task.isCompleted;
        this.setState ({
            todos: this.state.todos.map((todo) => {
                if(todo.task === task.task){
                    return Object.assign({}, todo, {
                        isCompleted: taskState
                    });
                }else{
                    return todo;
                }
            })
        })
    }
    saveTask(oldTask, newTask){
        this.setState({
            todos: this.state.todos.map((todo) => {
                if(todo.task === oldTask){
                    return Object.assign({}, todo, {
                        task: newTask.task,
                        isCompleted: newTask.isCompleted
                    });
                }else{
                    return todo
                }
            })
        })
    }
    render(){
        return(
            <div>
                <h1>React ToDos</h1>
                <CreateTodo createTask={this.createTask.bind(this)}/>
                <TodosList 
                todos={this.state.todos} 
                toggleTask={this.toggleTask.bind(this)}
                saveTask={this.saveTask.bind(this)}
                />
            </div>
        );
    }
}