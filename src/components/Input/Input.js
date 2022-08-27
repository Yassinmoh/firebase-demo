import React,{useState,useRef} from 'react'
import { useFirestore } from '../../firebase/useFirestore'
import './input.css'

const initialItem ={title:'',type:'',date:''}
const Input = () => {
    const {AddItem}=useFirestore()
    const [item, setItem] = useState(initialItem)
    const [amoumt, setAmoumt] = useState('')
    const selectedOption=useRef(null)

    const handleِAmount =({target})=>{
        setAmoumt(target.value)
    }

    const handleChange=({target})=>{
        setItem({...item,
        [target.name]: target.value})
    }

    const handleSubmit= async(e)=>{
        e.preventDefault()
        let accualAmount = selectedOption.current.value === 'expense' ?  -Math.abs(parseInt(amoumt)) : parseInt(amoumt)
        await AddItem(item,accualAmount);

        setItem(initialItem)
        setAmoumt('')
    }
    return (
        <div className='input'>
            <form onSubmit={handleSubmit}>
                <input type='text' name='title' placeholder='Enter Title'  onChange={handleChange} value={item.title}/>
                <input type='number' name='amount' placeholder='Enter Amount' onChange={handleِAmount} value={amoumt}/>
                <input type='date' name='date' placeholder='Enter Date' onChange={handleChange} value={item.date}/>
                <label htmlFor='type'>Type</label>
                <select name='type' onChange={handleChange} ref={selectedOption}>
                    <option value='income'>Income</option>
                    <option value='expense'>Expense</option>
                </select>
                <input type='submit' value='Add' />
            </form>
        </div>
    )
}
export default Input