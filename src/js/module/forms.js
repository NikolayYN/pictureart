import {sentData} from '../server/requiers';
import shortString from '../additionalComponents/longString';


const forms = (state) => {
		const forms = document.querySelectorAll('form');
		const inputs = document.querySelectorAll('input');
		const inputImg = document.querySelectorAll('input[type="file"]')
		const message = {
				success: 'Данные отправлены',
				processing: 'Отправка данных',
				error: 'Ошибка в подклчючении к серверу',
				animationProcessing: `
		<div class="loader animated fadeInUp">
    <div class="block">
      <span style="--delay: 1; animation-delay:0.25s"></span>
      <span style="--delay: 2; animation-delay:0.30s"></span>
      <span style="--delay: 3; animation-delay:0.35s"></span>
      <span style="--delay: 4; animation-delay:0.40s"></span>
      <span style="--delay: 5; animation-delay:0.45s"></span>
      <span style="--delay: 6; animation-delay:0.50s"></span>
      <span style="--delay: 7; animation-delay:0.55s"></span>
      <span style="--delay: 8; animation-delay:0.60s"></span>
      <span style="--delay: 9; animation-delay:0.65s"></span>
      <span style="--delay: 10; animation-delay:0.70s"></span>
      <span style="--delay: 11; animation-delay:0.75s"></span>
      <span style="--delay: 12; animation-delay:0.80s"></span>
    </div>
  </div>
		`,
				blockComplete: `
		<div class="success animated fadeInUp">
      <div class="success-icon">
        <span></span>
      </div>
      <!-- /.block-success -->
      <div class="block-text">Успешно отправлено!</div>
      <!-- /.block-text -->
    </div>
		`
		}

		const path = {
				designer: 'assets/server.php',
				consultant: 'assets/question.php'
		}
		const clearInputs = () => {
				inputs.forEach(input => {
						//		input.setAttribute('autocomplete','off')
						input.value = '';
				});
		}
		//	clearInputs();
		inputImg.forEach(input => {
				input.addEventListener('input', (e) => {
						try {
								shortString(input)
						} catch (e) {
								console.log(e);
						}
				})
		})
		forms.forEach(form => {
				form.addEventListener('submit', (e) => {
						e.preventDefault();
						// block for messege
						const div = document.createElement('div');
						div.classList.add('status');
						div.innerHTML = message.animationProcessing;
						div.insertAdjacentText('afterend', `${message.processing}`)
						form.parentNode.appendChild(div);
						form.classList.add('animated', 'fadeOutUp');
						setTimeout(() => {
								form.style.display = 'none';
						}, 400)

						const formData = new FormData(form);
						let api;
						form.closest('.popup-design') || form.classList.contains('form-calc') ? api = path.designer :
							api = path.consultant;
						console.log(form.getAttribute('data-calc'))
						if (form.getAttribute('data-calc')) {
								for (let key in state) {
										formData.append(key, state[key])
								}
						}

						sentData(api, formData)
							.then(res => {
									console.log(res);
									div.innerHTML = message.blockComplete
									setTimeout(() => {
											div.remove()
									}, 2000)
							})
							.catch(() => {
									div.textContent = `${message.error}`;
									div.style.color = 'red'
							})
							.finally(() => {
									clearInputs()
									setTimeout(() => {
											div.remove()
											form.style.display = 'block';
											form.classList.remove('fadeOutUp');
											form.classList.add('fadeInUp');
									}, 2000)
							})
				})
		})
}
export default forms;