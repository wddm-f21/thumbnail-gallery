const t1 = document.querySelector(`#thumb1`)
const t2 = document.querySelector(`#thumb2`)
const t3 = document.querySelector(`#thumb3`)
const lg = document.querySelector(`#largeimg`)

t1.addEventListener(`click`, function() {
  const url = t1.getAttribute(`src`)
  lg.setAttribute(`src`, url)
})

t2.addEventListener(`click`, function() {
  const url = t2.getAttribute(`src`)
  lg.setAttribute(`src`, url)
})

t3.addEventListener(`click`, function() {
  const url = t3.getAttribute(`src`)
  lg.setAttribute(`src`, url)
})