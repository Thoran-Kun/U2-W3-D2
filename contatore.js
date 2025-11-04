let seconds = parseInt(sessionStorage.getItem("counter")) || 0

const counterElement = document.getElementById("counter")
counterElement.textContent = seconds

// aggiorno ogni secondo
setInterval(() => {
  seconds++
  counterElement.textContent = seconds
  sessionStorage.setItem("counter", seconds)
}, 1000)
