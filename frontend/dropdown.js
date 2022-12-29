const optionMenu = document.querySelector('.select-menu');
const selectBtn = optionMenu.querySelector('.select-btn');
const options = optionMenu.querySelectorAll('.option');
const sBtn_text = optionMenu.querySelector('.sBtn-text');

const optionMenu1 = document.querySelector('.select-menu1');
const selectBtn1 = optionMenu1.querySelector('.select-btn1');
const options1 = optionMenu1.querySelectorAll('.option1');
const sBtn_text1 = optionMenu1.querySelector('.sBtn-text1');

selectBtn.addEventListener('click', () => optionMenu.classList.toggle('active'));

options.forEach(option => {
    option.addEventListener('click', () => {
        let selectedOption = option.querySelector('.option-text').innerText;
        sBtn_text.innerText = selectedOption;
        optionMenu.classList.remove('active')
    })
})

selectBtn1.addEventListener('click', () => optionMenu1.classList.toggle('active'));

options1.forEach(option1 => {
    option1.addEventListener('click', () => {
        let selectedOption = option1.querySelector('.option-text1').innerText;
        sBtn_text1.innerText = selectedOption;
        optionMenu1.classList.remove('active')
    })
})