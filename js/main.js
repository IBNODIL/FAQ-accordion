let firstDialogOpening = document.getElementById('opening-part-1') 
let firstDialogOpenerIcon = document.getElementById('opener-icon-1') 
let firstDialogOpener = document.getElementById('opener-1')

let secondDialogOpening = document.getElementById('opening-part-2') 
let secondDialogOpenerIocn = document.getElementById('opener-icon-2') 
let secondDialogOpener = document.getElementById('opener-2') 

let thirdDialogOpening = document.getElementById('opening-part-3') 
let thirdDialogOpenerIcon = document.getElementById('opener-icon-3') 
let thirdDialogOpener = document.getElementById('opener-3') 

let fourthDialogOpening = document.getElementById('opening-part-4') 
let fourthDialogOpenerIcon = document.getElementById('opener-icon-4') 
let fourthDialogOpener = document.getElementById('opener-4') 

firstDialogOpener.addEventListener('click', () => {
  if(firstDialogOpenerIcon.getAttribute("src") == "./assets/images/icon-plus.svg"){
    firstDialogOpenerIcon.setAttribute("src", "./assets/images/icon-minus.svg")
    firstDialogOpening.classList.remove('hidden')
  } else {
    firstDialogOpenerIcon.setAttribute("src", "./assets/images/icon-plus.svg")
    firstDialogOpening.classList.add('hidden')
  }
})

secondDialogOpener.addEventListener('click', () => {
  if(secondDialogOpenerIocn.getAttribute("src") == "./assets/images/icon-plus.svg"){
    secondDialogOpenerIocn.setAttribute("src", "./assets/images/icon-minus.svg")
    secondDialogOpening.classList.remove('hidden')
  } else {
    secondDialogOpenerIocn.setAttribute("src", "./assets/images/icon-plus.svg")
    secondDialogOpening.classList.add('hidden')
  }
})

thirdDialogOpener.addEventListener('click', () => {
  if(thirdDialogOpenerIcon.getAttribute("src") == "./assets/images/icon-plus.svg"){
    thirdDialogOpenerIcon.setAttribute("src", "./assets/images/icon-minus.svg")
    thirdDialogOpening.classList.remove('hidden')
  } else {
    thirdDialogOpenerIcon.setAttribute("src", "./assets/images/icon-plus.svg")
    thirdDialogOpening.classList.add('hidden')
  }
})

fourthDialogOpener.addEventListener('click', () => {
  if(fourthDialogOpenerIcon.getAttribute("src") == "./assets/images/icon-plus.svg"){
    fourthDialogOpenerIcon.setAttribute("src", "./assets/images/icon-minus.svg")
    fourthDialogOpening.classList.remove('hidden')
  } else {
    fourthDialogOpenerIcon.setAttribute("src", "./assets/images/icon-plus.svg")
    fourthDialogOpening.classList.add('hidden')
  }
})