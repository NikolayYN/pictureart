const shortString = (input) => {
		let dots;
		const arr = [...input.files].map(file => {
				return file.name.split('.');
		})
		dots = [...arr].map(file => {
				return file[0].length > 6 ? '...' : '.';
		})

		let a = [...arr].map((file, i) => {
				return `${file[0].slice(0, 6)}${dots[i]}${file[1]}`
		})
		const ul = document.createElement('ul')
		for (let i = 0; i<6; i++) {
				if(a[i]){
						ul.innerHTML += `<li>${a[i]}</li>`
				}

		}

		return ul

}

export default shortString