const btnFilter = document.querySelector('.btn-filter')
const popap = document.querySelector('.popap')


btnFilter.addEventListener('click', ()=>{
    popap.classList.toggle('popap-active')
    btnFilter.classList.toggle('btn-filter_active')
})