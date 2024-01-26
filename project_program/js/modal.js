

const modal = document.querySelector('.modal')
const modalTriggerButton = document.querySelector('#btn-get')
const modalCloseButton = document.querySelector('.modal_close')

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}

setTimeout(() => {
    openModal()
},10000)

const closeModel = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
    localStorage.setItem('modalShown', 'true');
}


modalTriggerButton.onclick = () => openModal()
modalCloseButton.onclick = () => closeModel()
modal.onclick = (event) => {
    if (event.target === modal) {
        closeModel()
    }
}

const scrollHandler = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        openModal()
        removeEventListener('scroll', scrollHandler)
    }
}

window.addEventListener('scroll', scrollHandler)

const formElement = document.querySelector('form')

const postData = (url, data) => {
    return fetch(url, {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: data
    })
}

const bindPostData = (form) => {
    form.onsubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(form)
        const user = {}
        formData.forEach((item, index) => user[index] = item)
        const jsonUser = JSON.stringify(user)
        if (window.location.pathname === '/project/index/html') {
            postData('server.php', jsonUser)
        }else {
            postData('../server.php', jsonUser)
        }
    }
}

bindPostData(formElement)