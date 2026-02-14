import express from "express";

const app = express();
const PORT = 3000;

const story = [
    "You wake up inside a silent space station orbiting an unknown planet.",
    "Red emergency lights blink slowly across the corridor.",
    "Your helmet visor shows: 'Oxygen Level: 32%'.",
    "A distorted AI voice whispers: 'Crew status... unknown.'",
    "You see two doors ahead: one marked 'Control Room', the other 'Engine Bay'.",
    "You choose a door and step into darkness.",
    "The floor vibrates slightly as if something huge moves outside the station.",
    "You find a floating diary entry from a missing astronaut.",
    "It says: 'It learned to mimic our voices.'",
    "Suddenly, you hear your own voice calling your name from behind.",
    "The lights go out completely.",
    "Your suit flashlight flickers on.",
    "Through a window, you see the planet below… and something staring back.",
    "The AI activates again: 'Intruder detected.'",
    "The airlock door begins to open slowly.",
    "You must decide: jump into space… or face whatever is inside.",
    "Everything goes silent.",
    "Transmission lost."
  ];
  

app.get("/story", (req, res) => {
  const step = parseInt(req.query.step) || 0;

  if (step >= story.length) {
    return res.send(`
      <h2>The End 🎉</h2>
      <a href="/story?step=0">Restart</a>
    `);
  }

  res.send(`
    <h2>${story[step]}</h2>
    <br/>
    <a href="/story?step=${step + 1}">Enter ➡️</a>
    <br/><br/>
    <a href="/">Leave ❌</a>
  `);
});

app.get("/", (req, res) => {
  res.send(`
    <h1>Welcome to Text Adventure Game</h1>
    <a href="/story?step=0">Start Story</a>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});  
