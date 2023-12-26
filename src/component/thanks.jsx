import './form.css'
import iconSuccess from "../../public/assets/images/icon-success.svg";
export function ThanksPage() {
	const styleBtn = {

	}
  return (
    <div style={{margin:"149px 40px 24px"}}>
      <div style={{marginBottom: '263px'}}>
			<div style={{marginBottom:"40px"}} >
				<img src={iconSuccess} alt="" />
			</div>
			<h1>Thanks for subscribing!</h1>
			<p>
				A confirmation email has been sent to ash@loremcompany.com. Please
				open it and click the button inside to confirm your subscription
			</p>
		</div>
	  <button className='btn'>Dismiss message</button>
    </div>
  );
}
