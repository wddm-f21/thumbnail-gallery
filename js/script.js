const t1 = document.querySelector(`#thumb1`)
const t2 = document.querySelector(`#thumb2`)
const t3 = document.querySelector(`#thumb3`)
const lg = document.querySelector(`#largeimg`)

const setLargeImgSrc = function(thumb) {
  const url = thumb.getAttribute(`src`)
  lg.setAttribute(`src`, url)
}


t1.addEventListener(`click`, function() {
  setLargeImgSrc(t1)
})

t2.addEventListener(`click`, function() {
  setLargeImgSrc(t2)
})

t3.addEventListener(`click`, function() {
  setLargeImgSrc(t3)
})