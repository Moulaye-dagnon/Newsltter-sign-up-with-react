import { useState } from 'react'
import './App.css'
import { Content } from './component/content'
import { Form } from './component/form'
import { Header } from './component/header'
import { EmailConfirmed } from './component/isEmailConfirmed'

function App() {
	const [showPage , setshowPage] = useState(false)
  return (
	<>
		{!showPage ? 
				<div className='container'>
					<Header/>
					<div className='container-content' >
						<Content/>
						<Form verif={setshowPage} />			
					</div>
				</div>
			:  <EmailConfirmed pageBack={setshowPage} />
			
		}
	</>
  )
}

export default App
