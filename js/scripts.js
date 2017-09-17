var link = document.querySelector(".btn_up");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-feedback__close");
var mapOpen = document.querySelector(".features__map");
var mapClose = document.querySelector(".map-close");
var bigMap = document.querySelector(".modal-map");

link.addEventListener("click", function(evt){
	evt.preventDefault();
	popup.classList.add("modal-show");
});

mapOpen.addEventListener("click", function(evt){
	evt.preventDefault();
	bigMap.classList.add("modal-show");
});

close.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	bigMap.classList.remove("modal-show");
})

mapClose.addEventListener("click", function(evt) {
	evt.preventDefault();
	bigMap.classList.remove("modal-show");
})


window.addEventListener("keydown", function(event){
	if (event.keyCode === 27) {
		bigMap.classList.remove("modal-show");
	}
});

var map;

function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		center: {
			lat: 59.9392265,
			lng: 30.32917000
		},
		zoom: 16
	});
	var marker = new google.maps.Marker({
		position: {
			lat: 59.9385365,
			lng: 30.32291472
		},
		map: map,
		title: "Наш маркер: Дрель",
	});
}