const shortString = (input) => {
		let dots;
		const arr = [...input.files].map(file => {
				return file.name.split('.');
		})
		dots = [...arr].map(file => {
				return file[0].length > 6 ? '...' : '.';
		})

		let a = [...arr].map((file, i) => {
				return `${file[0].slice(0, 6)}${dots[i]}${file[1]}<br>`
		})
		input.previousElementSibling.innerHTML += a.forEach(img => img)


}

export default shortString