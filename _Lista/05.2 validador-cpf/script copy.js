function validarCPF(cpf) {
    // Remove caracteres especiais
    cpf = cpf.replace(/\D/g, '');

    // Verifica se tem 11 dígitos
    if (cpf.length !== 11) {
        return false;
    }

    // Verifica se todos os dígitos são iguais (CPF inválido)
    if (/^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    // Calcula o primeiro dígito verificador
    let soma = 0;
    let multiplicador = 10;

    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf[i]) * multiplicador;
        multiplicador--;
    }

    let resto = soma % 11;
    let primeiroDigito = resto < 2 ? 0 : 11 - resto;

    // Calcula o segundo dígito verificador
    soma = 0;
    multiplicador = 11;

    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf[i]) * multiplicador;
        multiplicador--;
    }

    resto = soma % 11;
    let segundoDigito = resto < 2 ? 0 : 11 - resto;

    // Verifica se os dígitos calculados coincidem com os do CPF
    if (parseInt(cpf[9]) === primeiroDigito && parseInt(cpf[10]) === segundoDigito) {
        return true;
    }

    return false;
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
