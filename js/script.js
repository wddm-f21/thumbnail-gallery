const thumbs = document.querySelector(`.thumbs`)
const lg = document.querySelector(`#largeimg`)

// Call setLargeImgSrc with the url from this thumbnail <img> (event.target)
// Will receive a reference to a thumbnail <img>, set its value to the large <img>
const handleThumbClick = function(event) {
  const thumb = event.target
  console.log(thumb)

  // If what was clicked was not an image: exit immediately!
  if (!thumb.matches(`img`)) return

  const url = thumb.getAttribute(`src`)
  lg.setAttribute(`src`, url)
}

// Add listeners to each thumbnail
thumbs.addEventListener(`click`, handleThumbClick)

// NEXT: Event delegation (to make this EVEN MORE efficient)