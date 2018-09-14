const fs = require('fs-extra');
const concat = require('concat');

( async function build(){
 const files = [
     './dist/auth-element/runtime.js',
     './dist/auth-element/polyfills.js',
     './dist/auth-element/main.js'
 ]

 await fs.ensureDir('elements')

 await concat(files , "elements/auth.js")

 await fs.copyFile( './dist/auth-element/styles.css', 'elements/styles.css')
}


)()
