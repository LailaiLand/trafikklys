//document.getElementById().classList.remove

//onmousedown onmouseup

/*onmousedown="lightColor(redLight)"  
onmousedown="lightColor(yellowLight)"
onmousedown="lightColor(greenLight)"*/ 



// Lyspære med farge
let rb = document.getElementById('redBulb')
let yb = document.getElementById('yellowBulb')
let gb = document.getElementById('greenBulb')

// Funksjon for å tenne lys mens du trykker på knapp
function lightBulbRed(selection){
        rb.className = selection;
        console.log(selection);
}
function lightBulbYellow(selection){
        yb.className = selection;
        console.log(selection);
}
function lightBulbGreen(selection){
        gb.className = selection;
        console.log(selection);
}
