const  departmensBtn = document.querySelector(".departments-btn")
const dropdown = document.querySelector(".dropdown-departments")

departmensBtn.addEventListener("click", function () {
    
    dropdown.classList.toggle("active")
})
