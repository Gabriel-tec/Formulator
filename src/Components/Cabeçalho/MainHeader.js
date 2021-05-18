import React, { Component } from 'react'
import './StyleHeader.css'

export default class MainHeader extends Component {
    render() {
        return (
            <div>
                <header className='Header'>
                    <p>Formulator</p>

                    <div>
                        <ul className='menu'>
                            <li>Home</li>
                            <li>Sobre</li>
                            <li>Contatos</li>
                        </ul>
                    </div>

                </header>
            </div>
        )
    }
}
