import React from 'react';
import { render } from '@testing-library/react';
import './App.css';
import Task from './Task';

class App extends React.Component {

  constructor() {
    super();
    this.taskArr = [];
    this.state = {

    }
  }

  itemsLeft() {
    return this.taskArr.length;
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
                <input type="text" class="form-control" placeholder="What needs to be done?" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Submit</button>
              </div>
            </div>
            <div className="row">
              <ul className="tasks list-unstyled">
                <li>
                  <Task />
                </li>
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
