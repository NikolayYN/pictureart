const accordion = (headers) => {
		const titles = document.querySelectorAll(headers);

		function addClasses(elem){
			titles.forEach(item =>{
					elem.classList.add('active');
					elem.nextElementSibling.classList.add('active-block');
			})
		}
		function removeClasses(elem){
				elem.classList.remove('active')
				elem.nextElementSibling.classList.remove('active-block');
		}
		titles.forEach(item => {
				item.classList.remove('active')
				item.nextElementSibling.classList.remove('active-block');
				item.addEventListener('click', function (e) {
						if (item.classList.contains('active')){
								removeClasses(this)
						}else{
								addClasses(this)
						}
				})
		})
}
export default accordion