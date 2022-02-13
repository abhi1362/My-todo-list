import React from 'react';
import './ShowItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

const ShowItem = ({itemArray, deleteItem, editItem, toggleButton, completedTasks}) =>{
    return (
        <>
            <div className="show-items">
            {
                itemArray.map((element)=>{
                    return(
                        <div className={`each-item ${toggleButton ? '' : 'disable-each-item'} ${element.value ? 'strike' : ''}`} key={element.id}>
                            <div className='heading-div'>
                                <div className={`heading-div-child1 ${element.value ? 'completed-task' : ''}`}>
                                    <input type="checkbox" id={element.id} value={element.value} checked={element.value} onChange={()=>completedTasks(element.id)}/>
                                    <label htmlFor={element.id}></label>
                                </div>
                                <div className="heading-div-child2">
                                    <span className='date-time'> <span className='date-time-title'>Date :</span> { element.date } </span>
                                    <span className='date-time'><span className='date-time-title'>Time :</span> { element.time }</span>
                                    <h3>{element.name}</h3>
                                </div>
                            </div>
                            <div className='icons-button'>
                                <FontAwesomeIcon icon={faEdit} title='Edit Item' className={`edit-icon ${element.value ? 'completed-task' : ''}`} onClick={()=>editItem(element.id)}/>
                                <FontAwesomeIcon icon={faTrash} title='Delete Item' className='delete-icon' onClick={()=>deleteItem(element.id)}/>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </>
    )
}

export default ShowItem
