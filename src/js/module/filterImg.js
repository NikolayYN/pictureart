const filter = () => {
		const tabBlock = document.querySelector('.portfolio-menu');
		const tabs = tabBlock.querySelectorAll('li');
		function showArt(classToShow){
				const wrapperBlock = document.querySelector('.portfolio-wrapper')
				const Arts = document.querySelectorAll('.portfolio-block')
				const outputText = document.querySelector('.portfolio-no');
				Arts.forEach(art =>{
						art.classList.remove('animated', 'fadeIn')
						art.style.display = 'none';
						outputText.style.display = 'none'
						if(art.classList.contains(classToShow)) {
								art.classList.add('animated', 'fadeIn')
								art.style.display = 'block';
						}else {
								outputText.style.display = 'inline-block'
						}
				})

		}
		tabBlock.addEventListener('click', (evt) => {
				const target = evt.target
				if (target && target.tagName === 'LI') {
						tabs.forEach(tab =>{
								tab.classList.remove('active')
								target.classList.add('active');
								showArt(target.classList[0])
						})
				}
		})
}
export default filter