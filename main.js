var CURRENT_MIN = 0
var CURRENT_MAX = 0

let curr_temp = document.querySelector('#currentTemperature')
      
async function loadTemperatureData() {
    try {
      const response = await fetch('data.json');
      const data = await response.json();
      let curr_temp = document.querySelector('#currentTemperature')
      curr_temp.textContent = data.currentTemperature
    } catch (error) {
      console.error('Ошибка:', error);
    }
  }

loadTemperatureData()
setInterval(loadTemperatureData, 5);

let max_temp = document.querySelector('#max-temperature')
max_temp.innerHTML = CURRENT_MAX

  let min_temp = document.querySelector('#min-temperature')
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

// проверка значений curr min curr max