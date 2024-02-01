console.log('Tabela da Copa Pirata 2024.1')

let tabelaJogos = document.querySelector('.tabelaJogos')
// console.log(tabelaJogos)

// ler o arquivo json
fetch('jogos-turno.json')
.then( response => response.json() )
.then( data => data.forEach( jogo => { 
    // console.log(data)

    // criar uma linha de tabela, colocar ela na tabela
    let linha = document.createElement('tr') //table row
    tabelaJogos.appendChild(linha)

    // preencher os dados do jogo em cada linha da tabela
    linha.innerHTML = `
        <td>${jogo.diaSemana}</td>
        <td>${jogo.data}</td>
        <td>${jogo.hora}</td>
        <td>${jogo.grupo}</td>
        <td class='centralizar'>
            <img class='imagemP' src='./images/bandeiras/${jogo.mandante}' alt='' />
            
            <span class='gols'>${jogo.gols_mandante}</span>
            
            <span class='partida'>${jogo.partida}</span>

            <span class='gols'>${jogo.gols_visitante}</span>
            
            <img class='imagemP' src='./images/bandeiras/${jogo.visitante}' alt='' />
        </td>
        <td>${jogo.estadio}</td>
    `

})
)

let tabelaClassificacao = document.querySelector('.tabelaClassificacao')

// ler jason das classificações
fetch('ClassificacaoGrupoUnico.json')
.then( resposta => resposta.json() )
.then( dados => {
        // Ordenar os dados do array com objetos
        dados.sort(function compararNumeros(a, b) {
            return a.posicao - b.posicao
        })
 
    
        dados.forEach( selecao => {
        // console.log(dados)
        console.log(selecao)

        // Criar linhas tr
        let linha = document.createElement('tr')

        // Colocar ela como filho dentro da tabela
        tabelaClassificacao.appendChild(linha)

        // Preencher os dados
        linha.innerHTML = `
            <td>${selecao.posicao}</td>
            <td>${selecao.selecao}</td>
            <td>${selecao.pontos}</td>
            <td>${selecao.jogos}</td>
            <td>${selecao.vitorias}</td>
            <td>${selecao.empates}</td>
            <td>${selecao.derrotas}</td>
            <td>${selecao.gols_pro}</td>
            <td>${selecao.gols_contra}</td>
            <td>${selecao.saldo_de_gols}</td>
        `
    })
}
)