document.getElementById("myButton").onclick = function() {
    let myNum = document.getElementById("myText").value;



    let num = parseInt(myNum);

    function reverse_a_number(n) {
        n = n + "";
        output = n.split("").reverse().join("");
        return output;
    }

    document.getElementById("output").innerHTML = "Output: " + reverse_a_number(num);

}

document.getElementById("myButtonPhrase").onclick = function() {
    let myString = document.getElementById("myPhrase").value;

    function check_Palindrome(str_entry) {
        // Change the string into lower case and remove  all non-alphanumeric characters
        var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
        var ccount = 0;
        // Check whether the string is empty or not
        if (cstr === "") {
            document.getElementById("palindrome_output").innerHTML = "Nothing found!";

            return false;
        }
        // Check if the length of the string is even or odd 
        if ((cstr.length) % 2 === 0) {
            ccount = (cstr.length) / 2;
        } else {
            // If the length of the string is 1 then it becomes a palindrome
            if (cstr.length === 1) {
                document.getElementById("palindrome_output").innerHTML = "Entry is a palindrome.";
                return true;
            } else {
                // If the length of the string is odd ignore middle character
                ccount = (cstr.length - 1) / 2;
            }
        }
        // Loop through to check the first character to the last character and then move next
        for (var x = 0; x < ccount; x++) {
            // Compare characters and drop them if they do not match 
            if (cstr[x] != cstr.slice(-1 - x)[0]) {
                document.getElementById("palindrome_output").innerHTML = "Entry is not a palindrome.";
                return false;
            }
        }
        document.getElementById("palindrome_output").innerHTML = "The entry is a palindrome.";
        return true;
    }
    check_Palindrome(myString);
}