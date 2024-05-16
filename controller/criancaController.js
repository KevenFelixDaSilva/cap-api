const Crianca = require("../entity/Crianca")
const CriancaPessoa = require("../entity/CriancaPessoa")
const criancaRepository = require("../repos/crianca")
const criancaPessoaRepository = require("../repos/criancaPessoa")
const pessoaRepository = require("../repos/pessoa")


module.exports = {
    async cadastrar(body){
        const crianca = new Crianca(body.nome, body.sexo, body.instituicao, body.nascimento, body.periodo, 1)
        await criancaRepository.create(crianca)

        //const result = new CriancaPessoa(response.id, id)
        //return await criancaPessoaRepository.create(result)
        
    },
    async atualizar(body){
        const result = await criancaRepository.update({
            instituicao:body.instituicao,
            periodo:body.periodom,
            cancelado:body.cancelado
        })
        return result
    }
}

