import './form.css'
import { useState } from "react"

export function Form(){
	
	const [Valid , setValid] = useState(true)
	const [mail, setmail] = useState('')
	const Verificator = (email)=>{
		if(email == ""){
			return false
		}
		return /\S+@\S+\.\S+/.test(email);
	}
	const HandlerVerif = (e)=>{
		if(!Verificator(mail)){
			setValid(false)
			e.preventDefault()
		}
	}
	return <>
			<form action="">
				<label htmlFor="email"> Email Adress </label> 
				{!Valid && 	<span>Valid email required</span> }
				<input 
				 	type="email"
				  	id="email" 
					value={mail} 
					placeholder='email@company.com'
					onChange={(e) => setmail(e.target.value)}
					style={{backgroundColor: !Valid ? "#FF6155": "" }}
				/>
				<button className='btn' type="submit" onClick={HandlerVerif} >Subscribe to monthly newsletter</button>
			</form>	
				</>
}