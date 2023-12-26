import { ItemList } from "./ItemList";
import { Form } from "./form";

export function Content(){
	return <div style={{margin: "40px 20px", padding:'10px'}}>
		<h1 style={{margin:'0'}}>Stay updated!</h1>

		<p>Join 60,000+ product managers receiving monthly updates on:</p>
		
		<ItemList>Product discovery and building what matters</ItemList>
		<ItemList>Measuring to ensure updates are a success</ItemList>
		<ItemList>And much more!</ItemList>
		
		<Form/>
	</div>
}