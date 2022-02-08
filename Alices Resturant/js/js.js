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


/* Selvstudiedag 1 spørgsmål 3 */
    //Liste over de forskellige medarbejere i array
    //Kokke
    let ansatte,liste = [
        "Thomas skalund",
        "Valter Pil",
        "Rasmus Arentsen"
    ]
 
    liste.sort ();

    for (ansatte in liste) {
        //console.log (huskeseddel[ visMig ]);
        kokke.innerHTML += '<ul>' + liste [ ansatte ] + '</ul>';
    }

    //Tjenere
    let ansatte2,liste2 = [
        "Pernille skinner",
        "Sarah Nielsen",
        "Anne Senne",
        "Oliver Nasli",
        "Mia Engel",
        "Marianne Hansen",
        "Jonas Pedersen",
        "Mette Rigel"
    ]

    liste2.sort ();

    for (ansatte2 in liste2) {
        //console.log (huskeseddel[ visMig ]);
        tjenere.innerHTML += '<ul>' + liste2 [ ansatte2 ] + '</ul>';
    }

    //Opvaskere
    let ansatte3,liste3 = [
        "Philip G. Snildsen",
        "Kasper Mathiesen",
        "Morten Ulfstup"
    ]

    liste3.sort ();

    for (ansatte3 in liste3) {
        //console.log (huskeseddel[ visMig ]);
        opvaskere.innerHTML += '<ul>' + liste3 [ ansatte3 ] + '</ul>';
    }

    //Altmuligmand
    let ansatte4,liste4 = [
        "Alice Ingemann Poulsen"
    ]

    liste4.sort ();

    for (ansatte4 in liste4) {
        //console.log (huskeseddel[ visMig ]);
        altmuligmand.innerHTML += '<ul>' + liste4 [ ansatte4 ] + '</ul>';
    }



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



/* Selvstudiedag 4 spørgsmål 1 */
    // Video og lyd

    window.addEventListener("scroll", function() { // detect scroll event

        let mySound = document.getElementById("myaudio"); // select audio id
        let lyd = document.getElementById("lyd");
        
        console.log("Is the #lyd visible or not? " + elFllVsbl(lyd)); // test
    
    // Below: start and stop audio 
        if (elFllVsbl(lyd)) { // if the #lyd div is visible then
        if (!(mySound.curentTime > 0)) {
            mySound.play(); // play audio
        }
        } else {
        mySound.pause();
        mySound.currentTime = 0; // rewind the sound
        }
    })
    
    // this function will check whether a tag is visible
    function elFllVsbl( el ) {
        return (
            el.getBoundingClientRect().top >= 0 && el.getBoundingClientRect().bottom < window.innerHeight);
    }