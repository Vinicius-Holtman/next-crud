import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import Layout from "../components/Layout";

export default function Home() {

  const clientes = [
    new Cliente('Vini', 19, '1'),
    new Cliente('Bia', 20, '2'),
    new Cliente('Laura', 22, '3'),
    new Cliente('Ester', 21, '4')
  ]

  return (
    <div className={`
      flex h-screen justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white
    `}>
      <Layout titulo="Cadastro simples">
        <Tabela clientes={clientes}></Tabela>
      </Layout>
    </div>
  )
}
