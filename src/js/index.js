//
// import './css/reset.css';
// import './css/animate.css';
// import './css/bootstrap.css';
// import './css/main.css';
import modal from './module/modal';
import slider from './module/slider';
import forms from './module/forms';


window.addEventListener('DOMContentLoaded', ()=> {

		'use strict'
		console.log(12345)
		modal();
		slider('.feedback-slider', '.feedback-slider-item',
			0, 'horizontal', '.main-prev-btn', '.main-next-btn')
		slider('.main-slider', '.main-slider-item',
			0, 'vertical')
	  forms();
})