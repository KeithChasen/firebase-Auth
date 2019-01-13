const signupForm = document.querySelector('#signup-form')
signupForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = signupForm['signup-email'].value
    const password = signupForm['signup-password'].value

    auth.createUserWithEmailAndPassword(email, password)
        .then(response => {
            const modal = document.querySelector('#modal-signup')
            M.Modal.getInstance(modal).close()
            signupForm.reset()
        })
})

const logout = document.querySelector('#logout')
logout.addEventListener('click', (e) => {
    e.preventDefault()
    auth.signOut()
        .then(() => {
            console.log("User's logged out")
        })
})