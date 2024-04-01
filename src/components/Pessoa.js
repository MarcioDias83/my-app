function Pessoa(nome, idade, profissao, fotos) {
    return (
        <div>
            <h1>Nome: {nome}</h1>
            <h2>Idade: {idade}</h2>
            <h3>Profissão: {profissao}</h3>
            <img src={fotos} alt={nome} />
        </div>
    )
}

export default Pessoa