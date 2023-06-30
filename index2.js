
// ---------------  Active Item -----------------//

//SIDE BAR
const menuItems = document.querySelectorAll(".menu-item");

//remove active class from all menu items whe one is clicked
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {  // for each loop
    item.addEventListener('click', () => {   //on click 
        changeActiveItem(); //when one is clicled, this function is called
        item.classList.add('active');
    })
})

//-----------------Active Items------------------------//



