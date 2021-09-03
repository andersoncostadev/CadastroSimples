import useClientes from '../hooks/useClientes'
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";


export default function Home() {

  const {
    cliente,
    clientes,
    novoCliente,
    selecionarCliente,
    excluirCliente,
    salvarCliente,
    tabelaVisivel,
    exibirTabela
  } = useClientes()

  return (
    <div className={`
       flex justify-center items-center h-screen
       bg-gradient-to-r from-blue-500 to-purple-500
       text-white  
    `}>
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Button
                cor="green"
                className="mb-4"
                onClick={novoCliente}
              >
                Novo Cliente
              </Button>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            />
          </>
        ) : (
          <Form
            cliente={cliente}
            changeClient={salvarCliente}
            cancel={exibirTabela}
          />
        )}
      </Layout>
    </div>
  )
}
