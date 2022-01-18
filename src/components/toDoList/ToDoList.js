import React , { useState, useEffect } from 'react';
import todo from '../../assets/to-do-icon.png';
import './ToDoList.css';
import ShowItem from '../addItem/ShowItem.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const getLocalItems = () =>{
    const lists = localStorage.getItem('lists');
    if(lists)
        return JSON.parse(localStorage.getItem('lists'));
    else 
        return [];
}

const ToDoList = () =>{
    const [inputItem , setInputItem] = useState('');
    const [itemArray , setItemArray] = useState(getLocalItems());
    const addItems = () =>{
        // console.log('added');
        // const newItem = {
        //     id: new Date().toString.getTime(),
        //     name: ''
        // }
        // console.log(newItem.id)
        if(inputItem){
            setItemArray([...itemArray,inputItem]);
            setInputItem('');
        }
    }
    const deleteItem = (id) =>{
        console.log('delete');
        const updatedItem = itemArray.filter((ele,index)=>{
            return index !== id;
        })
        setItemArray(updatedItem);
    }
    useEffect(() =>{
        localStorage.setItem('lists', JSON.stringify(itemArray));
    },[itemArray])
    return (
        <>
           <div className='main-div'>
                <div className='child-div'>
                    <figure>
                        <img src={todo} alt="todo-icon"/> 
                        <figcaption>Add your list here ...</figcaption>
                    </figure>
                    <div className='add-items'>
                        <input type='text' placeholder="Add items..." value={inputItem} onChange={(e) => setInputItem(e.target.value)} onKeyPress={e => e.key === 'Enter' ? addItems() : null }/>
                        <FontAwesomeIcon icon={faPlus} title='Add Item' className='plus-icon' onClick={addItems}/>
                    </div>
                </div>
            </div>
            <ShowItem itemArray={itemArray} deleteItem={deleteItem} /> 
        </>
    )
}

export default ToDoList;
