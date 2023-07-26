const navMobile = document.querySelector(".navbar-mobile")
const navBtn = document.querySelector(".hamburger")
const errorText = document.querySelector(".errorMail")
const errorArea = document.querySelector(".errorArea")
const email = document.querySelector(".text")
const formBtn = document.querySelector(".contact__form-btnBox")
const textarea = document.querySelector(".textarea")
const footerYear = document.querySelector(".footeryear")
const allLinks = document.querySelectorAll(".navbar-mobile__link")

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

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

navBtn.addEventListener("click", handleNav)
handleCurrentYear()
