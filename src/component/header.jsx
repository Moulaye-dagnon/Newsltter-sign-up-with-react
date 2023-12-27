import ImgMobile from "../../public/assets/images/illustration-sign-up-mobile.svg"
import ImgDesktop from "../../public/assets/images/illustration-sign-up-desktop.svg"
export function Header(){
	const sizeScreem = window.innerWidth
	return <div style={{textAlign:'center', order:"1"}}>
		<img src={ sizeScreem > 1000 ? ImgDesktop :  ImgMobile} alt="" />
	</div>
}