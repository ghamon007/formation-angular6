const fs = require('fs-extra');
const concat = require('concat');

( async function build(){
 const files = [
     './dist/social-buttons/runtime.js',
     './dist/social-buttons/polyfills.js',
     './dist/social-buttons/main.js'
 ]

 await fs.ensureDir('elements')

 await concat(files , "elements/social-buttons.js")

 await fs.copyFile( './dist/social-buttons/styles.css', 'elements/styles.css')
}


)()
