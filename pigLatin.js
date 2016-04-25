/* Author:Connor Reardon
Date:4/24/2016
Description:Convert word into piglatin. If the first letter of a word is a vowel, add "way" to the end and return it. If not, then get the consonant or the group of consonants and strip it from the beginning and add it to the end following with "ay" and return it. 
Input: linux
Output: inuxlay
*/

function pigLatin(str){
	var vowels = ["a","e","i","o","u"];
	if (vowels.indexOf(str[0]) >= 0)
		return str + "way";
	
	var indexes = [];
	for (var i = 0; i < str.length; i++) {
		if (vowels.indexOf(str[i]) >= 0) 
			indexes.push(i);
	}
	var first_index = indexes[0];
	var partOne = str.slice(0,first_index)
	var partTwo = str.slice(first_index)
	
	return partTwo + partOne + "ay" 
}
console.log(pigLatin("linux"))
