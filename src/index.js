import './css/animate.css';
import './css/bootstrap.css';
import './css/reset.css';
import './css/main.css';
import modal from '@/module/modal';
import slider from '@/module/slider';


window.addEventListener('DOMContentLoaded', ()=> {
		'use strict'
		modal();
		slider('.feedback-slider', '.feedback-slider-item',
			0, 'horizontal', '.main-prev-btn', '.main-next-btn')
		slider('.main-slider', '.main-slider-item',
			0, 'vertical');
})