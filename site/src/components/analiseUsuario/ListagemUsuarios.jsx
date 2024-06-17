import React, { useState, useEffect } from "react";
import { Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SidebarDash from '../sidebar/SidebarDash';
import Documento2 from '../eleDocumento/Documento2';
import InputPesquisa from '../Input/InputPesquisa';
import BtnAzulS from '../botao/BtnAzulS';
import apiUsuario from '../../api/Usuario/apiUsuario';
import Style from './Usuarios.module.css'; // Verifique se o caminho está correto

function ListaUsuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const [ordenacaoTipo, setOrdenacaoTipo] = useState('');
    const [ordenacaoAsc, setOrdenacaoAsc] = useState(true);
    const [termoPesquisa, setTermoPesquisa] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        recuperarValorDoCard();
    }, []);

    async function recuperarValorDoCard() {
        try {
            const response = await apiUsuario.get('');
            setUsuarios(response.data);
        } catch (error) {
            console.error("Erro ao recuperar usuários:", error);
        }
    }

    const ordenarPorPermissao = () => {
        const sortedUsuarios = [...usuarios].sort((a, b) => {
            if (a.tipoDeUsuario < b.tipoDeUsuario) return -1;
            if (a.tipoDeUsuario > b.tipoDeUsuario) return 1;
            return 0;
        });
        setUsuarios(sortedUsuarios);
        setOrdenacaoTipo('Permissao');
    };

    const ordenarPorNome = () => {
        const sortedUsuarios = [...usuarios].sort((a, b) => {
            if (a.nome < b.nome) return -1;
            if (a.nome > b.nome) return 1;
            return 0;
        });
        setUsuarios(sortedUsuarios);
        setOrdenacaoTipo('Nome');
    };

    const ordenarPorData = () => {
        const sortedUsuarios = [...usuarios].sort((a, b) => {
            const dataA = new Date(a.dtCadastro);
            const dataB = new Date(b.dtCadastro);
            return ordenacaoAsc ? dataA - dataB : dataB - dataA;
        });
        setUsuarios(sortedUsuarios);
        setOrdenacaoTipo('Data');
        setOrdenacaoAsc(!ordenacaoAsc);
    };

    const desfazerOrdenacao = () => {
        recuperarValorDoCard();
        setOrdenacaoTipo('');
        setOrdenacaoAsc(true);
    };

    const filtrarUsuarios = () => {
        return usuarios.filter(usuario => {
            return (
                usuario.nome.toLowerCase().includes(termoPesquisa.toLowerCase()) ||
                usuario.tipoDeUsuario.toLowerCase().includes(termoPesquisa.toLowerCase()) ||
                usuario.telefone.includes(termoPesquisa) ||
                usuario.dtCadastro.includes(termoPesquisa) ||
                usuario.email.toLowerCase().includes(termoPesquisa.toLowerCase())
            );
        });
    };

    const handlePesquisaChange = (event) => {
        setTermoPesquisa(event.target.value);
    };

    const handleDesfazerBloqueio = async () => {
        try {
            await apiUsuario.post('/desfazer-bloqueio');
            recuperarValorDoCard();
        } catch (error) {
            console.error("Erro ao desfazer bloqueio:", error);
        }
    };

    return (
        <div className={Style.container}>
            <SidebarDash />
            <Stack className={Style.card} spacing={3}>
                <Stack className={Style.title} direction="row" spacing={25}>
                    <h1>Análise de Usuários</h1>
                </Stack>
                <Stack className={Style.filtros} direction="row" spacing={7}>
                    <Stack spacing={2}>
                        <p>Filtrar por:</p>
                        <Stack direction="row" spacing={3} className={Style["tipo-filtro"]}>
                            <BtnAzulS sx={{ width: "12vw" }} onClick={() => navigate('/admin/cadastro')}>
                                Cadastrar usuário
                            </BtnAzulS>
                            <InputPesquisa value={termoPesquisa} onChange={handlePesquisaChange} />
                            <BtnAzulS onClick={ordenarPorPermissao}>
                                Permissão
                            </BtnAzulS>
                            <BtnAzulS onClick={ordenarPorNome}>
                                A-Z
                            </BtnAzulS>
                            <BtnAzulS onClick={ordenarPorData}>
                                Data
                            </BtnAzulS>
                            <BtnAzulS onClick={handleDesfazerBloqueio}>
                                Desfazer
                            </BtnAzulS>
                            <span className={Style.foto}></span>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack spacing={18} className={Style.tags} direction="row">
                    <p>Foto</p>
                    <p>Nome</p>
                    <p>Tipo de Usuário</p>
                    <p>Telefone</p>
                    <p>Data de Cadastro</p>
                    <p>E-mail</p>
                </Stack>
                <Stack spacing={3} paddingBottom={3}>
                    {filtrarUsuarios().map((usuario) => (
                        usuario.status ? (
                            <Documento2
                                key={usuario.idUsuario} // Adicione uma chave única para cada usuário
                                idUsuario={usuario.idUsuario}
                                nome={usuario.nome}
                                permissao={usuario.tipoDeUsuario}
                                telefone={usuario.telefone}
                                data={usuario.dtCadastro}
                                email={usuario.email}
                                onDesbloquear={handleDesfazerBloqueio} // Passa a função para desbloquear como prop
                            />
                        ) : null
                    ))}
                </Stack>
            </Stack>
        </div>
    );
}

export default ListaUsuarios;
