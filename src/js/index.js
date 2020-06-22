import modal from './module/modal';
import slider from './module/slider';
import forms from './module/forms';
import mask from './module/maskInput';
import validMessage from './module/messegeinput';
import loadStyleBLocks from './module/loadStyleBLock';
import calc from './module/calc';
import filter from './module/filterImg';
import hoverArt from './module/hoverArt';
import accordion from './module/accordion';
import burger from './module/burgerMenu';
import smoothScroll from './module/sliderScroll';
import dragDrop from './module/dragDrop';


window.addEventListener('DOMContentLoaded', () => {
		'use strict'
		const calculateObject = {}
		smoothScroll()
		calc('#size', '#material', '#options', '.promocode', '.calc-price', calculateObject)
		modal();
		slider('.feedback-slider', '.feedback-slider-item',
			0, 'horizontal', '.main-prev-btn', '.main-next-btn')
		slider('.main-slider', '.main-slider-item',
			0, 'vertical')
		mask('[name=phone]');
		validMessage('[name="message"]')
		loadStyleBLocks('.button-styles', '#styles .row')
		forms(calculateObject);
		filter()
		hoverArt('.sizes-block')
		accordion('.accordion-heading')
		burger('.burger', '.burger-menu')
		dragDrop()
})

