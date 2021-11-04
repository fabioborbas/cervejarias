import React, { useEffect, useState } from 'react';
import {
    TextField,
    Box
} from '@mui/material';

import api from '../../services/api';
import { useParams } from 'react-router';


import { IListaDetahe } from '../../types/listaDetalhe'



export default function Detalhes() {
    const [listaDetalhes, setListaDetalhes] = useState<IListaDetahe>()
    const { id } = useParams<{ id: string }>()

    useEffect(() => {
        loadLista()
    }, [])

    async function loadLista() {
        const { data } = await api.get<IListaDetahe>(`/${id}`)
        console.log(data)
        setListaDetalhes(data)
    }
    return (
        <Box sx={{paddingTop: "5rem"}}>
            <h2>ID</h2>
            <TextField
                sx={{ paddingBottom: "1.25rem", paddingRight: "1rem" }}
                disabled
                id={listaDetalhes?.id}
                label={listaDetalhes?.id}
                defaultValue={listaDetalhes?.id}
            />
            <br />
            <h2>Nome</h2>
            <TextField
                sx={{ paddingBottom: "1.25rem", paddingRight: "1rem" }}
                disabled
                id={listaDetalhes?.name}
                label={listaDetalhes?.name}
                defaultValue={listaDetalhes?.name}
            />
            <h2>País</h2>
            <TextField
                sx={{ paddingBottom: "1.25rem", paddingRight: "1rem" }}
                disabled
                id={listaDetalhes?.country}
                label={listaDetalhes?.country}
                defaultValue={listaDetalhes?.country}
            />
            <h2>Estado</h2>
            <TextField
                sx={{ paddingBottom: "1.25rem", paddingRight: "1rem" }}
                disabled
                id={listaDetalhes?.state}
                label={listaDetalhes?.state}
                defaultValue={listaDetalhes?.state}
            />
            <h2>Cidade</h2>
            <TextField
                sx={{ paddingBottom: "1.25rem", paddingRight: "1rem" }}
                disabled
                id={listaDetalhes?.city}
                label={listaDetalhes?.city}
                defaultValue={listaDetalhes?.city}
            />
            <h2>Rua</h2>
            <TextField
                sx={{ paddingBottom: "1.25rem", paddingRight: "1rem" }}
                disabled
                id={listaDetalhes?.street}
                label={listaDetalhes?.street}
                defaultValue={listaDetalhes?.street}
            />
            <h2>Código Postal</h2>
            <TextField
                sx={{ paddingBottom: "1.25rem", paddingRight: "1rem" }}
                disabled
                id={listaDetalhes?.postal_code}
                label={listaDetalhes?.postal_code}
                defaultValue={listaDetalhes?.postal_code}
            />
            <br />
            <h2>Tipo da Cervejaria</h2>
            <TextField
                sx={{ paddingBottom: "1.25rem", paddingRight: "1rem" }}
                disabled
                id={listaDetalhes?.brewery_type}
                label={listaDetalhes?.brewery_type}
                defaultValue={listaDetalhes?.brewery_type}
            />
            <h2>Telefone</h2>
            <TextField
                sx={{ paddingBottom: "1.25rem", paddingRight: "1rem" }}
                disabled
                id={listaDetalhes?.phone}
                label={listaDetalhes?.phone}
                defaultValue={listaDetalhes?.phone}
            />
        </Box>

    )
}