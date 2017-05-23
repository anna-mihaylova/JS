function theMostCommonCharacterInArray(arr) {
	let counter = 0;
	let maxElement = 0;
	let currentElement = 0;
	let result = 0;

	for(let i = 0; i < arr.length; i++){
		let firstChar = arr[i];

		for(let j = 0; j < arr.length; j++){
			if(firstChar == arr[j]){
				counter++;
			}
		}

		if(counter > maxElement) {
			maxElement = counter;
			currentElement = arr[i];
		}
		counter = 0;
	}
	return result = currentElement + "("+maxElement + " " + "times"  + ")";
}
