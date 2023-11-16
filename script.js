function validarCadastro() {
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const genero = document.getElementById('genero').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmpassword').value;

    if (email && username && genero && password && confirmPassword) {
        if (password === confirmPassword) {
            alert('Cadastro realizado!');
            window.location.href = 'frontPage.html';
        } else {
            alert('As senhas não coincidem.');
        }
    } else {
        alert('Preencha todos os campos.');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const modoNoturnoSalvo = localStorage.getItem('modoNoturno');
    
    if (modoNoturnoSalvo === 'ativo') {
        ativarModoNoturno();
    }
});

function alternarModoNoturno() {
    const corpo = document.body;
    const modoNoturnoAtivo = corpo.classList.toggle('modo-noturno');
    
    
    if (modoNoturnoAtivo) {
        localStorage.setItem('modoNoturno', 'ativo');
    } else {
        localStorage.setItem('modoNoturno', 'inativo');
    }
}

function ativarModoNoturno() {
    document.body.classList.add('modo-noturno');
}

function desativarModoNoturno() {
    document.body.classList.remove('modo-noturno');
}