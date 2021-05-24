import React from 'react';
import {Link} from 'react-router-dom'

class Formulário03 extends React.Component{

    constructor(){
        super()
        this.state = {
            Delta:'',
            ValorX:'',
            ValorY:'',
            ValB:'',
            ValA:''
        }
    }

    VDelta = event => {
        this.setState({Delta: event.target.value})
    }
    ValorB = event => {
        this.setState({ValB: event.target.value})
    }
    ValorA = event => {
        this.setState({ValA: event.target.value})
    }


    CalcularRaiz = () => {
        let Delta = this.state.Delta
        let Raiz = (Math.sqrt(Delta))
        let B = this.state.ValB
        let A = this.state.ValA

        let ValX = (-B+Raiz)/(2*A)
        let ValY = (-B-Raiz)/(2*A)

        this.setState({ValorX: ValX})
        this.setState({ValorY: ValY})

    }

    render(){
        return(
            <div>
                <div className='Back'>
                    <Link to='/'>Voltar</Link>
                </div>
                
                <h2>Equação de segundo grau</h2>

                <main className='Cálculos'>
                    <div>
                        <p>Delta:</p>
                        <input type="number"
                            onChange={this.VDelta}
                            value={this.state.Delta}
                        />
                    </div>
                    <div>
                        <p>Valor -B:</p>
                        <input type="number" 
                        onChange={this.ValorB}
                        value={this.state.ValB}
                        />
                    </div>
                    <div>
                        <p>Valor A:</p>
                        <input type="number" 
                        onChange={this.ValorA}
                        value={this.state.ValA}
                        />
                    </div>
                    <div>
                        <button onClick={this.CalcularRaiz}>Calcular</button>
                    </div>
                    <p>Valor de X:({this.state.ValorX})</p>
                    <p>Valor de Y:({this.state.ValorY})</p>
                </main>
            </div>
        )
    }
}

export default Formulário03;