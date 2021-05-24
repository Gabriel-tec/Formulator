import React from 'react'
import {Link} from 'react-router-dom'

class Fórmula02 extends React.Component{

    constructor(){
        super()
        this.state = {
            BaseQuadrado:'',
            AlturaQuadrado:'',
            resultadoAQ:'',

            BaseTriângulo:'',
            AlturaTriângulo:'',
            resultadoTR:''

        }
    }
    /* -------------- */
    ALQuadrado = event =>{
        this.setState({AlturaQuadrado: event.target.value})
    }
    BSQuadrado = event =>{
        this.setState({BaseQuadrado: event.target.value})
    }
    /* -------------- */
    /* -------------- */
    BATriângulo = event =>{
        this.setState({BaseTriângulo: event.target.value})
    }
    ALTriângulo = event =>{
        this.setState({AlturaTriângulo: event.target.value})
    }
    /* -------------- */
    CalcularAQ = () =>{
        let Altura = this.state.AlturaQuadrado
        let Base = this.state.BaseQuadrado
        let res = `A área do quadrado é "${Base*Altura}"`

        this.setState({resultadoAQ: res})

    }

    CalcularAT = () =>{
        let Base = this.state.BaseTriângulo
        let Altura = this.state.AlturaTriângulo
        let res = `A área do triângulo é ${Base*Altura/2}`

        this.setState({resultadoTR: res})
    }

    render(){
        return(
            <div>
                <div className='Back'>
                     <Link to='/'>Voltar</Link>
                </div>

                <h2>Àrea de um quadrado</h2>
                
                <main className='Cálculos'>
                    <div>
                        <p>Base:</p>
                        <input type="number" 
                            onChange={this.BSQuadrado}
                            value={this.state.BaseQuadrado}
                        />
                    </div>
                    <div>
                        <p>Altura:</p>
                        <input type="number" 
                            onChange={this.ALQuadrado}
                            value={this.state.AlturaQuadrado}
                        />
                    </div>
                    <div>
                        <button onClick={this.CalcularAQ}>Calcular</button>
                    </div>
                    <p>Resultado: ({this.state.resultadoAQ})</p>
                </main>
                <main>
                    <h2>Àrea de um triângulo</h2>

                    <main className='Cálculos'>
                        <div>
                            <p>Base:</p>
                            <input type="number" 
                                onChange={this.BATriângulo}
                                value={this.state.BaseTriângulo}
                            />
                        </div>
                        <div>
                            <p>Altura:</p>
                            <input type="number" 
                                onChange={this.ALTriângulo}
                                value={this.state.AlturaTriângulo}
                            />
                        </div>
                        <div>
                            <button onClick={this.CalcularAT}>Calcular</button>
                        </div>
                        <p>Resultado: ({this.state.resultadoTR})</p>
                    </main>

                </main>
            </div>
        )
    }
}

export default Fórmula02;