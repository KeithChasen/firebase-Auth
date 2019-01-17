const postList = document.querySelector('.posts')
const loggedOutLinks = document.querySelectorAll('.logged-out')
const loggedInLinks = document.querySelectorAll('.logged-in')
const accountDetails = document.querySelector('.account-details')

const setupUI = user => {
    if (user) {
        db.collection('users').doc(user.uid).get().then(doc => {
            accountDetails.innerHTML = `<div>Logged in as ${user.email}</div>
                                        <div>${doc.data().bio}</div>`
            loggedInLinks.forEach(item => item.style.display = 'block')
            loggedOutLinks.forEach(item => item.style.display = 'none')
        })
    } else {
        accountDetails.innerHTML = ''
        loggedOutLinks.forEach(item => item.style.display = 'block')
        loggedInLinks.forEach(item => item.style.display = 'none')
    }
}

const setupGuides = data => {

    if (data.length) {
        let html = '';
        data.forEach(doc => {
            const post = doc.data()
            html += `
                <li>
                   <div class="collapsible-header grey lighten-4">${post.title}</div>
                   <div class="collapsible-body white">${post.content}</div>
                </li>
                `
        })

        postList.innerHTML = html
    } else {
        postList.innerHTML = '<h5 class="center-align">Login to view posts</h5>'
    }


}

document.addEventListener('DOMContentLoaded', function () {
    var modals = document.querySelectorAll('.modal')
    M.Modal.init(modals)

    var items = document.querySelectorAll('.collapsible')
    M.Collapsible.init(items)
})