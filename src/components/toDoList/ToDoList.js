import React , { useState, useEffect } from 'react';
import todo from '../../assets/to-do-icon.png';
import './ToDoList.css';
import ShowItem from '../addItem/ShowItem.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEdit } from '@fortawesome/free-solid-svg-icons'

const getLocalItems = () =>{
    const lists = localStorage.getItem('lists');
    if(lists)
        return JSON.parse(localStorage.getItem('lists'));
    else 
        return [];
}

const ToDoList = () =>{
    const [inputItem, setInputItem] = useState('');
    const [itemArray, setItemArray] = useState(getLocalItems());
    const [toggleButton, setToggleButton] = useState(true);
    const [selectedId, setSelectedId] = useState(null);
    const addItems = () =>{
        const newItem = {
            id: Math.floor(Math.random() * 1000000000),
            date: new Date().toDateString(),
            time: new Date().toLocaleTimeString(),
            name: inputItem,
            value: false
        }
        if(inputItem && toggleButton){
            setItemArray([...itemArray,newItem]);
            setInputItem('');
        }
        else if(inputItem && !toggleButton){
            // setInputItem(selectedId.name);
            setItemArray(
                itemArray.map((elem)=>{
                    if(elem.id === selectedId){
                        return {...elem , name: inputItem}
                    }
                    return elem;
                })
            );
            setSelectedId(null);
            setToggleButton(true);
            setInputItem('');
        }
        else{
            if(toggleButton)
                alert('Please enter an Item to Add');
            else alert('Please enter an Item to Update');
        }
    }
    const deleteItem = (id) =>{
        const updatedItem = itemArray.filter((el)=>{
            return el.id !== id;
        })
        setItemArray(updatedItem);
    }
    const editItem = (id) =>{
        const selectedItem = itemArray.find(ele =>{
            return ele.id === id;
        })
        setSelectedId(selectedItem.id);
        setToggleButton(false);
        setInputItem(selectedItem.name);
    }
    const completedTasks = (id) =>{
        setItemArray(
            itemArray.map((elem)=>{
                if(elem.id === id){
                    return {...elem , value: !elem.value}
                }
                return elem;
            })
        );
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
                        <input type='text' placeholder="Add items..." maxLength='50' value={inputItem} onChange={(e) => setInputItem(e.target.value)} onKeyPress={e => e.key === 'Enter' ? addItems() : null }/>
                        {
                            toggleButton ? <FontAwesomeIcon icon={faPlus} title='Add Item' className='plus-icon' onClick={addItems}/> : <FontAwesomeIcon icon={faEdit} title='Update Item' className='plus-icon update-icon' onClick={addItems}/>
                        }
                    </div>
                </div>
            </div>
            <ShowItem itemArray={itemArray} deleteItem={deleteItem} editItem={editItem} toggleButton={toggleButton} completedTasks={completedTasks}/> 
            <div>
            <button className={`clear-btn ${itemArray.length === 0 ? 'disabled-btn' : ''}`} disabled={itemArray.length === 0} onClick={()=> setItemArray([])}>Clear All</button>
            </div>
        </>
    )
}

export default ToDoList;
