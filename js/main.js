const navMobile = document.querySelector(".navbar-mobile")
const navBtn = document.querySelector(".hamburger")
const errorText = document.querySelector(".errorMail")
const errorArea = document.querySelector(".errorArea")
const email = document.querySelector(".text")
const formBtn = document.querySelector(".contact__form-btnBox")
const textarea = document.querySelector(".textarea")
const footerYear = document.querySelector('.footeryear');

const formFunction = () => {
	checkMail()
	checkTextarea()
	clearInputs()
}

const clearInputs = () => {}

const checkTextarea = () => {
	if (textarea.value === "") {
		errorArea.style.visibility = "visible"
	} else {
		errorArea.style.visibility = "hidden"
	}
}

const checkMail = () => {
	const re =
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	if (re.test(email.value)) {
		errorText.style.visibility = "hidden"
	} else if (email.value === "") {
		errorText.style.visibility = "visible"
	} else {
		errorText.style.visibility = "visible"
	}
}

const handleNav = () => {
	navBtn.classList.toggle("is-active")
	navMobile.classList.toggle("navbar-mobile--active")
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

formBtn.addEventListener("click", formFunction)
navBtn.addEventListener("click", handleNav)
handleCurrentYear()

// document.getElementsByTagName(handleNav)[0].style.overflow = 'hidden';