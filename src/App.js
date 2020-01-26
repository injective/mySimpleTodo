import React, { Component } from 'react';
import './App.css';
import TodoListItem from './TodoListItem';

class App extends Component {
    constructor() {
      super();

      this.state = {
          list: [],
          inputValue: ''
      }

      this.addHandler = this.addHandler.bind(this);
      this.changeInputHandler = this.changeInputHandler.bind(this);
    }

    addHandler() {
        let newObj = {
            text: this.state.inputValue
        };

        console.log(newObj);

        this.setState({
            list: [...this.state.list, newObj],
            inputValue: ''
        });

        console.log(this.state.list);
    };

    changeInputHandler = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    };


    render() {


        return (
          <div className='App'>
              <div className='formWrapper'>
                  <input className='inputValue' type='text' value={this.state.inputValue} onChange={this.changeInputHandler} />
                  <button className='btnValue' onClick={this.addHandler}>add</button>
              </div>

              <div>{this.state.inputValue}</div>

              <ul>
                  {this.state.list.map((item, id) => {
                      return (<TodoListItem key={id} val={item} />);
                  })}
              </ul>
          </div>
        );
    }
}

export default App;
