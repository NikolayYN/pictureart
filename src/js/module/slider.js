// eslint-disable-next-line max-len
function slider(sliderSelector, elementslider, showSlideIndex, dir, prevBtn, nextBtn) {
		const slider = document.querySelector(sliderSelector);
		const slides = document.querySelectorAll(elementslider);
		let pauseTimerSlider;
		let index = 1;

		function moveSlider(n) {
				if (n > slides.length) {
						index = 1;
				} else if (n < 1) {
						index = slides.length;
				}
				slides.forEach(slide => {
						slide.classList.add('animated');
						slide.style.display = 'none';
				})
				slides[index - 1].style.display = 'block';
		}

		moveSlider(index)

		function changeSlideIndex(n) {
				moveSlider(index += n);
		}
 try {
		const prev = document.querySelector(prevBtn);
		const next = document.querySelector(nextBtn);
		prev.addEventListener('click', () => {
				changeSlideIndex(-1);
				slides[index -1].classList.add('slideInLeft');
				slides[index - 1].classList.remove('slideInRight');
		})
		next.addEventListener('click', () =>{
				changeSlideIndex(1);
				slides[index - 1].classList.remove('slideInLeft');
				slides[index - 1].classList.add('slideInRight');
		})
} catch (e) {
				console.log(e)
		}
		function timeScrollSlide() {
				pauseTimerSlider = setInterval( function() {
						if (dir === 'vertical') {
								changeSlideIndex(-1);
								slides[index -1].classList.add('slideInDown');
						} else {
								changeSlideIndex(-1);
								slides[index -1].classList.add('slideInLeft');
								slides[index - 1].classList.remove('slideInRight');
						}
				}, 3000 )
		}
		timeScrollSlide();
		slider.addEventListener('mouseenter', (e)=> {
				if (e.target) {
						clearInterval(pauseTimerSlider);
				}
		})
		slider.addEventListener('mouseleave', (e)=> {
				if (e.target) {
						timeScrollSlide();
				}
		})
}

export default slider;