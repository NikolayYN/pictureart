import shortString from '../additionalComponents/longString';


const dragDrop = () => {
		const inputs = document.querySelectorAll('[name="upload"]');

		['drop', 'dragover', 'dragleave', 'dragenter'].forEach(event => {
				inputs.forEach(input => {
						input.addEventListener(event, preventDefault, false);
				})
		})

		function preventDefault(e) {
				e.preventDefault()
				e.stopPropagation();
		}

		function stylesOnDrag(input) {
				input.closest('.file_upload').style.background = '#8c6464'
				input.closest('.file_upload').style.border = '3px dashed ##ab25b4'
		}

		function stylesOnDrop(input) {
				if (input.closest('.form-calc')) {
						input.closest('.file_upload').style.background = '#fff'
						input.closest('.file_upload').style.border = 'none'
				} else {
						input.closest('.file_upload').style.background = '#ededed'
						input.closest('.file_upload').style.border = 'none'
				}

		}

		['dragover', 'dragenter'].forEach(event => {
				inputs.forEach(input => {
						input.addEventListener(event, () => stylesOnDrag(input), false)
				})
		});
		['drop', 'dragleave'].forEach(event => {
				inputs.forEach(input => {
						input.addEventListener(event, () => {
								stylesOnDrop(input)
						}, false)
				})
		});
		inputs.forEach(input => {
				input.addEventListener('drop', (e) => {
						input.files = e.dataTransfer.files
						shortString(input)
				})
		})
}
export default dragDrop;