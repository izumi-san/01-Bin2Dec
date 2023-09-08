function isBinary(str) {
	const regex = /^[01]+$/;
	return regex.test(str);
}

function getBinValue() {
	const value = document.querySelector("#inputBin").value;
	
	if(!isBinary(value)){
		return alert('Insira um número Binário, pfvr!');
	}

	return value;
}


function convertBinToDec() {
	const binValue = getBinValue();

	let sum = 0;
	binValue.split('').reverse().forEach((e,index)=>{
		sum += parseInt(e)*(2**index);
		console.log(e, sum);
	});

	document.querySelector("#inputDec").value = sum;
}
