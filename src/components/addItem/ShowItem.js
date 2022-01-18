import React from 'react';
import './ShowItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ShowItem = ({itemArray, deleteItem}) =>{
    return (
        <>
            <div className="show-items">
            {
                itemArray.map((element ,id)=>{
                    return(
                        <div className="each-item" key={id}>
                            <h3>{element}</h3>
                            <FontAwesomeIcon icon={faTrash} title='Delete Item' className='delete-icon' onClick={()=>deleteItem(id)}/>
                        </div>
                    )
                })
            }
            </div>
        </>
    )
}

export default ShowItem
