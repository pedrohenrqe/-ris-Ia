function validateLogin() {
    const email = document.getElementById('email-input').value;
    const password = document.getElementById('password-input').value;
    
    // Adicione aqui a lógica de validação do login
    console.log('Email:', email);
    console.log('Senha:', password);
    
    // Exemplo simples de validação
    if (email && password) {
        alert('Login bem-sucedido!');
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}
