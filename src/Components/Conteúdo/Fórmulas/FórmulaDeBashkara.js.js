import React from 'react';
import './StyleFórmulas/Bashkara.css'
import {Link} from 'react-router-dom'

class Fórmula01 extends React.Component{

    constructor(){
        super()
        this.state = {
            resultado: '',
            ValorA: '',
            ValorB:'',
            ValorC:''

        }
    }
    /* Mudaças de valores*/
    Valor_A = event =>{
        this.setState({ValorA: event.target.value})
    }
    Valor_B = event =>{
        this.setState({ValorB: event.target.value})
    }
    Valor_C = event =>{
        this.setState({ValorC: event.target.value})
    }
    /*-------------------------- */
    Calcular = () =>{
        
        let A = this.state.ValorA
        let B = this.state.ValorB
        let C = this.state.ValorC

        let res = (B*B)-4*A*C

        if(res < 0){
            res = `Raiz negativa valor "${res}" inválido`
        }else if (res === 0){
            res = `Raiz nula "0" inválido`
        }else{
            res = `Raiz exata valor "${res}"`
        }

        this.setState({resultado:res})

    }
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
                        <input type="number" id="ValorA" 
                        onChange={this.Valor_A}
                        />
                    </div>
                    <div>
                        <p>Valor B:</p>
                        <input type="number" id="ValorB" 
                        onChange={this.Valor_B}

                        />
                    </div>
                    <div>
                        <p>Valor C:</p>
                        <input type="number" id="ValorC" 
                            onChange={this.Valor_C}
                        />
                    </div>
                    <div>
                        <button onClick={this.Calcular}>Calcular</button>
                    </div>
                    <h3 id='Resultado'>Resultado: ({this.state.resultado})</h3>
                </main>
            </div>
        )
    }
}

export default Fórmula01;