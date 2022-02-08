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
    
    

/* Selvstudiedag 3 spørgsmål 1 */
    /* Flowchart findes som billede i mappen images --> Flowchart.png */


/* Selvstudiedag 3 spørgsmål 2 + 3 + 4 + 5 */
    // Form for reserver bord samt validering

    let name2;
    btn1.addEventListener('click', function() {
    
      if (document.getElementById("name2").value == "" 
          || document.getElementById("name2").value == null) {
        alert('Skriv venligst dine oplysninger');
        //return false;
      } else {
        // display the next formfield
        radio.style.display = 'block'
        // hide formfield F1
        navn1.style.display = 'none'
      }
    })

    let name3;
    btn2.addEventListener('click', function() {
    
      if (document.getElementById("1").value == "" 
          || document.getElementById("1").value == null) {
        alert('Skriv venligst hvor mange i bliver ');
        //return false;
      } else {
        // display the next formfield
        check.style.display = 'block'
        // hide formfield F1
        radio.style.display = 'none'
      }
    })

    let name4;
    btn3.addEventListener('click', function() {
    
      if (document.getElementById("date").value == "" 
          || document.getElementById("date").value == null) {
        alert('Skriv venligt hvornår I ønsker at komme');
        //return false;
      } else {
        // display the next formfield
        lastfield.style.display = 'block'
        // hide formfield F1
        radio.style.display = 'none'
      }
    })