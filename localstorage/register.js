let btnSignUp = document.getElementById('btn-signUp')
const regName = document.getElementById('regName');
const regLastname = document.getElementById('regLastname');
const regEmail = document.getElementById('regEmail');
const regPassword = document.getElementById('regPassword');
btnSignUp.onclick = () => {
        const newUser = {
        username: regName.value,
        lastname: regLastname.value,
        email: regEmail.value,
        password: regPassword.value
    }

    let data = []
    data = JSON.parse(localStorage.getItem('users')) || []
    data.push(newUser)
    localStorage.setItem('users', JSON.stringify(data))
}