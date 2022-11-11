// stop disapear search history box onclick
var searchHis = document.querySelector('.header__search-history');
searchHis.onmousedown = function(e) {
	e.preventDefault();
}

