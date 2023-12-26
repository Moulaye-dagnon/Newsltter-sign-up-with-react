import iconList from '../../public/assets/images/icon-list.svg'
export function ItemList({...props}){
	return <div style={{position:'relative'}}>
	<img src={iconList} alt="" style={{position:'absolute'}} />
	<p style={{marginLeft:'37px'}}>{props.children}</p>
</div>
}