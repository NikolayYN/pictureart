const calc = (sizeArt, materialArt, addService, promo, result, btn) => {
		const size = document.querySelector(sizeArt)
		const material = document.querySelector(materialArt)
		const service = document.querySelector(addService)
		const promocode = document.querySelector(promo)
		const resultOutput = document.querySelector(result)
		let total = 0;
		resultOutput.innerHTML = 0;
		function checkFilled(elem){
				elem.forEach(input =>{
						input.value === '' ? input.style.borderBottom = '2px solid red' :
						input.style.borderBottom = '2px solid green'
				})

		}
		function getSum() {
				resultOutput.textContent = ''
				if (size.value === '' || material.value === '') {
						resultOutput.textContent = 'Для расчета нужен материал холста и его размер'
				} else {
						let newTotal = (+size.value * +material.value) + +service.value;
						if (promocode.value === 'IWANTPOPART ') {
								Math.floor(newTotal *= 0.7);
						}
						total = +resultOutput.innerHTML
						const animateTotal = setInterval(function () {
								if (total < newTotal) {
										total += 5;
										resultOutput.innerHTML = total;
								} else if (total > newTotal) {
										total -= 5;
										resultOutput.innerHTML = total;
								} else {
										clearInterval(animateTotal)
								}
						}, 1)
				}

		}

		size.addEventListener('change', getSum)
		material.addEventListener('change', getSum)
		service.addEventListener('change', getSum)
		promocode.addEventListener('input', getSum)
}

export default calc