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
    }

    onClickAddItem = () => {
        if(this.state.inputValue.length > 0) {
            const todoItem = {
                text: this.state.inputValue
            };

            this.setState((state) => ({
                list: [...state.list, todoItem],
                inputValue: ''
            }));
        }
    };

    onChangeInput = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    };

    render() {
        const { list, inputValue } = this.state;
        const todoListItem = list.map((item, id) => {
            return (
                <TodoListItem
                    key={id}
                    val={item} />
            );
        });

        return (
          <div className='App'>
              <div className='formWrapper'>
                  <input
                      className='inputValue'
                      type='text'
                      value={inputValue}
                      onChange={this.onChangeInput} />
                  <button className='btnValue' onClick={this.onClickAddItem}>add</button>
              </div>

              <ul className="todoList">
                  {todoListItem}
              </ul>
          </div>
        );
    }
}

export default App;
