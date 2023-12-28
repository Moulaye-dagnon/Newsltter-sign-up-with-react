import ImgMobile from "../../public/assets/images/illustration-sign-up-mobile.svg"
import ImgDesktop from "../../public/assets/images/illustration-sign-up-desktop.svg"
import { useEffect, useState } from "react"
export function Header(){
	const [WidthScreem, setWidthSreem] = useState(window.innerWidth)

	useEffect(()=>{
		const handleResize = ()=> setWidthSreem(window.innerWidth)
		window.addEventListener('resize', handleResize)
		return ()=> window.removeEventListener('resize', handleResize)
	},[])
	console.log(WidthScreem)

	return <div style={{textAlign:'center', order:"1"}}>
		<img src={ WidthScreem > 900 ? ImgDesktop :  ImgMobile} alt="" />
	</div>
}