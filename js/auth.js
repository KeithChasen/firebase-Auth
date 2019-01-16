//listen for auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
        //get data
        db.collection('posts').onSnapshot(response => {
            setupGuides(response.docs)
            setupUI(user)
        }).catch(error => {
            console.log(error)
        })
    } else {
        setupUI()
        setupGuides([])
    }
})

//create new post
const createForm = document.querySelector('#create-form')
createForm.addEventListener('submit', (e) => {
    e.preventDefault()

    db.collection('posts').add({
        title: createForm.title.value,
        content: createForm.content.value,
    }).then(() => {

    }).catch(error => {
        console.log(error.message)
    }).finally(() => {
        const modal = document.querySelector('#modal-create')
        M.Modal.getInstance(modal).close()
        createForm.reset()
    })
})

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
})

const loginForm = document.querySelector('#login-form')
loginForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = loginForm['login-email'].value
    const password = loginForm['login-password'].value

    auth.signInWithEmailAndPassword(email, password)
        .then(response => {
            const modal = document.querySelector('#modal-login')
            M.Modal.getInstance(modal).close()
            loginForm.reset()
        })
})