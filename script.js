const btn = document.querySelector('.about-button');
const aboutContainer = document.querySelector('.card-container');
const exit = document.querySelector('.exit');
const toggleNav = document.querySelector('.toggle');
const navList = document.querySelector('.list');
const links = document.querySelectorAll('a')
const form = document.querySelector('form');
const nameInput = document.querySelector('.name-input');
const emailInput = document.querySelector('.email-input');
const formButton = document.querySelector('.form-button');
const nameError = document.querySelector('.error-name');
const emailError = document.querySelector('.error-email');
const formMessage = document.querySelector('.form-message')



// form control
form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    //email validation regular expression
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    // check if error is === true prior to submitting form message
    let error = false;
    const name = nameInput.value;
    const email = emailInput.value;

    // check errors for name input
    if(name === '') {
        console.log('cannot be empty');
        nameError.innerHTML = 'Oops, please enter your name..'
        error = true
    }

    // check errors for email input
    if(emailRegex.test(email)) {
        console.log('success');
    } else {
        console.log('error');
        emailError.innerHTML = 'Oops, invalid email..'
        error = true
    }

    // check errors for form to display formMessage
    if(error === false) {
        formMessage.innerHTML = 'Thanks for reaching out. I\'ll be in touch ASAP!';     
    } else {
        console.log('errors === true');
    }

})

// ---------TOGGLE STATES-------------//

//toggle btn to show about info
btn.addEventListener('click', (e) => {
    console.log(e.target);
    aboutContainer.classList.toggle('active');
})
// toggle exit icon to close the about info
exit.addEventListener('click', (e) => {
    aboutContainer.classList.toggle('active');
})

// Toggle nav menu at smaller screen sizes
toggleNav.addEventListener('click', () => {
    navList.classList.toggle('active');    
})

//close navList when an anchor tag is clicked
links.forEach(element => {
    element.addEventListener('click', () => {
        navList.classList.toggle('active');
    })        
});


// TODO: blur background when about info container is toggled


// Blob animation //
const tween = KUTE.fromTo(
    '#blob-1', 
    { path: '#blob-1' }, 
    { path: '#blob-2' },
    { repeat: 999, duration: 3000, yoyo: true}
    )
    .start();