/* start preloader */
var
	images = document.images,
	images_total_count = images.length,
	images_loaded_count = 0, /* количество загруженных изображений */
	preloader = document.getElementById('page-preloader'),
	pers_display = document.getElementById('load_perc');

/* проходим в цикле все изображения */
for( var i = 0; i < images_total_count; i++ ) {
	images_clone = new Image();
	images_clone.onload = image_loaded;
	images_clone.onerror = image_loaded;
	images_clone.src = images[i].src;
}

function image_loaded() {
	images_loaded_count++;
	pers_display.innerHTML = 'loading site ' + (( (100 / images_total_count) * images_loaded_count) << 0)  + '%';
	if (images_loaded_count >= images_total_count) {
		setTimeout(function () {
			if (!preloader.classList.contains('done')) /* если в preloader в его класс листе нет класса done,  */ {
				preloader.classList.add('done');/*то он добавляется  */
			}
		}, 2000);
	}
}

/* end preloader */









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
























$(document).ready(function () {
	$('.photo-sleder__inner').magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery: {
			enabled: true,
			arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>'
		}

	});
});










$('.video__thumb').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	centerMode: true,
	prevArrow: '<img class="slider-arrows slider-arrows__Left" src="images/arrows-left.svg" alt=""></img>', /*  стрелки  */
	nextArrow: '<img class="slider-arrows slider-arrows__Right" src="images/arrows-right.svg" alt=""></img>', /* слайдера */
	responsive: [
		{
			breakpoint: 650,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 360,
			settings: {
				slidesToShow: 1,
			}
		}
	]

});









/*  */

function video(e) {

	let vid = event.srcElement.currentSrc; /* получаю урл картинки */
	let arr = vid.split('/');/* разбиваю урл на состовляющие, разделитель / */
	/* console.log(arr[4]); это id видео*/
	let str_iframe = '<iframe src="https://www.youtube.com/embed/' + arr[4] + '?autoplay=0&loop=1&&playlist=Video_ID" </iframe>';
	document.getElementById('video__embed').innerHTML = str_iframe;
}




















