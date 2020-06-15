const sentData = async (url, body) => {
		let server = await fetch(url, {
				method: 'POST',
				body: body,
		})
		return await server.text();
}

const getData = async (url) => {
		let server = await fetch(url)

		if(!server.ok){
				throw new Error(`could nor fetch ${url}`)
		}
		return await server.json();
}
export {sentData,getData}