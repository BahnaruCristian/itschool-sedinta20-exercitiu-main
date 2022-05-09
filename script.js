console.log('.JS is functional and linked!');
let showMenu = document.querySelector('.menu-icon');
console.log(showMenu);
function handleDDMenu (){
    let dropDownList = document.querySelector('.show-dropdown');
    let dropDownListStyle = window.getComputedStyle(dropDownList);
    let dropdownVisibility =  dropDownListStyle.getPropertyValue("visibility"); 
    if (dropdownVisibility === 'visible'){
        dropDownList.style.visibility = "hidden";
    } else{
        dropDownList.style.visibility = "visible";
    }
    
    };
    showMenu.addEventListener('click', handleDDMenu );