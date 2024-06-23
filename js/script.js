document.addEventListener("DOMContentLoaded", function() {
	var loadingBar = document.getElementById("loadingBar");

	// Simulate loading progress
	var progress = 0;
	var interval = setInterval(function() {
		progress += 1;
		loadingBar.style.width = progress + '%';

		if (progress >= 100) {
			clearInterval(interval);
		}
	}, 500); // Adjust the interval time as needed

	// Hide loading bar and show content when everything is loaded
	window.addEventListener('load', function() {
		document.getElementById("loadingOverlay").style.display = "none";
		document.getElementById("content").style.display = "block";
	});
});
// Function for Send Message to Seller Button
document.getElementById("julgabtn").addEventListener("click", function() {
	var textmsg = document.getElementById("julgamsg").value;
	var encodedmsg = encodeURIComponent(textmsg);
	window.location.href = "https://wa.me/+67074354867?text="+encodedmsg;
});
document.getElementById("manipuladorbtn").addEventListener("click", function() {
	var textmsg = document.getElementById("manipuladormsg").value;
	var encodedmsg = encodeURIComponent(textmsg);
	window.location.href = "https://wa.me/+67074354867?text="+encodedmsg;
});
document.getElementById("amukubtn").addEventListener("click", function() {
	var textmsg = document.getElementById("amukumsg").value;
	var encodedmsg = encodeURIComponent(textmsg);
	window.location.href = "https://wa.me/+67074354867?text="+encodedmsg;
});
// Function to initialize a slider given its container ID
function initializeSlider(containerId) {
	const slider = document.getElementById(containerId);
	const slides = slider.querySelector('.slides');
	const slideContainers = slider.querySelectorAll('.slide-container');
	const prevButton = slider.querySelector('#prev');
	const nextButton = slider.querySelector('#next');

	let index = 0;
	const totalSlides = slideContainers.length;

	function showSlide(i) {
		index = (i + totalSlides) % totalSlides;
		slides.style.transform = `translateX(${-index * 100}%)`;
	}

	prevButton.addEventListener('click', () => showSlide(index - 1));
	nextButton.addEventListener('click', () => showSlide(index + 1));

	// Optional: Auto slide
	setInterval(() => showSlide(index + 1), 8000);
}

// Initialize each slider using their respective IDs
initializeSlider('slider1');
initializeSlider('slider2');
initializeSlider('slider3');
// Add more sliders if needed

