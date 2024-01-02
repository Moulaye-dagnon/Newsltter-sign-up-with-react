import './formAndthanks.css'
import { useState } from "react"

export function Form({verif}){
	
	const [Valid , setValid] = useState(true)
	const [mail, setmail] = useState('')
	const Verificator = (email)=>{
		if(email == ""){
			return false
		}
		return /\S+@\S+\.\S+/.test(email);
	}
	const HandlerVerif = (e)=>{
		e.preventDefault()
		if(Verificator(mail)){
			verif(true)
		}
		else{
			setValid(false)
		}
	}
	return <>
			<form action="" onSubmit={HandlerVerif} >
				<label htmlFor="email"> Email Adress </label> 
				{!Valid && 	<span aria-live="assertive">Valid email required</span> }
				<input 
				 	type="text"
				  	id="email" 
					value={mail} 
					placeholder='email@company.com'
					onChange={(e) => setmail(e.target.value)}
					style={{backgroundColor: !Valid ? "#FF6155": "" }}
				/>
				<button className='btn' type="submit" >Subscribe to monthly newsletter</button>
			</form>
				
		</>
}