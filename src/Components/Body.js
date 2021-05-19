import React from 'react'
import Header from './Header/header'
import Conteúdo from './Conteúdo/Conteúdo'
import Footer from './Rodapé/Footer'

class Body extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Conteúdo/>
                <Footer/>
            </div>
        )
    }
}

export default Body