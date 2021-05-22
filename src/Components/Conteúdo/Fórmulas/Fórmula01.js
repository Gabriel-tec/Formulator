import React from 'react';
import './StyleFórmulas/Bashkara.css'
import {Link} from 'react-router-dom'

class Fórmula01 extends React.Component{
    render(){
        return(
            <div>
                <div className='Back'>
                     <Link to='/'>Voltar</Link>
                </div>
                <h2>Fórmula de Bashkara</h2>
                <main className='Cálculos'>
                    <div>
                        <p>Valor A:</p>
                        <input type="number" id="ValorA" />
                    </div>
                    <div>
                        <p>Valor B:</p>
                        <input type="number" id="ValorB" />
                    </div>
                    <div>
                        <p>Valor C:</p>
                        <input type="number" id="ValorC" />
                    </div>
                    <div>
                        <button onClick='Calcular()'>Calcular</button>
                    </div>
                    <h3 id='Resultado'>Resultado:</h3>
                </main>
            </div>
        )
    }
}

export default Fórmula01;