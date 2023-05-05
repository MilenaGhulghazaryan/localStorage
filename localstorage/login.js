let btn1 = document.getElementById('btn1')
const loginEmail = document.getElementById('email');
const loginPassword = document.getElementById('password');
btn1.onclick = () => {
    const allStoredUsers = JSON.parse(localStorage.getItem('users'))
    const matchedUser = allStoredUsers.filter(user => {
        return loginEmail.value === user.email && loginPassword.value === user.password;
    })
    if (matchedUser.length > 0) {
        alert('Login successful')
    } else {
        alert('Wrong data')
    }
}

