const hoverArt = (block) => {
		const blockArt = document.querySelectorAll(block)
		const addImg = (target) => {
				const img = target.querySelector('img');
				img.src = img.src.replace(/.png/, '-1.png')
				target.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
						p.style.display = 'none';
				})
		}
		const removeImg = (target) => {
				const img = target.querySelector('img');
				img.src = img.src.replace(/-1.png/, '.png')
				console.log(img.src);
				target.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
						p.style.display = 'block';
				})
		}
		blockArt.forEach(block => {
				block.addEventListener('mouseover', (e) => {
						addImg(block);
				})
				block.addEventListener('mouseout', (e) => {
						removeImg(block);
				})
		})
}
export default hoverArt