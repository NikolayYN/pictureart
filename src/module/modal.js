const modal = () => {
		let flagClickPopup = false;

		// eslint-disable-next-line max-len
		function openPopup(triggerSelector, modalSelector, closeSelector, destroyTarget = false) {
				const trigger = document.querySelectorAll(triggerSelector) || false;
				const modal = document.querySelector(modalSelector);
				const close = document.querySelector(closeSelector);
				const overlayPopup = document.querySelectorAll('[data-modal]');
				const widthScroll = fillOverflow();
				trigger.forEach(link => {
						link.addEventListener('click', (e) => {
								overlayPopup.forEach(popup => {
										popup.style.display = 'none';
								});
								if (e.target) {
										e.preventDefault();
										flagClickPopup = true;
										modal.style.display = 'block';
										document.body.style.overflow = 'hidden';
										document.body.style.marginRight = widthScroll + 'px';
										if (destroyTarget) {
												link.remove();
										}
								}
						});
				});

				modal.addEventListener('click', (e) => {
						if (e.target === modal) {
								overlayPopup.forEach(popup => {
										popup.style.display = 'none';
										document.body.style.overflow = ''
										document.body.style.marginRight = '0';
								});
						}
				})
				close.addEventListener('click', (e) => {
						overlayPopup.forEach(popup => {
								popup.style.display = 'none';
								document.body.style.overflow = ''
								document.body.style.marginRight = '0';
						});
				})
		}

		function showPopupTime(selector, time) {
				setTimeout(() => {
						let perlHarbor;
						const modals = document.querySelectorAll('[data-modal]');
						modals.forEach(modal => {
								if (getComputedStyle(modal).display !== 'none') {
										perlHarbor = 'block';
								}
						})
						if (!perlHarbor) {
								const widthScroll = fillOverflow();
								document.querySelector(selector).style.display = 'block';
								document.body.style.overflow = 'hidden';
								document.body.style.marginRight = widthScroll + 'px';
						}
				}, time);
		}

		function scrollBottom(modalSelect) {
				document.addEventListener('scroll', (e) => {
						const heightScreen = document.documentElement.clientHeight;
						const heightPage = document.documentElement.scrollHeight
						const offsetTop = window.pageYOffset;
						if (heightPage <= (offsetTop + heightScreen) && !flagClickPopup) {
								document.querySelector(modalSelect).click();
						}
				})
		}

		scrollBottom('.fixed-gift');

		function fillOverflow() {
				const div = document.createElement('div');
				div.style.width = '50px';
				div.style.height = '50px';
				div.style.overflow = 'scroll';
				div.style.visibility = 'hidden';
				document.body.appendChild(div);
				const widthScroll = div.offsetWidth - div.clientWidth;
				div.remove();
				return widthScroll;
		}

		showPopupTime('.popup-consultation', 60000)
		openPopup('.button-design', '.popup-design',
			'.popup-design .popup-close');
		openPopup('.button-consultation', '.popup-consultation',
			'.popup-consultation .popup-close');
		openPopup('.fixed-gift', '.popup-gift',
			'.popup-gift .popup-close', true);
}
export default modal;