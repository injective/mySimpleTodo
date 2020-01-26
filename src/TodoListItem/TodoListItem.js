import React from "react";
import './TodoListItem.css';

const TodoListItem = (props) => (
        <li className="TodoListItem">
            {props.item.text}
        </li>
    );

export default TodoListItem;