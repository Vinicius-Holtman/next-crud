import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import Layout from "../components/Layout";
import Botao from "../components/Botao";

export default function Home() {

  const clientes = [
    new Cliente('Vini', 19, '1'),
    new Cliente('Bia', 20, '2'),
    new Cliente('Laura', 22, '3'),
    new Cliente('Ester', 21, '4')
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente)
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(cliente)
  }

  return (
    <div className={`
      flex h-screen justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white
    `}>
      <Layout titulo="Cadastro simples">
        <div className="flex justify-end">
          <Botao cor="green" className="mb-4">Novo Cliente</Botao>
        </div>
        <Tabela clientes={clientes} 
        clienteSelecionado={clienteSelecionado}
        clienteExcluido={clienteExcluido} 
        />
      </Layout>
    </div>
  )
}
