import React, { useEffect, useState } from 'react';
import {
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Button
} from '@mui/material';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import { ILista } from '../../types/lista'

//components
import Busca from '../Busca';






export default function Lista() {

    const [lista, setLista] = useState<ILista[]>([])
    const history = useHistory()

    useEffect(() => {
        loadLista()
    }, [])

    async function loadLista() {
        const { data } = await api.get<ILista[]>('/')
        setLista(data)
    }

    function viewList(id: string) {
        history.push(`Detalhes/${id}`)
    }
    return (
        <div className="container">
            <Busca setLista={setLista} />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">Cidade</TableCell>
                            <TableCell align="right">Nome</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {lista.map((cell) => (
                            <TableRow
                                key={cell.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {cell.id}
                                </TableCell>
                                <TableCell align="right">{cell.city}</TableCell>
                                <TableCell align="right">{cell.name}</TableCell>
                                <TableCell>
                                    <Button variant="outlined" onClick={() => viewList(cell.id)} >
                                        Detalhes
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}