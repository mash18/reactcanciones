import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App'



//renderizado de componente
ReactDom.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.querySelector('#root') //donde queremos desplegar el componente
);