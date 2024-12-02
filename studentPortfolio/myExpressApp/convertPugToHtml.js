const pug = require('pug');
const fs = require('fs');
const path = require('path');

// Path to the index.pug file
const pugFilePath = path.join(__dirname, 'views', 'index.pug');

// Path to the output HTML file in the public folder
const outputHtmlPath = path.join(__dirname, 'public', 'index.html');

// Render the Pug template to HTML
const html = pug.renderFile(pugFilePath, { title: 'Broward Pawn' });

// Write the rendered HTML to the public folder
fs.writeFileSync(outputHtmlPath, html, 'utf8');

console.log('index.pug has been converted to static HTML and saved to public/index.html');