var CURRENT_MIN = 0
var CURRENT_MAX = 0

let max_temp = document.querySelector('.max_temp')
  max_temp.innerHTML = CURRENT_MAX

  let min_temp = document.querySelector('.min_temp')
    min_temp.innerHTML = CURRENT_MIN


document.querySelector('#increase-temperature-max').addEventListener('click', function() {
    CURRENT_MAX+=1
    max_temp.innerHTML = CURRENT_MAX
})

document.querySelector('#decrease-temperature-max').addEventListener('click', function() {
    CURRENT_MAX-=1
    max_temp.innerHTML = CURRENT_MAX
})

document.querySelector('#increase-temperature-min').addEventListener('click', function() {
    CURRENT_MIN+=1
    min_temp.innerHTML = CURRENT_MIN
})

document.querySelector('#decrease-temperature-min').addEventListener('click', function() {
    CURRENT_MIN-=1
    min_temp.innerHTML = CURRENT_MIN
})

// асинхронная функция крч