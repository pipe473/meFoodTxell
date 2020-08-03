import React from 'react';
import Buscar from '../../ui/Buscar';
import Navegacion from './Navegacion';
import Link from 'next/link';

const Header = () => {
    return ( 
        <header>
            <div>
                <p>P</p>

                <Buscar />

                <Navegacion />
            </div>
            <div>

                <p>Hola: Felipe</p>
                <button type="button">Cerrar Sesión</button>
                <Link href="/">Login</Link>
                <Link href="/">Register</Link>
            </div>
        </header>
     );
}
 
export default Header;