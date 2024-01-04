const accountId = 144553
let accountEmail = "parag@gmail.com"
var accountPassword = "12345"
accountCity = "Ahmedabad"
let accountState;

// accountId = 2 // not allowed

accountEmail = "hv@hc.com"
accountPassword = "212112121"
accountCity = "Rajkot"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])