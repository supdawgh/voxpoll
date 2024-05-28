import React from 'react'
import './NameItem.css'
import {assets} from '../../assets/assets'

const NameItem = ({id,name,description,image}) => {
  return (
    <div className='name-item'>
     <div className='name-item-img-container'>
        <img className='name-item-image' src={image} alt=''/>
        </div>
      <div className='name-item-info'>
        <div className='name-item-name-vote'>
            <p>{name}</p>
        </div>
        <p className='name-item-desc'>{description}</p>
        
      </div>
    </div>
  )
}

export default NameItem
