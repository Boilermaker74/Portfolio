// Assign variables
var xyz = -1;
var cars =[];
var deb = [];
var pass;


// Functions that make programs replace the portfolio

function program2 () {
    document.getElementById("disappear").style.display = "none";
    document.getElementById("reappear").style.display = "block";
}

function program3 () {
    document.getElementById("disappear").style.display = "block";
    document.getElementById("reappear").style.display = "none";
}

// Get Password character length.

function pwlength() {

var pwnum = window.prompt("How many characters would you like your password to contain? \nValue must be between 8 and 128.");
if (pwnum >= 8 && pwnum <= 128) {
    generateP()
}
else {
    window.alert("Password lenght must be a number between 8 to 128 characters. \nYour input was " + pwnum + '. Please try again')   
    pwlength()
}

// Function to generate a unique password

 function generateP() {
    var str = ''
    var type = 0

//  Password starts with no characters. Confirm inclusion of uppercase

var r=confirm('Click OK to confirm the use of uppercase characters in your password.')
if (r==true) {
var str = str  + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var type = type + 10
}
    else {
    var str = '';
    }


//   Uppercase characters have been confirmed or denied. Confirm inclusion of lowercase characters

    var rr=confirm('Click OK to confirm the use of lower case characters in your password.')
    if (rr==true) {
    var str = str  + 'abcdefghijklmnopqrstuvwxyz';
    var type = type + 100
    }
        else {
        var str = str;
        
        }

//  Lowercase characters have been confirmed or denied. Confirm inclusion of numbers

var rrr=confirm('Click OK to confirm the use of numbers in your password.')
    if (rrr==true) {
    var str = str  + '0123456789';
    var type = type + 1000
}
        else {
        var str = str;
        
        }

//  Lowercase characters and numbers have been confirmed or denied. Confirm inclusion of special characters

var rrrr=confirm('Click OK to confirm the use of special characters in your password.')
    if (rrrr==true) {
    var str = str  + "'/^_|~ ";

    // some special characters were crashing the code, not sure which.
    // '/^_|~  good
    // }&:>`(%-@[]:;<=?#$%()*+,.{  Bad
    // // #$%&'()*+,-./:;<=>?@[]^_`{|}~ 
    var type = type + 10000
}
        else {
        var str = str;
        
}

     
// if user fails to pick a class of characters, the program states this and loops to the begining
if (type < 10) {
    window.alert ('You have not choosen any criteria for your password. Please try again')
    pwlength()
}
   // State the password length and characters.

   else if (type===10){
    window.alert ('Your password will be ' + pwnum + ' characters long. \nYour password will contain only uppercase characters.')
}
    else if (type===100){
    window.alert ('Your password will be ' + pwnum + ' characters long. \nYour password will contain only lowercase characters.')
}

    else if (type===110){
    window.alert ('Your password will be ' + pwnum + ' characters long. \nYour password will contain only uppercase and lowercase characters.')
}

    else if (type===1000){
    window.alert ('Your password will be ' + pwnum + ' characters long. \nYour password will contain only numbers.')
}
    
    else if (type===1010){
    window.alert ('Your password will be ' + pwnum + ' characters long. \nYour password will contain uppercase characters. \nYour password will contain numbers.')
}

    else if (type===1100){
    window.alert ('Your password will be ' + pwnum + ' characters long.\nYour password will contain lowercase characters. \nYour password will contain numbers.')
}

    else if (type===1110){
    window.alert ('Your password will be ' + pwnum + ' characters long.  \nYour password will contain uppercase characters.\nYour password will contain lowercase characters. \nYour password will contain numbers.')
}

    else if (type===10000){
    window.alert ('Your password will be ' + pwnum + ' characters long. \nYour password will contain only special characters.')
}

    else if (type===10010){
    window.alert ('Your password will be ' + pwnum + ' characters long.  \nYour password will contain uppercase characters.\nYour password will contain special characters.')
}

    else if (type===10100){
    window.alert ('Your password will be ' + pwnum + ' characters long. \nYour password will contain lowercase characters.\nYour password will contain special characters.')
}

    else if (type===10110){
    window.alert ('Your password will be ' + pwnum + ' characters long.\nYour password will contain uppercase characters.\nYour password will contain lowercase characters.\nYour password will contain special characters.')
}

    else if (type===11000){
    window.alert ('Your password will be ' + pwnum + ' characters long.\nYour password will contain numbers.\nYour password will contain special characters.')
}

    else if (type===11010){
    window.alert ('Your password will be ' + pwnum + ' characters long.\nYour password will contain uppercase characters.\nYour password will contain numbers. \nYour password will contain special characters.')
}

    else if (type===11100){
    window.alert ('Your password will be ' + pwnum + ' characters long.\nYour password will contain lowercase characters. \nYour password will contain numbers. \nYour password will contain special characters.')
}

    else if (type===11110){
    window.alert ('Your password will be ' + pwnum + ' characters long. \nYour password will contain uppercase characters.\nYour password will contain lowercase characters. \nYour password will contain numbers. \nYour password will contain special characters.')

}


// Password generator. Base code taken from https://www.geeksforgeeks.org/how-to-generate-a-random-password-using-javascript/

 
    pass = '';

    for (let i = 1; i <= pwnum; i++) {
        var char = Math.floor(Math.random()
                    * str.length + 1);
          
        pass += str.charAt(char)
    }
        // Change local pass to global password
        window.password=pass
        // Put new password in car array
        xyz++
        cars.unshift(pass)
       
        // window.alert (cars[xyz-1]);
      
        // Print Password to the screen
       
       if (xyz ===0) {
        deb[0] = "Your Secure Password";
        cars[0] = pass;
        document.body.innerHTML = document.body.innerHTML.replace(deb[0],cars[0]);
    
      } else {
        document.body.innerHTML = document.body.innerHTML.replace(cars[1],cars[0]); 
        
      }
 }
}

