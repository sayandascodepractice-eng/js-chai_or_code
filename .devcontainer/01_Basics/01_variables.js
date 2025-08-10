const accountId = 144553
let accountEmail = "sayan@google.com"
var accountPassword = "12345"
accountCity = "Kolkata"
let accountState

// accountId = 2 // not allowed
accountEmail = "sayan@Microsoft.com"
accountPassword = "33336666"
accountCity = "NYC"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
