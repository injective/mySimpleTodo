import React from "react";


const TodoListItem = (props) => {
    return (
        <li className="TodoListItem">
            {props.val.text}
        </li>
    );
};

export default TodoListItem;