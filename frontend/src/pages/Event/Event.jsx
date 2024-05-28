import React ,{useContext} from 'react'
import './Event.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';
//import { name_list } from '../../assets/assets';
//import { Link } from 'react-router-dom'



const Event = ({category,setCategory}) => {

const{name_list}=useContext(StoreContext);
const navigate = useNavigate();

  return (
    <div className='event'>
      <div className='event-name'>
        <div className='event-name-list'>
          <h2>Singing Competition</h2>
          <p>These are the Competitions happening now.</p>
        </div>
        <br/>
        <hr/> 
        <div className='name-display-list'>
                    {name_list.map((item, index) => (
                        <div key={index} className='name-item'>
                            <div onClick={()=>navigate('/candidate')}className='name-item-img-container'>
                               <img className='name-item-image'src={item.image} alt={item.name} />
                            </div>
                            <div className='name-item-info'>
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
        </div>
       
      </div>
      </div>
  )
}

export default Event
