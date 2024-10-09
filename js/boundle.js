document.addEventListener('DOMContentLoaded', function () {
	// Инициализация Swiper
	var swiper = new Swiper('.swiper', {
		 slidesPerView: 'auto',
		 spaceBetween: 16,
		 pagination: {
			  el: '.swiper-pagination',
			  clickable: true,
		 },
		 breakpoints: {
			  768: {
					slidesPerView: 3,
					spaceBetween: 24
			  }
		 }
	});

	// Функционал кнопки "Показать все"
	var showMoreButton = document.querySelector('.show-more-button');
	var brandListContainer = document.querySelector('.brand-list-container');
	var isOpened = false; // Флаг для отслеживания состояния

	showMoreButton.addEventListener('click', function () {
		 if (isOpened) {
			  brandListContainer.classList.remove('brand-list-container--opened');
			  showMoreButton.querySelector('.show-more-button__text').textContent = 'Показать все';
			  isOpened = false;
		 } else {
			  brandListContainer.classList.add('brand-list-container--opened');
			  showMoreButton.querySelector('.show-more-button__text').textContent = 'Скрыть';
			  isOpened = true;
		 }
	});
});
