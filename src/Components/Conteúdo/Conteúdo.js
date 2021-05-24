import React from 'react';

import Blocos from './Blocos/Blocos'
import Blocos02 from './Blocos/Blocos02'
import Blocos03 from './Blocos/Blocos03'
import Blocos04 from './Blocos/Blocos04'
import Blocos05 from './Blocos/Blocos05'
import Blocos06 from './Blocos/Blocos06'

import './StyleConteúdo.css';

import {Link} from'react-router-dom'

class Conteúdo extends React.Component{
    render(){
        return(
            <div>
                <h2>Equações</h2>
                <main className='Blocos'>
                    <Link to='/Formulário'>
                        <Blocos/>
                    </Link>
                    <Link to='/Formulário02'>
                        <Blocos02/>
                    </Link>
                    <Link to='/Formulário03'>
                        <Blocos03/>
                    </Link>
                    <Link to=''>
                        <Blocos04/>
                    </Link>
                    <Link to=''>
                        <Blocos05/>
                    </Link>
                    <Link to=''>
                        <Blocos06/>
                    </Link>  
                </main>
            </div>
        )
    }
}

export default Conteúdo;