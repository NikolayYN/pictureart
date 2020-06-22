const burger = (btn, menu) =>{
		const btnBurger  = document.querySelector(btn),
			menuBlock = document.querySelector(menu)

		menuBlock.style.display= 'none';
		btnBurger.addEventListener('click', (e)=>{
				if (menuBlock.style.display === 'none' && window.screen.availWidth <= 992) {
						menuBlock.style.display= 'block';
				}else{
						menuBlock.style.display= 'none';
				}
		})
	window.addEventListener('resize', ()=>{
			if (window.screen.availWidth > 992){
					menuBlock.style.display= 'none';
			}
	})
}

export default burger