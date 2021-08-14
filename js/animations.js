// GSAP Code
var timeline = gsap.timeline(); // Creating a timeline to manage sequential animations better

// Fade in/out of the game name heading
timeline.from("#welcome", {duration: 2, opacity: 0});
timeline.to("#welcome", {duration: 1, opacity: 0});


// Heading slide down
timeline.from("h1", {duration: 1, opacity: 0, ease: 'expo', y: -800});


// Lateral slide of player one column
timeline.from(".player-one", {duration: 1.5, opacity: 0, ease: 'expo', x: 300});
// Lateral slide of player two column
timeline.from(".player-two", {duration: 1.5, opacity: 0, ease: 'expo', x: -300});


// Throw button fade in
timeline.to("#throw-dicee", {duration: 0.5, opacity: 1});
