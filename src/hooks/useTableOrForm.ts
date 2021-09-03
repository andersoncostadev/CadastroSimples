import { useState } from 'react';

export default function useTableOrForm() {
  const [visible, setVisible] = useState<'table' | 'form'>('table')

  const exibirTabela = () => setVisible('table')
  const exibirFormulario = () => setVisible('form')

  return {
    formularioVisivel: visible === 'form',
    tabelaVisivel: visible === 'table',
    exibirTabela,
    exibirFormulario,
  }
}