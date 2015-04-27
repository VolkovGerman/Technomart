owl = $(".slides");
$(document).ready(function(){
	owl.owlCarousel({
		nav:true,
		items: 1,
		loop: true,
		dots: true});
});

var bigmap = document.getElementById('bigmap'),
	smallmap = document.getElementById('smallmap'),
	form = document.getElementById('write-to-us'),
	closeBtn = document.querySelector(".big-map-wrap .btn-close"),
	openFormBtn = document.getElementById('open-form'),
	tabsNav = document.querySelector(".tabs-nav");

smallmap.addEventListener("mouseover", function(){
	bigmap.style.display = "block";
});

closeBtn.addEventListener("click", function(event){
	event.preventDefault();
	bigmap.style.display = "none";
});

openFormBtn.addEventListener("click", function (event){
	event.preventDefault();
	form.style.display = "block";
});

document.querySelector(".mail .btn-close").addEventListener("click", function(event){
	event.preventDefault();
	form.style.display = "none";
});

var i = 0;
while (tabsNav.children[i]){
	tabsNav.children[i].children[0].addEventListener("click", function(event){
		event.preventDefault();

		var tabsNav = document.querySelector(".tabs-nav"),
			tabsBody = document.querySelector(".tabs-body");

		// Чистка классов active
		var i1 = 0;
		while (tabsNav.children[i1]){
			tabsNav.children[i1].classList.remove("active");
			tabsBody.children[i1].classList.remove("active");
			i1++;
		}

		// Добавляем active к нужным элементам
		this.parentNode.classList.add("active");

		// Узнаем номер элемента по списку
		i1 = 0;
		while (tabsNav.children[i1]){
			if (tabsNav.children[i1].classList.contains("active")) break;
			i1++;
		}

		// Добавляем к i-ому элементу класс active
		tabsBody.children[i1].classList.add("active");
	});
	i++;
};