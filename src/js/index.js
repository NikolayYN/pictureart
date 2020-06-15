
import modal from './module/modal';
import slider from './module/slider';
import forms from './module/forms';
import mask from './module/maskInput';
import validMessage from './module/messegeinput';
import loadStyleBLocks from './module/loadStyleBLock';


window.addEventListener('DOMContentLoaded', ()=> {

		'use strict'
		console.log(12345)
		modal();
		slider('.feedback-slider', '.feedback-slider-item',
			0, 'horizontal', '.main-prev-btn', '.main-next-btn')
		slider('.main-slider', '.main-slider-item',
			0, 'vertical')
	  forms();
		mask('[name=phone]');
		validMessage('[name="message"]')
		loadStyleBLocks('.button-styles', '#styles .row')
})