import React, {useState} from 'react'
import data from './data.json'
import Loader from './loader'
import user from '../../img/woz.jpg'
import '../../../../css/less/app.less'
import '../../../../css/stylus/app.styl'
function App() {
	const [loaderList, setlLoaderList] = useState([])
	async function handleClick(){
		setlLoaderList(data.loaders)
		const { alerta } = await import('./lx.js')
		alerta('hola perdida')
	}
	return (
		<div>
			<p className="post-css">
				esto es postcss
			</p>
			<p className="less">
				esto es less
			</p>
			<p className="stylus">
				esto es stylus
			</p>
			que linda aplicacion en react.js
			<p>
				<img src={user} alt="usuari" />
			</p>
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