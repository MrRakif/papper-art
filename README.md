🎨 Paper Art Generator

A fun and creative mini web app that generates colorful abstract paper art shapes randomly on the screen with every button click. Built with HTML, CSS, and Vanilla JavaScript, this project is perfect for practicing DOM manipulation and random styling in JavaScript.

🌐 Live Demo

🔗 Live site: https://mrrakif.github.io/papper-art/
📦 GitHub repo: https://github.com/MrRakif

✨ Features

🎲 Generates a random colored square each click

📌 Random position on the screen

🔄 Random rotation angle

🎨 Endless abstract art creation

📱 Responsive button for mobile

📁 Folder Structure
Paper-Art-Generator/
│── index.html
│── style.css
│── script.js

🧩 How It Works (Simple Logic)
var div = document.createElement("div")

var x = Math.random() * 85
var y = Math.random() * 85
var z = Math.random() * 85

var c1 = Math.floor(Math.random()*256)
var c2 = Math.floor(Math.random()*256)
var c3 = Math.floor(Math.random()*256)

div.style.backgroundColor = `rgb(${c1},${c2},${c3})`
div.style.left = x + "%"
div.style.top = y + "%"
div.style.rotate = z + "deg"


Each click creates a new div, styles it randomly, and places it inside <main>.

🛠 Tech Used
Tech	Purpose
HTML	Structure
CSS	Styling / layout
JavaScript	Logic for random art generation
🚀 Run Locally
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME


Open index.html in your browser or use VS Code Live Server.

📌 Future Improvements (Ideas)

✨ Clear canvas button
🎵 Add click sound effect
🌀 Add shape animation
🔷 Support more shapes: circles, triangles, polygons
💾 Export creation as an image

🙌 Credits

Built by Rakif for fun & learning.
Feel free to modify and enhance it!

⭐ Support

If you liked this small project, please ⭐ star the repository!
