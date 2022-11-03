//document.getElementById().classList.toggle

//onmousedown onmouseup

/*onmousedown="lightColor(redLight)"  
onmousedown="lightColor(yellowLight)"
onmousedown="lightColor(greenLight)"*/



// Lyspære med farge
let rb = 'standby'
let yb = 'standby'
let gb = 'standby'

//view
showContent();
function showContent() {
        document.getElementById('content').innerHTML = /*html*/`
        <div class="lysknapp">
        <div class="lightBox">
        <div class="${rb}"></div>
        <div class="${yb}"></div>
        <div  class="${gb}"></div>
        </div>
        <button class="knapp"
        onmousedown="lightBulbRed('redRing')"
        onmouseup="lightBulbRed('standby')">
        Rødt</button>
        <button class="knapp"
        onmousedown="lightBulbYellow('yellowRing')"
        onmouseup="lightBulbYellow('standby')">
        Gult</button>
        <button class="knapp"
        onmousedown="lightBulbGreen('greenRing')"
        onmouseup="lightBulbGreen('standby')">
        Grønt</button>
        </div>
        <div class="car" onclick="bilIncoming()">Tut tut! <br>
        Jeg er en bil! <br>
        Klikk på meg for å <br>
        kjøre lyskryss!</div>
        `;
}

//controller

// Funksjon for å tenne lys mens du trykker på knapp
function lightBulbRed(selection) {
        rb = selection;
        showContent();
        console.log(selection);
}
function lightBulbYellow(selection) {
        yb = selection;
        showContent();
        console.log(selection);
}
function lightBulbGreen(selection) {
        gb = selection;
        showContent();
        console.log(selection);
}

//simulering av at det er oppdaget en bil
function bilIncoming(){
        const stopTimer = setTimeout(ventTid, 3000);
        rb = 'redRing';
        yb = 'standby';
        gb = 'standby';
        showContent();
}
function ventTid(){
        const ventTimer = setTimeout(kjorTid, 1000);
        rb = 'redRing';
        yb = 'yellowRing';
        gb = 'standby';
        showContent();
}
function kjorTid(){
        const kjorTimer = setTimeout(bremsTid, 3000);
        rb = 'standby';
        yb = 'standby';
        gb = 'greenRing';
        showContent();
}
function bremsTid(){
        const bremsTimer = setTimeout(stopNa, 2000);
        rb = 'standby';
        yb = 'yellowRing';
        gb = 'standby';
        showContent();
}
function stopNa(){
        rb = 'redRing';
        yb = 'standby';
        gb = 'standby';
        showContent();
}