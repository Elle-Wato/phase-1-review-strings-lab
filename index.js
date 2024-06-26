const currentUser = 'Grace Hopper';

const welcomeMessage = 'Welcome to Flatbook, ${Grace Hopper}!';

const excitedWelcomeMessage = welcomeMessage.toUpperCase();

const firstInitial = currentUser[0];
const restOfName = currentUser.slice(1);
const shortGreeting = 'Welcome, $G{currentUser.slice(0,1)}!';