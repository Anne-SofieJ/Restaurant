//Liste over de forskellige medarbejere i array
//Kokke
    let ansatte,liste = [
        " Thomas skalund",
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


//Ugedage objektet
    const d = new Date();

    const uge = [
        'Søndag',
        'Mandag',
        'Tirsdag',
        'Onsdag',
        'Torsdag',
        'Fredag',
        'Lørdag'
    ]

    ugedag.innerHTML = uge [d.getDay()];

//Måned objektet
    const a = new Date();

    const maeneder = [
        'Januar',
        'Februar',
        'Marts',
        'April',
        'Marts',
        'Juni',
        'Juli',
        'August',
        'September',
        'Oktober',
        'November',
        'December'
    ]

    maened.innerHTML = maeneder [a.getMonth()];

//År objektet
const aa = new Date();

const aar = [
    '2022',
    '2023',
    '2024',
    '2025'
]

aarr.innerHTML = aar [aa.getMonth()];

//Klokkeslet objektet
    const k = new Date();

    const klokke = [
        '00:00',
        '01:00',
        '02:00',
        '03:00',
        '04:00',
        '05:00',
        '06:00',
        '07:00',
        '08:00',
        '09:00',
        '10:00',
        '11:00',
        '12:00',
        '13:00',
        '14:00',
        '15:00',
        '16:00',
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
        '23:00',
    ]

    klokkeslet.innerHTML = klokke [k.getDay()];

//Funktion for navn
    document.getElementById('navn').innerHTML = "<h4> Resturant Ciao Bella</h4>";
//Funktion for adresse
    document.getElementById('adresse').innerHTML = "<h5> Adresse: Volden 73 8000 Aarhus C </h5>";
//Funktion for telefonnummer
    document.getElementById('telefonnummer').innerHTML = "<h5> Tlf: 21727478</h5>";

//Forsøg på kalender fra bogen side 80
//const days = [ 'Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag']
//const months = ['Januar', 'Februar', 'Marts', 'April', 'Marts', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'December' ]
//let year = now.getFullYear()
//let month = now.getMonth()
//let dayNumber = now.getDate()
//let dayName = now.getDay()

//month = months [ month]
//dayname = days [ dayName]

//let ukDate = dayName + ',' + dayNumber + '' + month + ',' + year

//console.log('U.K. Date:' + ukDate)
//days.innerHTML = days [b.getMonth()];


//Forsøg 2 på kalender fra bogen side 79
//const now = new Date ()
//let offset = now.getTimezoneOffset()
//let dst = 60

//if((now.getMonth() < 3 ) && (now.getDate() < 10 ))
//{ dst = 0}
//if((now.getMonth() < 9 ) && (now.getDate() > 2 ))
//{ dst = 0}

//switch ( offset )
//{
    //case ( 300 - dst ) : offset = 'East Coast' ; break
    //case ( 360 - dst ) : offset = 'Censtral' ; break
    //case ( 420 - dst ) : offset = 'Mountain' ; break
    //case ( 480 - dst ) : offset = 'Pacific' ; break
    //default : offset = 'All'
//}

//console.log( 'System Time: ' + now.toString())
//console.log('UTC (GMT) Time: ' + now.toUTCString())
//console.log('\nWelcome to ' + offset + 'Visitors')

//offset.innerHTML = offset [now.getMonth()];

//Forsøg 3 på kalender fra bogen side 83
const now = new Date ()
let hour = now.getHours()
let minute = now.getMinutes()
let second =now.getSeconds()
let millisecond = now.getMilliseconds()

if( minute <10) { minute = '0' + minute}
if( second <10) { minute = '0' + second}

let time = 'It is now:' + hour + ':' + minute + ':' + second + 'and' + millisecond + 'milliseconds'
console.log(time)

let greeting = '"Good Morning!"'
if( hour > 11) { greeting = 'Good Afternoon!'}
if( hour > 17) {greeting = 'Good Evening!'}
console.log (greeting)

//For så at få det frem på siden
document.getElementById("whattime").innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

//INTET VIRKER!