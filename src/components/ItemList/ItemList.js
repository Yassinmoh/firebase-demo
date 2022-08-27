import React from 'react'
import './itemlist.css'
import {useFirestore} from '../../firebase/useFirestore' 
import Item from'../Item/Item'
const ItemList = () => {
    const {items} =useFirestore()
    console.log("items",items);
    return (
        <div className='item-list'>
            
                { items && items.map((item)=>
                <Item item={item} key={item.id}/>
                )}
        </div>
    )
}

export default ItemList