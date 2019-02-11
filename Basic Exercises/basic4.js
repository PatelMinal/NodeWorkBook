function reverseString(string) {
    
    let array = string.split(" ");
    
    return array[1]+" "+array[0];
}
console.log(reverseString("Joe Bloggs"));