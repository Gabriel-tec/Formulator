import React, { Component } from 'react'
import MainHeader from './Cabeçalho/MainHeader'
import Blocos from './Conteúdo/Blocos'
import Footer from './Rodapé/Footer'

export default class Body extends Component {
    render() {
        return (
            <div>
                <MainHeader/>
                <Blocos/>
                <Footer/>
            </div>
        )
    }
}
