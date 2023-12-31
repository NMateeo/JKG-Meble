const navMobile = document.querySelector(".navbar-mobile")
const navBtn = document.querySelector(".hamburger")
const footerYear = document.querySelector(".footeryear")
const allLinks = document.querySelectorAll(".navbar-mobile__link")
const beds = document.querySelectorAll(".beds")
const kitchenCorners = document.querySelectorAll(".kitchenCorners")
const corners = document.querySelectorAll(".corners")
const pouffe = document.querySelector(".pouffe")
const list = document.querySelector(".list")
const btnMon = document.querySelector(".monolith")
const btnInari = document.querySelector(".inari")
const btnSoft = document.querySelector(".soft")
const btnSoftTwo = document.querySelector(".softTwo")
const imgButtons = document.querySelector(".buttons")
const btnX = document.querySelector(".buttons__icon")
const monoImg = document.querySelector(".monolitImg")
const inariImg = document.querySelector(".inariImg")
const softImg = document.querySelector(".softImg")
const soft2Img = document.querySelector(".soft2Img")
const html = document.querySelector("html")
const itemPhoto = document.querySelector(".photo")
const imgContainer = document.querySelector(
	".arizona-container__box-img-items-slider"
)
const leftBtn = document.querySelector(".left")
const rightBtn = document.querySelector(".right")
const allItemsImages = imgContainer.querySelectorAll("img")
const hideArrows = document.querySelectorAll(".hide")
let transformNumber = 0
let carouselWidth = 85

const checkTextarea = () => {
	if (textarea.value === "") {
		errorArea.style.visibility = "visible"
	} else {
		errorArea.style.visibility = "hidden"
	}
}

const handleNav = () => {
	navBtn.classList.toggle("is-active")
	navMobile.classList.toggle("navbar-mobile--active")

	if (navMobile.classList.contains("navbar-mobile--active")) {
		document.getElementsByTagName("body")[0].style.overflow = "hidden"
	} else {
		document.getElementsByTagName("body")[0].style.overflow = "visible"
	}

	allLinks.forEach(links =>
		links.addEventListener("click", () => {
			navBtn.classList.remove("is-active")
			navMobile.classList.remove("navbar-mobile--active")
			document.getElementsByTagName("body")[0].style.overflow = "visible"
		})
	)
}

const zoomImg = e => {
	const x = e.clientX
	const y = e.clientY

	const imgX = itemPhoto.offsetLeft
	const imgY = itemPhoto.offsetTop

	const newX = (imgX - x) * -1
	const newY = (imgY - y) * -1

	itemPhoto.style.transformOrigin = `${newX}px ${newY}px`

	itemPhoto.classList.add("zoom-img")
}

const resetImg = () => {
	itemPhoto.classList.remove("zoom-img")
}

const showMon = () => {
	imgButtons.style.display = "flex"
	monoImg.style.display = "block"
	inariImg.style.display = "none"
	softImg.style.display = "none"
	soft2Img.style.display = "none"
	document.getElementsByTagName("body")[0].style.overflow = "hidden"
	html.style.scrollBehavior = "auto"
}
const showInari = () => {
	imgButtons.style.display = "flex"
	monoImg.style.display = "none"
	inariImg.style.display = "block"
	softImg.style.display = "none"
	soft2Img.style.display = "none"
	document.getElementsByTagName("body")[0].style.overflow = "hidden"
	html.style.scrollBehavior = "auto"
}
const showSoft = () => {
	imgButtons.style.display = "flex"
	monoImg.style.display = "none"
	inariImg.style.display = "none"
	softImg.style.display = "block"
	soft2Img.style.display = "none"
	document.getElementsByTagName("body")[0].style.overflow = "hidden"
	html.style.scrollBehavior = "auto"
}
const showSoft2 = () => {
	imgButtons.style.display = "flex"
	monoImg.style.display = "none"
	inariImg.style.display = "none"
	softImg.style.display = "none"
	soft2Img.style.display = "block"
	document.getElementsByTagName("body")[0].style.overflow = "hidden"
	html.style.scrollBehavior = "auto"
}

const removePicture = () => {
	imgButtons.style.display = "none"
	document.getElementsByTagName("body")[0].style.overflow = "visible"
}
const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

allItemsImages.forEach(img =>
	img.addEventListener("click", () => {
		itemPhoto.src = img.src
	})
)

const handleCarousel = () => {
	transformNumber++
	changeImage()
}

const changeImage = () => {
	if (window.matchMedia("(min-width: 529px)").matches) {
		carouselWidth = 90
		if (transformNumber === allItemsImages.length - 2) {
			transformNumber = 0
		} else if (transformNumber < 0) {
			transformNumber = allItemsImages.length - 2
		}

		imgContainer.style.transform = `translateX(${
			-transformNumber * carouselWidth
		}px)`
	} else if (window.matchMedia("(min-width: 360px)").matches) {
		carouselWidth = 85
		if (transformNumber === allItemsImages.length) {
			transformNumber = 0
		} else if (transformNumber < 0) {
			transformNumber = allItemsImages.length - 2
		}

		imgContainer.style.transform = `translateX(${
			-transformNumber * carouselWidth
		}px)`
	}
}

const sliderRight = () => {
	transformNumber++
	changeImage()
}

const sliderLeft = () => {
	transformNumber--
	changeImage()
}

navBtn.addEventListener("click", handleNav)
rightBtn.addEventListener("click", sliderRight)
leftBtn.addEventListener("click", sliderLeft)
handleCurrentYear()
btnMon.addEventListener("click", showMon)
btnInari.addEventListener("click", showInari)
btnSoft.addEventListener("click", showSoft)
btnSoftTwo.addEventListener("click", showSoft2)
btnX.addEventListener("click", removePicture)
itemPhoto.addEventListener("mousemove", zoomImg)
itemPhoto.addEventListener("mouseout", resetImg)
