document.addEventListener('DOMContentLoaded', () => {
    
    // --- VALIDACIÓN DE LOGIN ---
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', (e) => {
        let valid = true;
        const user = document.getElementById('loginUser').value;
        const pass = document.getElementById('loginPass').value;

        // Validar que no esté vacío y no sean puros espacios
        if(user.trim() === '') {
            document.getElementById('errLoginUser').style.display = 'block';
            valid = false;
        } else {
            document.getElementById('errLoginUser').style.display = 'none';
        }

        if(pass.trim() === '') {
            document.getElementById('errLoginPass').style.display = 'block';
            valid = false;
        } else {
            document.getElementById('errLoginPass').style.display = 'none';
        }

        if(!valid) e.preventDefault(); // Evita el envío al servidor
    });

    // --- VALIDACIÓN DE REGISTRO ---
    const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', (e) => {
        let valid = true;

        // 1. Validar Usuario: Letras (en) y números, 3 a 10 caracteres
        const user = document.getElementById('regUser').value;
        const userRegex = /^[a-zA-Z0-9]{3,10}$/;
        if(!userRegex.test(user)) {
            document.getElementById('errRegUser').style.display = 'block';
            valid = false;
        } else {
            document.getElementById('errRegUser').style.display = 'none';
        }

        // 2. Validar Contraseña: (a-z, A-Z, 0-9, _), al menos 1 mayus, 1 minus, 1 num. 8-12 char.
        const pass = document.getElementById('regPass').value;
        const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9_]{8,12}$/;
        if(!passRegex.test(pass)) {
            document.getElementById('errRegPass').style.display = 'block';
            valid = false;
        } else {
            document.getElementById('errRegPass').style.display = 'none';
        }

        // 3. Confirmar contraseña
        const passConfirm = document.getElementById('regPassConfirm').value;
        if(pass !== passConfirm || passConfirm === '') {
            document.getElementById('errRegPassConfirm').style.display = 'block';
            valid = false;
        } else {
            document.getElementById('errRegPassConfirm').style.display = 'none';
        }

        // 4. Validar Email: TLD entre 2 y 4 caracteres
        const email = document.getElementById('regEmail').value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,4}$/;
        if(!emailRegex.test(email)) {
            document.getElementById('errRegEmail').style.display = 'block';
            valid = false;
        } else {
            document.getElementById('errRegEmail').style.display = 'none';
        }

        // 5. Validar Sexo
        const sex = document.getElementById('regSex').value;
        if(sex === '') {
            document.getElementById('errRegSex').style.display = 'block';
            valid = false;
        } else {
            document.getElementById('errRegSex').style.display = 'none';
        }

        // 6. Validar Fecha
        const date = document.getElementById('regDate').value;
        if(date === '' || isNaN(Date.parse(date))) {
            document.getElementById('errRegDate').style.display = 'block';
            valid = false;
        } else {
            document.getElementById('errRegDate').style.display = 'none';
        }

        if(!valid) {
            e.preventDefault(); // Detener el envío si hay errores
            alert("Por favor, revise los errores en el formulario.");
        } else {
            alert("Validación exitosa en el cliente. Enviando al servidor (Controlador)...");
        }
    });
});