const currentUser = 'Grace Hopper';
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

console.log(welcomeMessage); // Outputs: Welcome to Flatbook, Grace Hopper!
const excitedWelcomeMessage = `WELCOME TO FLATBOOK, ${currentUser.toUpperCase()}!`;

console.log(welcomeMessage); // Outputs: Welcome to Flatbook, Grace Hopper!
console.log(excitedWelcomeMessage); // Outputs: WELCOME TO FLATBOOK, GRACE HOPPER!
const shortGreeting = `Welcome, ${currentUser.split(' ')[0]}!`;

console.log(welcomeMessage); // Outputs: Welcome to Flatbook, Grace Hopper!
console.log(excitedWelcomeMessage); // Outputs: WELCOME TO FLATBOOK, GRACE HOPPER!