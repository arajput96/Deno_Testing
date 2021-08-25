const palindrome =(string: string): boolean => {
  // Clean the string by removing non letter characters
  string = string.replace(/\W/g, '');
  // Change the string to either uppercase or lowercase to make the string uniform
  string = string.toLowerCase();
  // Base case is when the length of the string is either 0 or 1 -> return true
  if (string.length === 0 || string.length === 1) {
    return true;
  }
  // Grab the first and last characters of the string and check if they are equal
  if (string[0] === string[string.length-1]) {
    // if == then call palindrome again without those 2 characters
    return palindrome(string.slice(1,string.length-1));
  }
  // if != then return false
  return false;
}

export default palindrome;