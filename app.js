
const generator = () => {
	return new Promise((resolve,reject) => {
		fetch(`https://uselessfacts.jsph.pl/api/v2/facts/random?language=en`)
		.then((response) => response.json())
		.then((data) => resolve(data))
		.catch((error) => reject())
	})
}

const result = async () => {
	try{
		const finalData = await generator();
		// console.log(finalData);
		document.querySelector('#div1').innerHTML = finalData.text;
	}catch(err){
		console.log(err)
	}
}

result();

