import React from 'react';
// import { render } from '@testing-library/react';
import './App.css';
import Task from './Task';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      taskArr: [],
      taskInput: '',
      sorted: 'all',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeTask = this.closeTask.bind(this);
    this.completed = this.completed.bind(this);
    this.clearAll = this.clearAll.bind(this);
  }

  componentDidMount() {
    let taskArr = window.localStorage.getItem('taskArr')
    if (taskArr) {
      this.setState({ taskArr: JSON.parse(taskArr) })
    } else {
      window.localStorage.setItem('taskArr', [])
    }
  }

  componentDidUpdate() {
    window.localStorage.setItem('taskArr', JSON.stringify(this.state.taskArr))
  }

  handleChange(e) {
    this.setState({ taskInput: e.target.value })
    // console.log(this.state.taskInput)
  }
  handleSubmit(e) {
    if (this.state.taskInput !== '') {
      let newTask = {
        id: Date.now(),
        taskText: this.state.taskInput,
        completed: false
      }
      // console.log(this.state.taskInput)
      this.setState({
        taskArr: [...this.state.taskArr, newTask],
        taskInput: '',
      })
    }
    e.preventDefault();
  }

  completed(id) {
    this.setState({
      taskArr: this.state.taskArr.map(newTask => {
        if (newTask.id === id) {
          newTask.completed = !newTask.completed
        }
        return newTask
      })
    })
  }

  closeTask(id) {
    // function filterHelper(task) {
    //   if (task.id !== id) {
    //     return task
    //   }
    // }
    const filteredTasks = this.state.taskArr.filter(task => task.id !== id);

    // console.log(filteredTasks);
    // console.log(this.state.taskArr)
    this.setState({ taskArr: filteredTasks });
    // console.log(this.state.taskArr)
  }

  clearAll() {
    const allCompleted = this.state.taskArr.filter(task => !task.completed)
    this.setState({ taskArr: allCompleted })
  }

  itemsLeft() {
    const allActive = this.state.taskArr.filter(task => !task.completed)
    return allActive.length;
  }

  render() {
    // let filteredArr = this.state.taskArr.filter(el => el.completed === false)
    // let filteredArr = this.state.taskArr;
    let filteredArr = this.state.taskArr.filter(item => {
      if (this.state.sorted === 'all') {
        return item;
      } else if (this.state.sorted === 'active' && !item.completed) {
        return item;
      } else if (this.state.sorted === 'completed' && item.completed) {
        return item;
      }
    })

    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col border m-1 text-center bg-light">
              <header className="App-header">
                To Do List
              </header>      
              <div className="input-group mb-3">
                <input
                  type="text"
                  value={this.state.taskInput}
                  className="form-control"
                  placeholder="What needs to be done?"
                  onChange={this.handleChange}
                />
                <button
                  className="btn btn-outline-secondary"
                  // value={this.state.taskInput}
                  type="button" id="subBtn"
                  onClick={this.handleSubmit}>
                  Submit
                </button>
              </div>         
            <div className="row">
              <ul className="tasks list-unstyled">
                {/*this.state.taskArr*/filteredArr.map((item, index) => <Task
                  newTask={item}
                  key={index}
                  closeTask={this.closeTask}
                  completed={this.completed}
                />)}

              </ul>
            </div>
            <div className="row">
              <div className="col-2">
                <h6>{this.itemsLeft()} items left</h6>
              </div>
              <div className="col-2 offset-1">
                <button type="button" className="btn btn-sm" onClick={() => this.setState({ sorted: 'all' })}><h6>All</h6></button>
              </div>
              <div className="col-2">
                <button type="button" className="btn btn-sm" onClick={() => this.setState({ sorted: 'active' })}><h6>Active</h6></button>
              </div>
              <div className="col-2">
                <button type="button" className="btn btn-sm" onClick={() => this.setState({ sorted: 'completed' })}><h6>Completed</h6></button>
              </div>
              <div className="col-2 offset-1">
                <button type="button" className="btn btn-sm" onClick={this.clearAll}><h6>Clear Completed</h6></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
