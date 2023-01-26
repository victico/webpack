import React, {useState} from 'react'
import data from './data.json'
import Loader from './loader'
function App() {
	const [loaderList, setlLoaderList] = useState([])
	function handleClick(){
		setlLoaderList(data.loaders)
	}
	return (
		<div>
			que linda aplicacion en react
			<ul>
			{
				loaderList.map(item => <Loader data={item} key={item.id} />)
			}
			</ul>
			<button onClick={handleClick}>Mostrar lo aprendido hasta el momento</button>

		</div>
		)
}

export default App