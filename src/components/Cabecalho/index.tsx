import * as React from 'react';
import { Link } from 'react-router-dom';

//assets
import './cabecalho.css'

export default function Cabecalho() {

    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/lista">Lista</Link></li>
        </ul>
    )
}