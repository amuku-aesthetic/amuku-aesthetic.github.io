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
		//document.getElementById("content").style.display = "block";
	});
});

// Set up the Products
fetch("images/products.json").then(response => response.text()).then(data => {
	productsObj = JSON.parse(data);
	addItemsToContainer(productsObj);
});
function handleResponsiveDisplay() {
	if (window.innerWidth <= 600) {
		var productDivs = document.querySelectorAll('.productouter');
		productDivs.forEach(function(productDiv) {
			var child = productDiv.querySelector('.product');
			if(child) {
				// Move child outside the productouter
				productDiv.parentNode.insertBefore(child, productDiv);
				// Now hide the parent
				productDiv.style.display = 'none';
			}
		});
	}
}
// Function to dynamically add products to the container
function addItemsToContainer(items) {
	const container = document.getElementById('about');
	let counter = 1;
	items.forEach(item => {
		const productHTML = `
	  <label>
		<div class="productouter">
		  <div class="product">
			<div id="slider${counter}" class="slider">
			  <div class="slides">
				${item.images.map(image => `
				  <div class="slide-container">
					<img src="${item.imageBase + image}" alt="${item.name} Slide">
				  </div>`).join('')}
			  </div>
			  <div class="navigation">
				<button id="prev">❮</button>
				<button id="next">❯</button>
			  </div>
			</div>
			<h2>${item.name}</h2>
			<p>${item.description}</p>
			<p>Price: ${item.price}</p>
			<p>Size: ${item.sizes}</p>
			<p>Material: ${item.material}</p>
			<p>Type: ${item.type}</p>
			<p>Sablon: ${item.sablon}</p>
			<center>
			  <div class="msgcontainer">
				<img src="images/whatsapp.png" style="width:10%">Send message to seller
				<input type="text" id="${item.name}msg" value="${item.message}">
				<input type="button" id="${item.name}btn" class="button" value="Send">
			  </div>
			</center>
		  </div>
		</div>
	  </label>`;

		container.insertAdjacentHTML('beforebegin', productHTML);
		counter++;
	});
	window.onload = window.onresize = function() {
		// Function to handle screen size changes
		handleResponsiveDisplay();
	};
	// set productouter display=none, if user load the page on smaller screen
	window.onload = function() {
		handleResponsiveDisplay();
	};
	handleResponsiveDisplay();
	for(let x = counter-1;x >= 1;x--) {
		initializeSlider(`slider${x}`);
	}
// Initialize each slider using their respective IDs
// initializeSlider('slider1');
// initializeSlider('slider2');
// initializeSlider('slider3');
}
// // Function to handle sending a message
// function sendMessage(productName) {
//   const messageInput = document.getElementById(`${productName}msg`);
//   const message = messageInput.value;
//   console.log(`Sending message: ${message} for product: ${productName}`);
//   // You can add your actual messaging logic here
// }
window.onload = window.onresize = function() {
  // Function to handle screen size changes
  handleResponsiveDisplay();
};
// set productouter display=none, if user load the page on smaller screen
window.onload = function() {
	handleResponsiveDisplay();
};
// Function for Send Message to Seller Button
document.addEventListener("click", function(event) {
	if(event.target.type == "button" && event.target.id.endsWith("btn")) {
		let targetname = event.target.id.substring(0,event.target.id.length-3);
		let textmsg = document.getElementById(`${targetname}msg`).value;
		let encodedmsg = encodeURIComponent(textmsg);
		window.location.href = "https://wa.me/+67074354867?text="+encodedmsg;
	}
});
// document.getElementById("julgabtn").addEventListener("click", function() {
// 	var textmsg = document.getElementById("julgamsg").value;
// 	var encodedmsg = encodeURIComponent(textmsg);
// 	window.location.href = "https://wa.me/+67074354867?text="+encodedmsg;
// });
// document.getElementById("manipuladorbtn").addEventListener("click", function() {
// 	var textmsg = document.getElementById("manipuladormsg").value;
// 	var encodedmsg = encodeURIComponent(textmsg);
// 	window.location.href = "https://wa.me/+67074354867?text="+encodedmsg;
// });
// document.getElementById("amukubtn").addEventListener("click", function() {
// 	var textmsg = document.getElementById("amukumsg").value;
// 	var encodedmsg = encodeURIComponent(textmsg);
// 	window.location.href = "https://wa.me/+67074354867?text="+encodedmsg;
// });

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
// initializeSlider('slider1');
// initializeSlider('slider2');
// initializeSlider('slider3');
// Add more sliders if needed

