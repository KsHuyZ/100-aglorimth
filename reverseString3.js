var reverseWords = function (s) {
  let newString = "";
  for (let i = 0; i < s.split(" ").length; i++) {
    let character = s.split(" ")[i];
    let newCharacter = character.split("").reverse()
    for(let j = 0; j < newCharacter.length; j++) {
        
    }
  }
  return newString;
};
console.log(reverseWords("Let's take LeetCode contest"));
