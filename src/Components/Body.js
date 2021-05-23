import React from 'react'
import Header from './Header/header'
import Conteúdo from './Conteúdo/Conteúdo'
import Footer from './Rodapé/Footer'

import Formulário from './Conteúdo/Fórmulas/FórmulaDeBashkara.js'
import Formulário02 from './Conteúdo/Fórmulas/Fórmula02'
import Formulário03 from './Conteúdo/Fórmulas/Fórmula03'
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom'

class Body extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Router>
                    <Switch>
                        <Route path='/' exact>
                             <Conteúdo/>
                        </Route>

                        <Route path='/Formulário'>
                          <Formulário/>                  
                        </Route>

                        <Route path='/Formulário02'>
                            <Formulário02/>
                        </Route>

                        <Route path='/Formulário03'>
                            <Formulário03/>
                        </Route>
                    </Switch>
                </Router>

                <Footer/>
            </div>
        )
    }
}

export default Body