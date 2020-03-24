var widthPhotoSleder = $('.photo-sleder').outerWidth(true);/* размер всего контейнера 
console.log('размер контейнера' + ' = ' + widthPhotoSleder);*/

var widthSlederImg = $('.sleder__img').outerWidth(true);/* размер контейнера с 1 фоткой 
console.log('размер фотки' + ' = ' + widthSlederImg);*/

var countPhoto = (parseInt(widthPhotoSleder / widthSlederImg));/* сколько всего в общий контейнер поместится фоток
console.log('кол-во ф в ряду' + ' = ' + countPhoto); */

var newWidthPhotoSleder__inner = widthSlederImg * countPhoto; /* новый размер контейнера с фотками 
console.log('новый размер контейнера' + ' = ' + newWidthPhotoSleder__inner); */

$(".photo-sleder__inner").width(newWidthPhotoSleder__inner);/* устанавливаю новый размер */



$(document).ready(function () {
	$('.photo-sleder__inner').masonry({
		/*  указываем элемент-контейнер в котором расположены блоки для динамической верстки */
		itemSelector: '.sleder__img',
		/*  указываем класс элемента являющегося блоком в нашей сетке */
		singleMode: true,
		/*  true - если у вас все блоки одинаковой ширины */
		isResizable: true,
		/*  перестраивает блоки при изменении размеров окна */
		isAnimated: true,
		/*  анимируем перестроение блоков */
		animationOptions: {
			queue: false,
			duration: 500
		}
		/*  опции анимации - очередь и продолжительность анимации */
	});

});








/*----------------------------------------------------------------------------------------------------------- */



$(window).bind("resize", function () { /* Подключам событие изменение размеров Окна */
	window_resize();/* /Вызываем функцию Обработки окна */
	return false
});

var resizeTimeoutId; /* Таймер задержки исполнения */

function window_resize() {
	clearTimeout(resizeTimeoutId); /* удаляем все предыдущие события Дребезга контактов */
	resizeTimeoutId = setTimeout('alert_And_ResizeCode();', 10);
}

function alert_And_ResizeCode() {


	$(document).ready(function () {
		$('.photo-sleder__inner').masonry({
			/*  указываем элемент-контейнер в котором расположены блоки для динамической верстки */
			itemSelector: '.sleder__img',
			/*  указываем класс элемента являющегося блоком в нашей сетке */
			singleMode: true,
			/*  true - если у вас все блоки одинаковой ширины */
			isResizable: true,
			/*  перестраивает блоки при изменении размеров окна */
			isAnimated: true,
			/*  анимируем перестроение блоков */
			animationOptions: {
				queue: false,
				duration: 500
			}
			/*  опции анимации - очередь и продолжительность анимации */
		});

	});
	var widthPhotoSleder = $('.photo-sleder').outerWidth(true);/* размер всего контейнера
	console.log('размер контейнера' + ' = ' + widthPhotoSleder); */

	var widthSlederImg = $('.sleder__img').outerWidth(true);/* размер контейнера с 1 фоткой 
	console.log('размер фотки' + ' = ' + widthSlederImg);*/

	var countPhoto = (parseInt(widthPhotoSleder / widthSlederImg));/* сколько всего в общий контейнер поместится фоток 
	console.log('кол-во ф в ряду' + ' = ' + countPhoto);*/

	var newWidthPhotoSleder__inner = widthSlederImg * countPhoto; /* новый размер контейнера с фотками 
	console.log('новый размер контейнера' + ' = ' + newWidthPhotoSleder__inner); */

	$(".photo-sleder__inner").width(newWidthPhotoSleder__inner);/* устанавливаю новый размер */
	/*console.log('Есть Cмена размера окна');Тут Обработка события*/

};
























$(document).ready(function() {
  $('.photo-sleder__inner').magnificPopup({
		delegate: 'a',
		type:'image',
		gallery:{
			enabled: true,
			arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>'
		}
		
	});
});









$('.video__player').slick({
  infinite: true,
	slidesToShow: 1,
	arrows: false,
	slidesToScroll: 1,
	
	asNavFor: '.video__thumb'

});

$('.video__thumb').slick({
  infinite: true,
  slidesToShow: 3,
	slidesToScroll: 1,
	centerMode: true,
	asNavFor: '.video__player',
	prevArrow: '<img class="slider-arrows slider-arrows__Left" src="images/arrows-left.svg" alt=""></img>', /*  стрелки  */
  nextArrow: '<img class="slider-arrows slider-arrows__Right" src="images/arrows-right.svg" alt=""></img>' /* слайдера */
	
});
/* $("[data-slick-index='1']").click(function() {
	$(".thumb").width(100 + 'px');
}); */
/* $( "#img" ).click(function() {

alert( $("#img").attr("src") );

}); */


/* var slickindex;
$('.slick-slide').click(function(){
	slickindex = $(this).attr("data-slick-index");
	$('.slick-slide').removeClass('slick-center');
	
	setTimeout(function () {
		$("[data-slick-index='1']").addClass('slick-current' + ' slick-active' + ' slick-center');
		}, 1000);

console.log(slickindex);

}); */
/* console.log( $(this).attr("data-slick-index")); */