import './formAndthanks.css'
import iconSuccess from "../../public/assets/images/icon-success.svg";
export function ThanksPage({pageBack}) {
	const handlpage = () =>{
		pageBack(false)
	}
  return (
    <div className='thanksContaint' >
		<div >
				<div className='iconSuccess'  >
					<img src={iconSuccess} alt="" />
				</div>
				<h1>Thanks for subscribing!</h1>
				<p>
					A confirmation email has been sent to ash@loremcompany.com. Please
					open it and click the button inside to confirm your subscription
				</p>
			</div>
	  <button className='btn' onClick={handlpage}>Dismiss message</button>
    </div>
  );
}
