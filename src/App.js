import React from 'react';
import { render } from '@testing-library/react';
import './App.css';
import Task from './Task';

class App extends React.Component {

  constructor() {
    super();
    this.test = 'test';
    this.state = {
      taskArr: [],
      taskInput: 'Task input goes here',
      completed: false
    }

    this.submitBtn = this.submitBtn.bind(this)
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.state.taskInput = e.target.value;
    console.log(this.state.taskInput);
  }

  handleSubmit(e) {
    this.setState({taskArr: [this.state.taskInput]})
    this.setState({taskInput: ''})
    e.preventDefault();
  }

  itemsLeft() {
    return this.state.taskArr.length;
  }

  submitBtn(e) {
    
  }



  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col border m-1 text-center bg-light">
            <div className="row">
              <header className="App-header">
                To Do List
              </header>
            </div>
            <div className="row">
              <div className="input-group mb-3">
              <form onSubmit={this.handleSubmit}>
                <input 
                type="text" 
                className="form-control" 
                placeholder="What needs to be done?" 
                onChange={this.handleChange}  
                />
                <input className="btn btn-outline-secondary" type="submit" value="Submit" />
                {/* <button className="btn btn-outline-secondary" type="button" id="subBtn" onClick={this.submitBtn}>Submit</button> */}
                </form>
              </div>
            </div>
            <div className="row">
              <ul className="tasks list-unstyled">
                  <Task taskInput={this.state.taskArr[0]} />
              </ul>
            </div>
            <div className="row">
              <div className="col-2">
                <h6>{this.itemsLeft()} items left</h6>
              </div>
              <div className="col-2 offset-1">
                <button type="button" className="btn btn-sm"><h6>All</h6></button>
              </div>
              <div className="col-2">
                <button type="button" className="btn btn-sm"><h6>Active</h6></button>
              </div>
              <div className="col-2">
                <button type="button" className="btn btn-sm"><h6>Completed</h6></button>
              </div>
              <div className="col-2 offset-1">
                <button type="button" className="btn btn-sm"><h6>Clear Completed</h6></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
