const t1 = document.querySelector(`#thumb1`)
const t2 = document.querySelector(`#thumb2`)
const t3 = document.querySelector(`#thumb3`)
const lg = document.querySelector(`#largeimg`)


// Call setLargeImgSrc with the url from this thumbnail <img> (event.target)
// Will receive a reference to a thumbnail <img>, set its value to the large <img>
const handleThumbClick = function(event) {
  const thumb = event.target
  const url = thumb.getAttribute(`src`)
  lg.setAttribute(`src`, url)

  // Same thing, but in one line
  // lg.setAttribute(`src`, event.target.getAttribute(`src`))
}

const doSomething = function() {
  console.log(`Something!!!!`)
}

// Add listeners to each thumbnail
t1.addEventListener(`click`, handleThumbClick)
t2.addEventListener(`click`, function(event) {
  doSomething()
  handleThumbClick(event)
})
t3.addEventListener(`click`, function(event) {
  handleThumbClick(event)
})
