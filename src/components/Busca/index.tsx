import React, { useEffect, useState } from 'react'
import { TextField, IconButton, MenuItem } from '@mui/material';
import { Search } from '@mui/icons-material';
import { ILista } from '../../types/lista'
import api from '../../services/api'
import { Box } from '@mui/system';

const currencies = [
    {
        value: '?by_name',
        label: 'Nome',
    },
    {
        value: '?by_city',
        label: 'Cidade',
    },
    {
        value: '/search?query',
        label: 'Livre'
    }

];

export default function Busca(props: { setLista: React.Dispatch<React.SetStateAction<ILista[]>> }) {
    const [buscaPesquisa, setBuscaPesquisa] = useState('')
    const [currency, setCurrency] = React.useState('');

    const buscador = async (query: string) => {
        const { data } = await api.get<ILista[]>(`${currency}=${query}`)
        props.setLista(data)
    }

    const ahBuscar = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBuscaPesquisa(event.target.value)
    }

    useEffect(() => {
        (async () => {
            const query = encodeURIComponent(buscaPesquisa)
            if (query) {
                await buscador(query)
            }
        })()
    }, [buscaPesquisa]) //material ui

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrency(event.target.value);
    };

    return (
        <>
            <Box>
                <TextField
                    sx={{
                        m: 1, width: '25ch'
                    }}
                    id="outlined-select-currency"
                    select
                    label="filtro de Pesquisa"
                    value={currency}
                    onChange={handleChange}
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    fullWidth
                    id="searchText"
                    label="Pesquisar"
                    type="search"
                    margin="normal"
                    onChange={ahBuscar}
                    InputProps={{
                        endAdornment: (
                            <IconButton>
                                <Search /> {/*botao nao funciona */}
                            </IconButton>
                        )
                    }}
                />
            </Box>
            {buscaPesquisa && <p>Resultados para {buscaPesquisa}...</p>}
        </>
    )
}