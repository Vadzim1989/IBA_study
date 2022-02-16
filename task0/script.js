/*
Write the code which asks for a login with prompt.

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

- If it equals “TheMaster”, then show “Welcome!”,
- Another string – show “Wrong password”,
- For an empty string or cancelled input, show “Canceled”
*/

let login = prompt("Enter your login", '');
let password = prompt('Enter your password?', '');

if (login === 'Admin') {
  password === 'TheMaster' ? alert( 'Welcome!' ) :
  password === '' || password === null ? alert( 'Canceled' ) : alert( 'Wrong password' )
} 
else {
  login === '' || login === null ? alert( 'Canceled' ) : 
  alert( "I don't know you" );
}
