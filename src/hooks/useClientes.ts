import { useState, useEffect } from 'react'
import useTableOrForm from './useTableOrForm'
import Cliente from '../core/Cliente'
import ClienteRepositorio from '../core/ClienteRepositorio'
import ColecaoCliente from '../backend/db/ColecaoCliente'



export default function useCliente() {
  const repository: ClienteRepositorio = new ColecaoCliente()

  const { tabelaVisivel, exibirFormulario, exibirTabela } = useTableOrForm()

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])


  useEffect(obterTodos, [])

  function obterTodos() {
    repository.obterTodos().then(clientes => {
      setClientes(clientes)
      exibirTabela()
    })

  }

  function selecionarCliente(cliente: Cliente) {
    setCliente(cliente)
    exibirFormulario()
  }

  async function excluirCliente(cliente: Cliente) {
    await repository.excluir(cliente)
    obterTodos()
  }

  function novoCliente() {
    setCliente(Cliente.vazio())
    exibirFormulario()
  }

  async function salvarCliente(cliente: Cliente) {
    await repository.salvar(cliente)
    obterTodos()
  }

  return {
    cliente,
    clientes,
    salvarCliente,
    novoCliente,
    excluirCliente,
    selecionarCliente,
    obterTodos,
    tabelaVisivel,
    exibirTabela
  }
}