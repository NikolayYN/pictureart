const accordion = (headers) => {
		const titles = document.querySelectorAll(headers);
	function hideALlBLocks(){
					titles.forEach(title => {
							title.classList.remove('active')
							title.nextElementSibling.classList.remove('active-block');
							title.nextElementSibling.style.maxHeight = '0px';
					})
	}
		titles.forEach(title => {
				title.addEventListener('click', function () {
						hideALlBLocks()
						title.classList.add('active')
						title.nextElementSibling.classList.add('active-block');
						if (this.classList.contains('active')) {
								this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
						} else {
								this.nextElementSibling.style.maxHeight = '0px';
						}
				})
		})
}
export default accordion