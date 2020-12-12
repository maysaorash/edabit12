function lonelyInteger(arr){
  return arr.filter( x => !arr.includes(-x)).pop();
}

const lonelyInteger = arr => {
	for (let i of arr) {
		if (!arr.includes(-i)) {
			return i;
		}
	}
}

lonelyInteger = arr => arr.find(x => !arr.includes(-x));

function lonelyInteger(arr) {
	let array=[];
	for(let i=0; i<arr.length; i++){
		if(!arr.includes(-1*arr[i])) return arr[i];
	}
}

function lonelyInteger(arr) {
	for (let i of arr)
		if (!arr.includes(-i))
		  	return i;
}

function numberSyllables(word) {
	return word.split('-').length;
}

function randomInt(a, b) {
	 a = Math.ceil(a);
  b = Math.floor(b);
  return Math.floor(Math.random() * (b - a + 1) + a);
}

function randomInt(a, b) {
 a = Math.ceil(a);
  b = Math.floor(b);
  return Math.floor(Math.random() * (b - a) + a);
}

function randomInt(a,b){
	 return Math.floor(Math.random() * (b - a) ) + a
}

function randomInt(a,b){
	let min = Math.ceil(a);
  let max = Math.floor(b);
  return Math.floor(Math.random() * (max - min) + min);
}

const randomInt = (a, b) => ~~(Math.random() * (b - a) + a);

function area(h, w) {
return h>0&&w>0?h*w:-1;
}

function area(h, w) {
	if(h <=0 || w <= 0) {
		return -1;
	}
	return h * w;
}

const area = (h, w) => h > 0 && w > 0 ? h * w : -1;


function radiansToDegrees(rad) {
	return rad*57.29577951308232;
}

const radiansToDegrees = r => r * 180/Math.PI;

function radiansToDegrees(rad){
	return (rad * 180) / Math.PI
}

function valueAt(arr, i) {
	return arr[Math.floor(i)]
}

const valueAt = (arr,i) => arr[~~i];

function isSafeBridge(str) {
	if (str.includes(" ")){
		return false;
	}else{
		return true;
	}
}

function isSafeBridge(str){
	return str.includes(' ') ? false : true;
}

function isSafeBridge(s){
	return !s.includes(' ')
}

function hammingDistance(str1, str2) {
	let a = 0
	let amount = 0
	for(let a=0; a<str1.length; a++){
	if(str1[a]!==str2[a]){
		amount += 1;
}
	}
	return amount;
}

const hammingDistance = (a, b) =>
	[...a].filter((x, i) => x != b[i]).length;

	function hammingDistance(str1, str2) {
	let count = 0;
	for (i in str1) {
		if (str1[i] !== str2[i]) {
			count += 1;
		}
	}
	return count;
}

function hammingDistance(str1, str2) {
	count = 0
	for (let i = 0; i < str1.length; i++) {
		if (str1[i] != str2[i]) {
			count ++;
		}
	}
	return count;
}