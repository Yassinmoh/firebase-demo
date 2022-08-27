import React,{useRef} from 'react'
import { useFirestore } from '../../firebase/useFirestore'
import './item.css'


const Item = ({item}) => {
    const {deleteItem} =useFirestore()
    const Delbtn=useRef()
    return (
        <div className='item' onMouseEnter={()=>(Delbtn.current.style.display = 'block')} onMouseLeave={()=>(Delbtn.current.style.display = 'none')}>
            <div className='item__title'>
                <h3>{item.title}</h3>
            </div>
            <div className='item__info'>
                <p className={item.amount >=0 ? 'income' : 'expense'}>${Math.abs(item.amount)}</p>
                <p>{item.date}</p>
                <button onClick={()=>deleteItem(item.id)} className='item__delete' ref={Delbtn}>Delete</button>
            </div>
        </div>
    )
}

export default Item