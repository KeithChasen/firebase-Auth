const postList = document.querySelector('.posts')

const setupGuides = data => {
    let html = '';
    data.forEach(doc => {
        const post = doc.data()
        const li = `
        <li>
           <div class="collapsible-header grey lighten-4">${post.title}</div>
           <div class="collapsible-body white">${post.content}</div>
        </li>
        `
        html += li
    })

    postList.innerHTML = html
}

document.addEventListener('DOMContentLoaded', function () {
    var modals = document.querySelectorAll('.modal')
    M.Modal.init(modals)

    var items = document.querySelectorAll('.collapsible')
    M.Collapsible.init(items)
})