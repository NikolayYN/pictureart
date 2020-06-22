const validMessage = (selector) =>{
		const inputsMessage = document.querySelectorAll(selector);

		inputsMessage.forEach(input =>{
				input.addEventListener('keypress', (e)=>{
						if(e.key.match(/[^а-яё 0-9]/ig)){
								e.preventDefault()
						}
				})
		})
}
export default validMessage;