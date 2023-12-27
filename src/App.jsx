import { useState } from 'react'
import './App.css'
import { Content } from './component/content'
import { Form } from './component/form'
import { Header } from './component/header'
import { ThanksPage } from './component/thanks'

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
			: <ThanksPage pageBack={setshowPage} />
		}
	</>
  )
}

export default App
