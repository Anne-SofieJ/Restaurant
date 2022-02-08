/* Selvstudiedag 1 spørgsmål 1 */
    //Tid objektet
    const e = new Date();
    e.setDate(e.getDate() + 0);
    document.getElementById("klokkeslet").innerHTML = e;

/* Selvstudiedag 1 spørgsmål 2 */
    //Funktion for navn
    document.getElementById('navn').innerHTML = "<h4> Resturant Ciao Bella</h4>";
    //Funktion for adresse
        document.getElementById('adresse').innerHTML = "<h5> Adresse: Volden 73 8000 Aarhus C </h5>";
    //Funktion for telefonnummer
        document.getElementById('telefonnummer').innerHTML = "<h5> Tlf: 21727478</h5>";



/* Selvstudiedag 2 spørgsmål 1 */
    // Burgermenu på mobil

    let hide = true; // global

    // hide or show
    let hideShow = function(){
    
      if (hide == true) {
        document.getElementById('showBrg').style.display = 'block';
        hide = false;
      } else {
        document.getElementById('showBrg').style.display = 'none';
        hide = true;
      }
    
    }
    
    // detect click
    burger.addEventListener('click', hideShow);
    
    

/* Selvstudiedag 5 spørgsmål 1 */
// Menukort

menu = `{
    "Menu": [
    {
    "ID": 1,
    "Typeret": "Forret",
    "Titel": "Tartar",
    "Beskrivelse": "Hjemmerørt tartar med kapers og kartoffelchips",
    "Pris": 65,
    "Billede": "tartar.jpeg"
    },
    {
    "ID": 2,
    "Typeret": "Forret",
    "Titel": "Laks",
    "Beskrivelse": "Varmrøget laks med aspares og grønt",
    "Pris": 65,
    "Billede": "laks.jpeg"
    },
    {
    "ID": 3,
    "Typeret": "Hovedret",
    "Titel": "Langtidsbrasseret svinekæber",
    "Beskrivelse": "Tilberedt i 8 timer med bær og rødvinssovs",
    "Pris": 175,
    "Billede": "svin.jpeg"
    },
    {
    "ID": 4,
    "Typeret": "Hovedret",
    "Titel": "Entrecote",
    "Beskrivelse": "Lækker grillet entrecote med hjemmerørt bearnaise ",
    "Pris": 185,
    "Billede": "entrecote.jpeg"
    },
    {
    "ID": 5,
    "Typeret": "Dessert",
    "Titel": "Isbombe",
    "Beskrivelse": "Nyfortolkning af isdesserten med kiksebund, toppet med marengs",
    "Pris": 90,
    "Billede": "isbombe.jpeg"
    },
    {
    "ID": 6,
    "Typeret": "Dessert",
    "Titel": "Varm chokoladekage",
    "Beskrivelse": "Varm chokoladekage med frisk frugt og sorbet. ",
    "Pris": 70,
    "Billede": "choko.jpeg"
    },
    {
    "ID": 7,
    "Typeret": "Tilbehør",
    "Titel": "Fritter",
    "Beskrivelse": "Hjemmelavet fritter",
    "Pris": 20,
    "Billede": "fritter.jpeg"
    },
    {
    "ID": 8,
    "Typeret": "Tilbehør",
    "Titel": "Spidskål toppet med parmasan",
    "Beskrivelse": "Stegt spidskål toppet med revet parmasan",
    "Pris": 20,
    "Billede": "spids.jpeg"
    }
]
}`;

const xxx = JSON.parse(menu);
console.log(xxx.Menu[0].Titel);

//Loop der henter hele array
/*--for (let i=0; i<xxx.Menu.length; i++){
console.log (xxx.Menu[i].Titel)
resultat.innerHTML += `
    <div class = "menuTing">
    <h2> ${xxx.Menu[i].Titel} </h2>
    <p> ${xxx.Menu[i].Beskrivelse} </p>
        <img src="images/${xxx.Menu[i].Billede}" alt="${xxx.Menu[i].titel}">
    <p> ${xxx.Menu[i].Pris} kroner</p>
    </div>
`
}--*/

for (let i=0; i<xxx.Menu.length; i++){

    if( xxx.Menu[i].Typeret == 'Forret' ){ //forret henviser til navnet i JSON under titlen "ret" 
          console.log('Desserter\n\n' + xxx.Menu[i].Titel) //bare console.log ikke noget vigtigt
          forret.innerHTML += `
            <div class="menuTing">
              <h3> ${xxx.Menu[i].Titel} </h3>
                <img class="Billede" src="images/${xxx.Menu[i].Billede}" alt="${xxx.Menu[i].Titel}">
                <p> ${xxx.Menu[i].Beskrivelse} </p>
              <p> ${xxx.Menu[i].Pris} kr. </p>
            </div>
          `
        }
  
        if( xxx.Menu[i].Typeret == 'Hovedret' ){
              console.log('forretter\n\n' + xxx.Menu[i].Titel)//bare console.log ikke noget vigtigt
              hovedret.innerHTML += `
                <div class="menuTing">
                  <h3> ${xxx.Menu[i].Titel} </h3>
                    <img class="Billede" src="images/${xxx.Menu[i].Billede}" alt="${xxx.Menu[i].Titel}">
                    <p> ${xxx.Menu[i].Beskrivelse} </p>
                  <p> ${xxx.Menu[i].Pris} kr. </p>
                </div>
              `
            }
  
            if( xxx.Menu[i].Typeret == 'Dessert' ){
                  console.log('Desserter\n\n' + xxx.Menu[i].Titel)//bare console.log ikke noget vigtigt
                  dessert.innerHTML += `
                    <div class="menuTing">
                      <h3> ${xxx.Menu[i].Titel} </h3>
                        <img class="Billede" src="images/${xxx.Menu[i].Billede}" alt="${xxx.Menu[i].Titel}">
                        <p> ${xxx.Menu[i].Beskrivelse} </p>
                      <p> ${xxx.Menu[i].Pris} kr. </p>
                    </div>
                  `
                }
      }