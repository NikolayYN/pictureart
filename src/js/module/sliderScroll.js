const smoothScroll = () => {
		const wrapperBlock = document.querySelectorAll('.burger-menu');
		const links = document.querySelectorAll('.burger-menu li a');
		const linkToUp = document.querySelector('.pageup');
		window.addEventListener('scroll', () => {
				if (window.pageYOffset >= document.documentElement.clientHeight) {
						linkToUp.style.opacity = '1'
						linkToUp.addEventListener('click', (e) => {
								console.log(e)
								scrollTo(e.target)
						})
				} else {
						linkToUp.style.opacity = '0'
				}
		})

		function scrollTo(target) {
				console.log(target);
				let path
				if(target.nodeName === 'A'){
						path = target.href.replace(/.*(#.*)/, '$1')
				} else {
				    path = target.baseURI.replace(/.*(#.*)/, '$1')
				}
				const coordinatesElement = document.querySelector(path).getBoundingClientRect().top
				const offsetYNow = window.pageYOffset;
				let start = null
				let speed = 0.3
				const move = now => {
						if (start === null) start = now
						let flag = true;
						const changeSpeed = setInterval(() => {
								speed -= 0.017
						}, 500)
						const progress = now - start
						if (!flag) {
								clearInterval(changeSpeed)
						}

						let position = coordinatesElement > 0 ? Math.min(offsetYNow + progress / speed, offsetYNow + coordinatesElement) :
							Math.max(offsetYNow - progress / speed, offsetYNow + coordinatesElement)
						window.scrollTo(0, position);
						if (position !== offsetYNow + coordinatesElement) {
								requestAnimationFrame(move)
						} else {
								flag = false;
								console.log(flag);
						}

				}
				requestAnimationFrame(move);

		}

		wrapperBlock.forEach(block => {
				block.addEventListener('click', e => {
						const target = e.target
						if (target && target.tagName === 'A') {
								e.preventDefault()
								console.log(e)
								scrollTo(target)
						}

				})
		})
}


export default smoothScroll