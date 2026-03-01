document.querySelector('#btn-calcular')?.addEventListener('click', () => {
    const nota1 = parseFloat(document.querySelector('#nota1').value);
    const nota2 = parseFloat(document.querySelector('#nota2').value);
    const resultado = document.querySelector('#resultado');

    if (isNaN(nota1) || isNaN(nota2)) {
        alert('Por favor, digite valores válidos para ambas as notas!');
        return;
    }

    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        alert('As notas devem estar entre 0 e 10!');
        return;
    }

    const media = (nota1 + nota2) / 2;
    let situacao = '';
    let classe = '';

    if (media <= 4.5) {
        situacao = 'Aluno Reprovado';
        classe = 'reprovado';
    } else if (media <= 6.5) {
        situacao = 'Aluno em Recuperação';
        classe = 'recuperacao';
    } else {
        situacao = 'Aluno Aprovado';
        classe = 'aprovado';
    }

    resultado.innerHTML = `
        <p class="media">Média: ${media.toFixed(2)}</p>
        <p class="situacao ${classe}">${situacao}</p>
    `;

    resultado.classList.add('ativo');
});

// Permite calcular ao pressionar Enter
document.querySelector('#nota2')?.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        document.querySelector('#btn-calcular').click();
    }
});
