import ImgMobile from "../../public/assets/images/illustration-sign-up-mobile.svg"
import ImgDesktop from "../../public/assets/images/illustration-sign-up-desktop.svg"
import { useEffect, useState } from "react"
export function Header(){

	return <div style={{textAlign:'center', order:"1"}}>
		<picture>
			<source srcset={ImgDesktop} media="(min-width: 900px)" />
			<img src={ImgMobile} alt="MDN" />
		</picture>
	</div>
}