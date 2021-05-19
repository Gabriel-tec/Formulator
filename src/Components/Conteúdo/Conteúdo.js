import React from 'react';
import Blocos from './Blocos/Blocos'
import Blocos02 from './Blocos/Blocos02'
import './StyleConteúdo.css';

class Conteúdo extends React.Component{
    render(){
        return(
            <div>
                <h2>Equações</h2>
                <main className='Blocos'>
                    <Blocos/>
                    <Blocos02/>
                    <Blocos/>
                    <Blocos/>
                    <Blocos/>
                    <Blocos/>
                </main>
            </div>
        )
    }
}

export default Conteúdo;