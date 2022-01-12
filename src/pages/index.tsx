import Titulo from "../components/Titulo";

export default function Home() {
  return (
    <div className={`
      flex h-screen justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white
    `}>
      <Titulo titulo="Cadastro simples">
        <span>conteudo</span>
      </Titulo>
    </div>
  )
}
