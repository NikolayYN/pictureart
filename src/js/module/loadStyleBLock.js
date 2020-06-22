import {getData} from '../server/requiers';


const loadStyleBLocks = (trigger, wrapper) =>{
		const btnLoadBlocks = document.querySelector(trigger);

		btnLoadBlocks.addEventListener('click', function (e){
			getData('assets/db.json')
					.then(res => createBLock(res.styles))
					.catch()
					.finally(()=>{
							this.style.display = 'none';
					})
})
	function createBLock(response) {
			response.forEach(item =>{
					const div = document.createElement('div');
					div.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1' )
					div.innerHTML = `
					<div class=styles-block>
							<img src= ${item.src} alt>
							<h4>${item.title}</h4>
							<a href="${item.link}">Подробнее</a>
							</div>
					`
					document.querySelector(wrapper).appendChild(div)
			})

	}

}

export default loadStyleBLocks;