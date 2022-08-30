const closeMap = document.querySelector('.btn-filter_reset')
const mapBlock = document.querySelector('.map')
const mapOpen = document.querySelector('.btn-open_map')

closeMap.addEventListener('click', ()=>{
    mapBlock.classList.add('map_close')
    closeMap.classList.add('btn-filter_reset_on')
    mapOpen.classList.remove('btn-open_map')
})

mapOpen.addEventListener('click', ()=>{
    mapBlock.classList.remove('map_close')
    closeMap.classList.remove('btn-filter_reset_on')
    mapOpen.classList.add('btn-open_map')
})