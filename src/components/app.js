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
        console.log(oldTask);
        console.log(newTask);
        this.setState({
            todos: this.state.todos.map((todo) => {
                if(todo.task === oldTask.task){
                    return Object.assign({}, todo, {
                        task: newTask,
                        isCompleted: false
                    });
                }else{
                    return todo
                }
            })
        })
    }
    deleteTask(taskToDelete){
        this.setState({
            todos: this.state.todos.filter((todo) => {
                return todo.task !== taskToDelete.task
            })
        })
    }
    render(){
        return(
            <div>
                <h1>React ToDos</h1>
                <CreateTodo 
                    createTask={this.createTask.bind(this)}
                    todos={this.state.todos}
                />
                <TodosList 
                    todos={this.state.todos} 
                    toggleTask={this.toggleTask.bind(this)}
                    saveTask={this.saveTask.bind(this)}
                    deleteTask={this.deleteTask.bind(this)}
                />
            </div>
        );
    }
}