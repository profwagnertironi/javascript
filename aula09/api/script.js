async function buscaPlaneta(codPlaneta) {
    const retorno = await fetch(`https://swapi.dev/api/planets/${codPlaneta}`);
    //console.log(retorno)
    const dados = await retorno.json();

    console.log(dados)
}

buscaPlaneta(3)

