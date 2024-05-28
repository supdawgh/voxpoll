import React, { useContext } from 'react'
import './NameDisplay.css'
import {StoreContext}  from '../../context/StoreContext'
import NameItem from '../NameItem/NameItem'

const NameDisplay = ({category}) => {

    const {name_list}=useContext(StoreContext)

  return (
    <div className='name-display' id='name-display'>
        <h2>Upcoming events</h2>
      <div className="name-display-list">
        {name_list.map((item,index)=>{
            return <NameItem key={index} id={item._id} name={item.name} description={item.description}
            image={item.image}/>
        })}
      </div>
    </div>
  )
}

export default NameDisplay
