const mask = (select) => {

		// const setCursorPoint = (pos, elem) => {
		// 		elem.focus();
		// 		if (elem.setSelectionRange) {
		// 				elem.setSelectionRange(pos, pos);
		// 		} else if (elem.createTextRange) {
		// 				const range = elem.createTextRange();
		// 				range.collapse(true);
		// 				range.moveEnd('character', pos);
		// 				range.moveStart('character', pos);
		// 				range.select()
		// 		}
		// }
		function createMask(event) {
				let matrix = '+7 (___) ___ __ __';//матрица
				let i = 0;// счетчки для перебра this.value через charAt()
				let dev = matrix.replace(/\D/g, '');
				console.log('dev', dev);
				let value = this.value.replace(/\D/g, '');
				console.log(value.length);
				if (dev.length >= value.length) {
						value = dev;
				}
				this.value = matrix.replace(/./g, function (a) {
						//return /[_\d]/.test(a) && i < value.length ? value.charAt(i++) : i >= value.length ? '' : a;
						if (/[_\d]/.test(a) && i < value.length) {
								return value.charAt(i++)
						} else if (i >= value.length) {
								return ''
						} else {
								return a
						}
				})
				if (event.type === blur) {
						if (this.value.length === 2) {
								this.value = '';
						}
				}
				// else {
				//     setCursorPoint(this.value.length, this)
				// }
		}

		const inputs = document.querySelectorAll(select);
		inputs.forEach(input => {
				input.setAttribute('autocomplete', 'off')
				input.addEventListener('focus', createMask)
				input.addEventListener('input', createMask)
				input.addEventListener('blur', createMask)
		})
}
export default mask;