# 🏀 Basketball Scoreboard — Solo Project Replacement  
*A scoreboard for a fictional basketball game between Home and Guest.*

---

## 🎯 Project Goal  
Create a working basketball scoreboard using **JavaScript** to update scores, reset the game, and display the current leader.

The HTML and CSS below give you the **structure and styling**, but **all functionality must be implemented in JavaScript**.

---

# 📐 Requirements  
Every requirement begins with a Guided Link so you can explore any part further if you want.

### JavaScript Requirements  
- **script tag** — Add your JavaScript using a `<script>` tag at the bottom of the HTML.  
- **Variables** — Store the scores in variables.  
- **Numbers** — Use numbers for score values.  
- **Strings** — Use strings for button labels and messages.  
- **console.log** — Log score changes for debugging.  
- **Functions** — Create functions for adding points and resetting the game.  
- **The DOM** — Use DOM manipulation to update the scoreboard.  
- **getElementById** — Select scoreboard elements.  
- **innerText** — Update score displays.  
- **textContent** — Update leader text.

---

# 🧱 HTML Starter File  
*(You must add IDs, buttons, and JS functionality yourself.)*

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Basketball Scoreboard</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <div id="scoreboard">
        <h1>Basketball Scoreboard</h1>

        <div class="teams">
            <div class="team">
                <h2>Home</h2>
                <div id="home-score" class="score">0</div>
                <!-- Buttons for Home go here -->
            </div>

            <div class="team">
                <h2>Guest</h2>
                <div id="guest-score" class="score">0</div>
                <!-- Buttons for Guest go here -->
            </div>
        </div>

        <div id="leader">Leader: None</div>

        <!-- Reset button goes here -->
    </div>

    <!-- Your JavaScript goes here -->
    <script src="index.js"></script>
</body>
</html>
```

---

# 🎨 CSS Starter File  
*(You may extend or modify this, but do not remove the base styling.)*

```css
body {
    margin: 0;
    padding: 0;
    background: #1b1b1b;
    color: white;
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

#scoreboard {
    background: #222;
    padding: 30px;
    border-radius: 12px;
    text-align: center;
    width: 350px;
}

.teams {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.team {
    width: 45%;
}

.score {
    font-size: 48px;
    margin: 10px 0;
    background: black;
    padding: 15px;
    border-radius: 8px;
}

button {
    width: 100%;
    margin-top: 10px;
    padding: 10px;
    border: none;
    border-radius: 6px;
    background: #444;
    color: white;
    font-size: 16px;
    cursor: pointer;
}

button:hover {
    background: #666;
}

#leader {
    margin-top: 25px;
    font-size: 20px;
}
```

---

# 🧪 What You Must Implement in JavaScript

### Buttons to Add Points  
Create buttons for each team:

- +1 point  
- +2 points  
- +3 points  

Each button must:

- Use **getElementById**  
- Call a **function**  
- Update the score using **innerText** or **textContent**

---

### Reset Button  
Add a button that:

- Sets both scores back to 0  
- Updates the leader text to “None”

---

### Leader Display  
Update the `#leader` element to show:

- “Home is leading”  
- “Guest is leading”  
- “Tie”  

Use **textContent**.

---

### Console Logging  
Every score change must log something like:

```
Home score increased to 5
Guest score increased to 3
```

---

# 🏁 Final Deliverables

Your finished project must include:

- The provided HTML file (with your JS buttons added)  
- The provided CSS file  
- A working JavaScript file  
- Score buttons  
- Reset button  
- Leader display  
- DOM manipulation  
- Functions  
- Variables  
- console.log debugging  
