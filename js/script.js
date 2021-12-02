const t1 = document.querySelector(`#thumb1`)
const t2 = document.querySelector(`#thumb2`)
const t3 = document.querySelector(`#thumb3`)
const lg = document.querySelector(`#largeimg`)

// Will receive a reference to a thumbnail <img>, set its value to the large <img>
const setLargeImgSrc = function(thumb) {
  const url = thumb.getAttribute(`src`)
  lg.setAttribute(`src`, url)
}

// Call setLargeImgSrc with the url from this thumbnail <img> (event.target)
const handleThumbClick = function(event) {
  setLargeImgSrc(event.target)
}

// Add listeners to each thumbnail
t1.addEventListener(`click`, handleThumbClick)
t2.addEventListener(`click`, handleThumbClick)
t3.addEventListener(`click`, handleThumbClick)