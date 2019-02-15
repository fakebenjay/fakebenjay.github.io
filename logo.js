document.addEventListener("DOMContentLoaded", function (event) {
	var index = parseInt(Math.random() * 12 + 1)
	var node = document.querySelector('img#logo')
	node.src = "name-logos/name" + index + ".png"
})