import React from 'react';
import todo from '../assets/to-do-icon.png';
import './ToDoList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus} from '@fortawesome/free-solid-svg-icons'


const ToDoList = () =>{
    return (
        <>
           <div className='main-div'>
                <div className='child-div'>
                    <figure>
                        <img src={todo} alt="todo-icon"/> 
                        <figcaption>Add your list here ...</figcaption>
                    </figure>
                    <div className='add-items'>
                        <input type='text' placeholder="Add items..." />
                        <FontAwesomeIcon icon={faPlus} title='Add Item' className='plus-icon'/>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default ToDoList;
