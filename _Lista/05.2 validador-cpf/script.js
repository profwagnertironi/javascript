// Validador do CPF
function validarCPF(cpf) {
    // removendo os caracteres especiais
    cpf = cpf.replace(/\D/g, '');

    //O CPF tem que ter 11 digitos
    if (cpf.length !== 11) {
        return false;
    }

    // Verifica se todos os dígitos são iguais (CPF inválido)
    if (/^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    // vertifica o primeiro digito verificador (posicao 10)
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += (cpf.charCodeAt(i) - 48) * (10 - i);
    }
    let digit1 = 11 - (sum % 11);
    if (digit1 >= 10) {
        digit1 = 0;
    }
    if ((cpf.charCodeAt(9) - 48) !== digit1) {
        return false;
    }

    // vertifica o segundo digito verificador (posicao 11)
    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += (cpf.charCodeAt(i) - 48) * (11 - i);
    }
    let digit2 = 11 - (sum % 11);
    if (digit2 >= 10) {
        digit2 = 0;
    }
    if ((cpf.charCodeAt(10) - 48) !== digit2) {
        return false;
    }
    return true;
}

function formatarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    if (cpf.length === 11) {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }
    return cpf;
}

document.querySelector('#cpf')?.addEventListener('input', (event) => {
    let valor = event.target.value.replace(/\D/g, '');
    
    if (valor.length <= 11) {
        if (valor.length > 6) {
            valor = valor.substring(0, 3) + '.' + valor.substring(3, 6) + '.' + valor.substring(6, 9) + '-' + valor.substring(9, 11);
        } else if (valor.length > 3) {
            valor = valor.substring(0, 3) + '.' + valor.substring(3, 6) + '.' + valor.substring(6);
        } else if (valor.length > 0) {
            valor = valor.substring(0, 3);
        }
        event.target.value = valor;
    }
});

document.querySelector('#btn-validar')?.addEventListener('click', () => {
    const cpf = document.querySelector('#cpf').value;
    const resultado = document.querySelector('#resultado');

    if (cpf.trim() === '') {
        alert('Por favor, digite um CPF!');
        return;
    }

    if (validarCPF(cpf)) {
        resultado.innerHTML = `
            <p class="status valido">✓ CPF Válido!</p>
            <p>CPF: ${formatarCPF(cpf)}</p>
        `;
    } else {
        resultado.innerHTML = `
            <p class="status invalido">✗ CPF Inválido!</p>
            <p>O CPF digitado não passou na validação.</p>
        `;
    }

    resultado.classList.add('ativo');
});

// Permite validar ao pressionar Enter
document.querySelector('#cpf')?.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        document.querySelector('#btn-validar').click();
    }
});
