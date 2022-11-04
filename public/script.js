let image = document.getElementById("image");
let imageCover = document.getElementById("image-cover");
let imageContainer = document.getElementById("image-container");
let shareText = document.getElementById("custom-share-text");

let todaysGameDate = "";

gameData = {
  "04/04/2022": {
    name: ["EMINEM", "MARSHALL MATHERS", "SLIM SHADY"],
    image: "EMINEM.jpeg",
    issue: "1",
  },
  "04/05/2022": {
    name: ["BRAD PITT", "BRADLEY PITT", "BRAD PIT", "BRAD", "PITT"],
    image: "BRAD_PITT.jpg",
    issue: "2",
  },
  "04/06/2022": {
    name: ["CHRISTIAN BALE", "CHRISTIAN BAIL"],
    image: "CHRISTIAN_BALE.png",
    issue: "3",
  },
  "04/07/2022": {
    name: ["ROBERT DENIRO", "ROBERT DENERO"],
    image: "ROBERT_DENIRO.jpeg",
    issue: "4",
  },
  "04/08/2022": {
    name: ["RYAN GOSLING", "RYAN GOESLING"],
    image: "RYAN_GOSLING.jpeg",
    issue: "5",
  },
  "04/09/2022": {
    name: ["STEPHEN COLBERT", "STEVEN COLBERT"],
    image: "STEPHEN_COLBERT.jpg",
    issue: "6",
  },
  "04/10/2022": {
    name: ["SETH ROGEN", "SETH ROGAN", "SETH AARON ROGEN", "SETH", "ROGEN"],
    image: "SETH_ROGEN.jpeg",
    issue: "7",
  },
  "04/11/2022": {
    name: [
      "PAUL MCCARTNEY",
      "SIR PAUL MCCARTNEY",
      "PAUL",
      "MCCARTNEY",
      "PAUL CARTNEY",
      "PAUL MACARTNEY",
      "PAUL MCARTNEY",
    ],
    image: "PAUL_MCCARTNEY.png",
    issue: "8",
  },
  "04/12/2022": {
    name: [
      "LEBRON JAMES",
      "LABRON JAMES",
      "LABRON",
      "LEBRON",
      "JAMES",
      "LEBRON RAYMONE JAMES SR",
    ],
    image: "LEBRON_JAMES.jpeg",
    issue: "9",
  },
  "04/13/2022": {
    name: ["STING", "Gordon Sumner"],
    image: "STING.jpeg",
    issue: "10",
  },
  "04/14/2022": {
    name: [
      "GEORGE CLOONEY",
      "CLOONEY",
      "GEORGE",
      "GEORGE CLOONIE",
      "GEORGE CLOONY",
    ],
    image: "GEORGE_CLOONEY.jpeg",
    issue: "11",
  },
  "04/15/2022": {
    name: ["TED CRUZ", "TED CRUISE", "EDWARD CRUZ"],
    image: "TED_CRUZ.jpg",
    issue: "12",
  },
  "04/16/2022": {
    name: [
      "BILLY BOB THORNTON",
      "BILLYBOB THORNTON",
      "BILLYBOB THORTON",
      "BILLY BOB THORTON",
      "BILLY THORNTON",
      "WILLIAM BOB THORNTON",
    ],
    image: "BILLY_BOB_THORNTON.jpg",
    issue: "13",
  },
  "04/17/2022": {
    name: [
      "JUSSIE SMOLLETT",
      "JUSSIE",
      "SMOLLET",
      "JUSSIE SMOLET",
      "JUSTICE SMOLLETT",
      "JUSSY SMOLLETT",
      "JUSSI SMOLLETT",
      "JUSSI SMOLLET",
    ],
    image: "JUSSIE_SMOLLETT.jpg",
    issue: "14",
  },
  "04/18/2022": {
    name: [
      "JOHN GOODMAN",
      "JON GOODMAN",
      "JOHN GOODMANN",
      "JOHN",
      "GOODMAN",
      "JOHN STEPHEN GOODMAN",
    ],
    image: "JOHN_GOODMAN.jpg",
    issue: "15",
  },
  "04/19/2022": {
    name: [
      "TOM HANKS",
      "TOM HANCS",
      "TOM",
      "HANKS",
      "THOMAS JEFFREY HANKS",
      "THOMAS HANKS",
    ],
    image: "TOM_HANKS.jpg",
    issue: "16",
  },
  "04/20/2022": {
    name: [
      "STEVE CARELL",
      "STEVE CARRELL",
      "STEVE CARREL",
      "STEVEN CARRELL",
      "STEVE",
      "CARELL",
    ],
    image: "STEVE_CARELL.jpg",
    issue: "17",
  },
  "04/21/2022": {
    name: [
      "KURT COBAIN",
      "KURT",
      "COBAINE",
      "KURT COBAINE",
      "KURT KOBAIN",
      "CURT COBAIN",
      "CURT COBAINE",
      "KURT DONALD COBAIN",
    ],
    image: "KURT_COBAIN.jpg",
    issue: "18",
  },
  "04/22/2022": {
    name: [
      "ORSON WELLES",
      "ORSEN WELLES",
      "ORSON WELLS",
      "ORSEN WELLS",
      "ORSON",
      "WELLES",
      "WELLES",
      "GEORGE ORSON WELLES",
    ],
    image: "ORSON_WELLES.jpg",
    issue: "19",
  },
  "04/23/2022": {
    name: [
      "PIERCE BROSNAN",
      "PIERCE BROSAN",
      "PIERSE BROSNAN",
      "PIERCE",
      "BROSNAN",
      "007",
      "JAMES BOND",
      "PIERCE BRENDAN BROSNAN",
    ],
    image: "PIERCE_BROSNAN.jpg",
    issue: "20",
  },
  "04/24/2022": {
    name: [
      "RAY ROMANO",
      "RAYMOND",
      "RAYMOND ROMANO",
      "ROMANO",
      "EVERYBODY LOVES RAYMOND",
      "RAY",
      "RAYMOND ALBERT ROMANO",
    ],
    image: "RAY_ROMANO.jpg",
    issue: "21",
  },
  "04/25/2022": {
    name: [
      "DANIEL RADCLIFFE",
      "DANIEL",
      "RADCLIFFE",
      "RADCLIFF",
      "DANIEL RADCLIFF",
      "HARRY POTTER",
      "DANIEL RADCLIF",
    ],
    image: "DANIEL_RADCLIFFE.jpg",
    issue: "22",
  },
  "05/09/2022": {
    name: [
      "ASHTON KUTCHER",
      "KELSO",
      "ASHTEN KUTCHER",
      "ASHTON CUTCHER",
      "ASHTON",
      "KUTCHER",
    ],
    image: "ASHTON_KUTCHER.jpg",
    issue: "23",
  },
  "05/10/2022": {
    name: ["DAVID LETTERMAN", "DAVE LETTERMAN", "DAVE", "LETTERMAN"],
    image: "DAVID_LETTERMAN.jpg",
    issue: "24",
  },
  "05/17/2022": {
    name: [
      "LIN MANUEL MIRANDA",
      "LIN MANUEL",
      "MANUEL MIRANDA",
      "HAMILTON",
      "LIN MIRANDA",
      "LIN MIRANDA MANUEL",
    ],
    image: "LIN_MANUEL_MIRANDA.jpg",
    issue: "25",
  },
  "05/18/2022": {
    name: ["JIM GAFFIGAN", "JIM GAFFAGIN", "JAMES GAFFIGAN"],
    image: "JIM_GAFFIGAN.jpg",
    issue: "26",
  },
  "05/19/2022": {
    name: ["HARRISON FORD", "HARRASIN FORD"],
    image: "HARRISON_FORD.jpg",
    issue: "27",
  },
  "05/21/2022": {
    name: ["STEVE JOBS", "STEVE", "JOBS", "APPLE", "STEVEN JOBS"],
    image: "STEVE_JOBS.jpg",
    issue: "28",
  },
  "05/22/2022": {
    name: ["JOHNNY DEPP", "JONNY DEPP", "JOHN DEPP", "DEPP", "JOHNNY"],
    image: "JOHNNY_DEPP.jpg",
    issue: "29",
  },
  "05/23/2022": {
    name: ["DUSTIN DIAMOND", "DUSTIN", "DIAMOND", "SCREECH"],
    image: "DUSTIN_DIAMOND.jpg",
    issue: "30",
  },
  "05/24/2022": {
    name: [
      "KEANU REEVES",
      "KEANU REEVE",
      "KEANU REAVES",
      "KIANU REEVES",
      "NEO",
    ],
    image: "KEANU_REEVES.jpg",
    issue: "31",
  },
  "05/29/2022": {
    name: ["GEORGE LOPEZ", "GEORGE", "LOPEZ", "JORGE LOPEZ", "GEORGE LOPES"],
    image: "GEORGE_LOPEZ.jpg",
    issue: "32",
  },
  "05/30/2022": {
    name: ["ICE CUBE", "O'SHEA JACKSON"],
    image: "ICE_CUBE.jpg",
    issue: "33",
  },
  "05/31/2022": {
    name: ["JEFF GOLDBLUM", "JEFF GOLDBLOOM", "JEFFREY GOLDBLUM"],
    image: "JEFF_GOLDBLUM.jpg",
    issue: "34",
  },
  "06/01/2022": {
    name: ["RICK ROSS", "RICK", "ROSS"],
    image: "RICK_ROSS2.jpg",
    issue: "35",
  },
  "06/02/2022": {
    name: ["JEFF BRIDGES", "JEFFREY BRIDGES", "BRIDGES", "JEFF"],
    image: "JEFF_BRIDGES.jpg",
    issue: "36",
  },
  "06/03/2022": {
    name: [
      "RICKY GERVAIS",
      "RICARDO GERVAIS",
      "RICKY",
      "GERVAIS",
      "DAVID BRENT",
      "RICKY JERVAIS",
      "RICKY GERVASE",
      "RICKY JERVASE",
    ],
    image: "RICKY_GERVAIS.jpg",
    issue: "37",
  },
  "06/05/2022": {
    name: ["JACK BLACK", "JACK", "BLACK", "SCHOOL OF ROCK", "JACK BLAK"],
    image: "JACK_BLACK.jpg",
    issue: "38",
  },
  "06/06/2022": {
    name: [
      "MARTIN LAWRENCE",
      "MARTIN",
      "LAWRENCE",
      "MARTIN LARENCE",
      "MARTEN LAWRENCE",
    ],
    image: "MARTIN_LAWRENCE.jpg",
    issue: "39",
  },
  "06/07/2022": {
    name: [
      "RUSSELL BRAND",
      "RUSSEL BRAND",
      "RUSSEL BRANT",
      "RUSSEL",
      "BRAND",
      "ALDOUS SNOW",
    ],
    image: "RUSSELL_BRAND.jpg",
    issue: "40",
  },
  "06/08/2022": {
    name: [
      "DAVID BLAINE",
      "DAVID BLAIN",
      "DAVID BLANE",
      "BLAINE",
      "DAVE",
      "DAVID",
      "MAGICIAN",
    ],
    image: "DAVID_BLAINE.jpg",
    issue: "41",
  },
  "06/09/2022": {
    name: [
      "JOHN MALKOVICH",
      "JON MALKOVICH",
      "JOHN MALCOVICH",
      "JOHN MALCOVIC",
      "JOHN",
      "MALKOVICH",
    ],
    image: "JOHN_MALKOVICH.jpg",
    issue: "42",
  },
  "06/10/2022": {
    name: ["TOBY KEITH", "TOBY KIETH", "TOBY", "KEITH", "TOBY KEITH COVEL"],
    image: "TOBY_KEITH.jpg",
    issue: "43",
  },
  "06/11/2022": {
    name: [
      "MATTHEW FOX",
      "MATT",
      "FOX",
      "MATT FOX",
      "LOST",
      "MATTHEW CHANDLER FOX",
      "JACK",
      "JACK SHEPHARD",
    ],
    image: "MATTHEW_FOX.jpg",
    issue: "44",
  },
  "06/12/2022": {
    name: [
      "RICHARD BRANSON",
      "SIR RICHARD BRANSON",
      "RICHARD BRANDSEN",
      "VIRGIN",
      "RICHARD",
      "BRANSON",
    ],
    image: "RICHARD_BRANSON.jpg",
    issue: "45",
  },
  "06/13/2022": {
    name: [
      "JON VOIGHT",
      "JOHN VOIGHT",
      "JOHN VOIGT",
      "JOHN VOIT",
      "JON",
      "VOIGHT",
    ],
    image: "JON_VOIGHT.jpg",
    issue: "46",
  },
  "06/14/2022": {
    name: ["HARRY STYLES", "HARRY STILES", "HARRY", "STYLES", "ONE DIRECTION"],
    image: "HARRY_STYLES.jpg",
    issue: "47",
  },
  "06/15/2022": {
    name: ["BILL MURRAY", "BILL MURRY", "WILLIAM MURRAY", "BILL", "MURRAY"],
    image: "BILL_MURRAY.jpg",
    issue: "48",
  },
  "06/16/2022": {
    name: ["BRUCE LEE", "BRUCE", "LEE"],
    image: "BRUCE_LEE.jpg",
    issue: "49",
  },
  "06/17/2022": {
    name: [
      "DAVID DUCHOVNY",
      "DAVID DUCHOVENY",
      "DAVID DUKOVNY",
      "DAVID",
      "DUCHOVNY",
      "AGENT MOULDER",
      "MOULDER",
    ],
    image: "DAVID_DUCHOVNY.jpg",
    issue: "50",
  },
  "06/19/2022": {
    name: ["ADAM DRIVER", "ADAM DIVER"],
    image: "ADAM_DRIVER.jpg",
    issue: "51",
  },
  "06/20/2022": {
    name: [
      "BILLY CRYSTAL",
      "WILLIAM CRYSTAL",
      "BILLY CHRISTAL",
      "BILL CRYSTAL",
      "MR. SATURDAY NIGHT",
      "BILLY",
      "CRYSTAL",
    ],
    image: "BILLY_CRYSTAL.jpg",
    issue: "52",
  },
  "06/21/2022": {
    name: [
      "CHADWICK BOSEMAN",
      "CHAD BOSEMAN",
      "CHADWICK BOSMAN",
      "CHADWICK",
      "BOSEMAN",
    ],
    image: "CHADWICK_BOSEMAN.jpg",
    issue: "53",
  },
  "06/22/2022": {
    name: ["JARED LETO", "JARED LETTO", "JARED", "LETO"],
    image: "JARED_LETO.jpg",
    issue: "54",
  },
  "06/23/2022": {
    name: [
      "BURT REYNOLDS",
      "BURT",
      "REYNOLDS",
      "BURT RENOLDS",
      "BURT REANOLDS",
    ],
    image: "BURT_REYNOLDS.jpg",
    issue: "55",
  },
  "06/24/2022": {
    name: ["BRADLEY COOPER", "BRAD COOPER", "BRADLEY", "COOPER"],
    image: "BRADLEY_COOPER.jpg",
    issue: "56",
  },
  "06/25/2022": {
    name: [
      "BILLY MAYES",
      "BILLY MAYS",
      "BILL MAYES",
      "BILL MAYS",
      "BILLY",
      "MAYES",
      "OXYCLEAN",
    ],
    image: "BILLY_MAYES.jpg",
    issue: "57",
  },
  "06/26/2022": {
    name: [
      "DALE EARNHARDT JR.",
      "DALE EARNHARDT",
      "DALE EARNHART JR.",
      "DALE EARNHART JR",
      "DALE EARNHARDT JR",
      "DALE",
      "EARNHARDT",
    ],
    image: "DALE_EARNHARDT.jpg",
    issue: "58",
  },
  "06/27/2022": {
    name: ["RICKY MARTIN", "RICKY", "MARTIN", "LA VIDA LOCA"],
    image: "RICKY_MARTIN.jpg",
    issue: "59",
  },
  "06/28/2022": {
    name: ["MAC MILLER", "MILLER", "MAC"],
    image: "MAC_MILLER.jpg",
    issue: "60",
  },
  "06/29/2022": {
    name: [
      "CHARLIE SHEEN",
      "CHARLES SHEEN",
      "CHARLIE ESTEVEZ",
      "CHARLIE",
      "SHEEN",
      "WINNING",
      "TIGER BLOOD",
    ],
    image: "CHARLIE_SHEEN.jpg",
    issue: "61",
  },
  "06/30/2022": {
    name: ["BILL BURR", "WILLIAM BURR", "BILL", "BURR"],
    image: "BILL_BURR.jpg",
    issue: "62",
  },
  "06/31/2022": {
    name: [
      "SAMUEL L. JACKSON",
      "SAMUEL L JACKSON",
      "SAMUEL JACKSON",
      "SAM JACKSON",
      "JACKSON",
      "SAMUEL",
    ],
    image: "SAMUEL_JACKSON.jpg",
    issue: "63",
  },
  "07/01/2022": {
    name: ["COLIN JOST", "COLLIN JOST", "COLIN JOSTE", "COLIN", "JOST"],
    image: "COLIN_JOST.jpg",
    issue: "64",
  },
  "07/02/2022": {
    name: ["JOHN STAMOS", "JON STAMOS", "UNCLE JESSE", "JOHN", "STAMOS"],
    image: "JOHN_STAMOS.jpg",
    issue: "65",
  },
  "07/03/2022": {
    name: ["LANCE ARMSTRONG", "LANCE", "ARMSTRONG"],
    image: "LANCE_ARMSTRONG.jpg",
    issue: "66",
  },
  "07/04/2022": {
    name: [
      "SACHA BARON COHEN",
      "SASHA BARON COHEN",
      "SASHA BARRON COHEN",
      "BORAT",
      "BRUNO",
      "SACHA",
      "BARON",
      "COHEN",
    ],
    image: "SACHA_BARON_COHEN.jpg",
    issue: "67",
  },
  "07/05/2022": {
    name: ["BONO", "BONNO", "U2"],
    image: "BONO.jpg",
    issue: "68",
  },
  "07/06/2022": {
    name: [
      "CONAN O'BRIEN",
      "CONAN",
      "CONAN OBRIEN",
      "O'BRIEN",
      "CONAN CHRISTOPHER O'BRIEN",
    ],
    image: "CONAN_OBRIEN.jpg",
    issue: "69",
  },
  "07/07/2022": {
    name: [
      "BILLIE JOE ARMSTRONG",
      "BILLY JOE ARMSTRONG",
      "BILLIE JO ARMSTRONG",
      "BILLY JO ARMSTRONG",
      "BILLIE JO",
      "BILLY JOE",
      "BILLIE JOE",
      "BILLY JO",
      "GREEN DAY",
    ],
    image: "BILLIE_JOE_ARMSTRONG.jpg",
    issue: "70",
  },
  "07/08/2022": {
    name: [
      "WOODY HARRELSON",
      "WOODY HARLESON",
      "WOODIE HARRELSON",
      "WOODIE HARRLESON",
      "WOODY HARLESON",
      "CHEERS",
      "DAKOTA",
    ],
    image: "WOODY_HARRELSON.jpg",
    issue: "71",
  },
  "07/09/2022": {
    name: ["EDWARD NORTON", "ED NORTON", "EDWARD NORTEN", "ED NORTEN"],
    image: "EDWARD_NORTON.jpg",
    issue: "72",
  },
  "07/10/2022": {
    name: ["ELVIS PRESLEY", "ELVIS"],
    image: "ELVIS_PRESLEY.jpg",
    issue: "73",
  },
  "07/11/2022": {
    name: ["BRUCE WILLIS", "BRUCE", "WILLIS"],
    image: "BRUCE_WILLIS.jpg",
    issue: "74",
  },
  "07/12/2022": {
    name: [
      "DARIUS RUCKER",
      "DARIUS RUTGER",
      "DARIUS",
      "RUCKER",
      "HOOTIE",
      "HOOTIE AND THE BLOWFISH",
    ],
    image: "DARIUS_RUCKER.jpg",
    issue: "75",
  },
  "07/13/2022": {
    name: ["JOHN CANDY", "JOHN", "CANDY", "UNCLE BUCK"],
    image: "JOHN_CANDY.jpg",
    issue: "76",
  },
  "07/14/2022": {
    name: ["RICHARD GERE", "RICHARD GEAR", "RICH GERE", "RICHARD", "GERE"],
    image: "RICHARD_GERE.jpg",
    issue: "77",
  },
  "07/15/2022": {
    name: ["AL GORE", "AL", "GORE"],
    image: "AL_GORE.jpg",
    issue: "78",
  },
  "07/16/2022": {
    name: ["PAUL SHAFFER", "PAUL", "SHAFFER", "PAUL SCHAFFER"],
    image: "PAUL_SHAFFER.jpg",
    issue: "79",
  },
  "07/17/2022": {
    name: ["SETH MEYERS", "SETH MYERS", "SETH", "MEYERS"],
    image: "SETH_MEYERS.jpg",
    issue: "80",
  },
  "07/18/2022": {
    name: ["ELIJAH WOOD", "ELIJIAH WOOD", "ELIJAH WOODS", "ELIJIAH WOODS"],
    image: "ELIJAH_WOOD.jpg",
    issue: "81",
  },
  "07/19/2022": {
    name: ["DONALD GLOVER", "CHILDISH GAMBINO", "DONALD", "GLOVER"],
    image: "DONALD_GLOVER.jpg",
    issue: "82",
  },
  "07/20/2022": {
    name: ["ALEX TREBEK", "ALEX", "TREBEK", "JEOPARDY"],
    image: "ALEX_TREBEK.jpg",
    issue: "83",
  },
  "07/21/2022": {
    name: ["CARROT TOP", "CARROTTOP"],
    image: "CARROT_TOP.jpg",
    issue: "84",
  },
  "07/22/2022": {
    name: [
      "EDDIE MURPHY",
      "EDDIE MURPHEY",
      "EDDY MURPHY",
      "EDDY MURPHEY",
      "EDDIE",
      "MURPHY",
    ],
    image: "EDDIE_MURPHY.jpg",
    issue: "85",
  },
  "07/23/2022": {
    name: [
      "JOHNNY KNOXVILLE",
      "JONNY KNOXVILLE",
      "JACKASS",
      "JOHNNY",
      "KNOXVILLE",
    ],
    image: "JOHNNY_KNOXVILLE.jpg",
    issue: "86",
  },
  "07/24/2022": {
    name: ["MAX WEINBERG", "MAX WINEBERG", "MAX", "WEINBERG"],
    image: "MAX_WEINBERG.jpg",
    issue: "87",
  },
  "07/25/2022": {
    name: [
      "WILL FERRELL",
      "WILL FARRELL",
      "WILL FERREL",
      "WILL FARREL",
      "RON BURGUNDY",
    ],
    image: "WILL_FERRELL.jpg",
    issue: "88",
  },
  "07/26/2022": {
    name: ["KEVIN SMITH", "KEVIN", "SMITH", "SILENT BOB"],
    image: "KEVIN_SMITH.jpg",
    issue: "89",
  },
  "07/27/2022": {
    name: ["DICK GREGORY", "DICK GREGGORY", "DICK", "GREGORY"],
    image: "DICK_GREGORY.jpg",
    issue: "90",
  },
  "07/28/2022": {
    name: ["PRINCE HARRY", "PRINCE", "HARRY"],
    image: "PRINCE_HARRY.jpg",
    issue: "91",
  },
  "07/29/2022": {
    name: ["TIM MEADOWS", "TIM", "MEADOWS"],
    image: "TIM_MEADOWS.jpg",
    issue: "92",
  },
  "07/30/2022": {
    name: ["TREY ANASTASIO", "TRAY ANASTASIO", "TRAY", "ANASTASIO", "PHISH"],
    image: "TREY_ANASTASIO.jpg",
    issue: "93",
  },
  "07/31/2022": {
    name: ["JIMMY FALLON", "JIMMY", "FALLON", "JIMMY FALON"],
    image: "JIMMY_FALLON.jpg",
    issue: "94",
  },
  "08/01/2022": {
    name: ["BILLY JOEL", "BILLIE JOEL", "BILLY", "JOEL", "BILLY JOELLE"],
    image: "BILLY_JOEL.jpg",
    issue: "95",
  },
  "08/02/2022": {
    name: [
      "BILLY RAY CYRUS",
      "BILLY RAY",
      "BILLY",
      "RAY",
      "ACHEY BREAKY HEART",
    ],
    image: "BILLY_RAY_CYRUS.jpg",
    issue: "96",
  },
  "08/03/2022": {
    name: ["PAUL NEWMAN", "PAUL", "NEWMAN"],
    image: "PAUL_NEWMAN.jpg",
    issue: "97",
  },
  "08/04/2022": {
    name: ["EARNEST HEMMINGWAY", "EARNEST", "HEMMINGWAY"],
    image: "EARNEST_HEMMINGWAY.jpg",
    issue: "98",
  },
  "08/05/2022": {
    name: ["FIDEL CASTRO", "FIDEL", "CASTRO"],
    image: "FIDEL_CASTRO.jpg",
    issue: "99",
  },
  "08/06/2022": {
    name: ["GEORGE CARLIN", "GEORGE", "CARLIN", "GEORGE KARLIN"],
    image: "GEORGE_CARLIN.jpg",
    issue: "100",
  },
  "09/02/2022": {
    name: [
      "BEN STILLER",
      "BENJAMIN STILLER",
      "BEN",
      "STILLER",
      "MEET THE PARENTS",
      "ZOOLANDER",
    ],
    image: "BEN_STILLER.jpg",
    issue: "101",
  },
  "09/03/2022": {
    name: ["MICHAEL PHELPS", "MICHAEL", "PHELPS", "OLYMPICS", "SWIMMER"],
    image: "MICHAEL_PHELPS.jpg",
    issue: "102",
  },
  "09/04/2022": {
    name: [
      "NICOLAS CAGE",
      "NIKOLAS CAGE",
      "NICHOLAS CAGE",
      "NICK CAGE",
      "NICOLAS",
      "CAGE",
      "NATIONAL TREASURE",
    ],
    image: "NICOLAS_CAGE.jpg",
    issue: "103",
  },
  "09/05/2022": {
    name: ["MEL GIBSON", "MEL", "GIBSON"],
    image: "MEL_GIBSON.jpg",
    issue: "104",
  },
  "09/06/2022": {
    name: ["RYAN REYNOLDS", "RYAN RENOLDS", "RYAN", "REYNOLDS", "DEADPOOL"],
    image: "RYAN_REYNOLDS.jpg",
    issue: "105",
  },
  "09/07/2022": {
    name: ["OMARION"],
    image: "OMARION.jpg",
    issue: "106",
  },
  "09/08/2022": {
    name: [
      "KUMAL NANJIANI",
      "KUMAL",
      "NANJIANI",
      "KUMAL NANJANI",
      "KUMAL NIANJANI",
      "THE BIG SICK",
    ],
    image: "KUMAL_NANJIANI.jpg",
    issue: "107",
  },
  "09/09/2022": {
    name: ["CHRIS PRATT", "CHRIS PRAT", "CHRIS", "PRATT"],
    image: "CHRIS_PRATT.jpg",
    issue: "108",
  },
  "09/10/2022": {
    name: ["ANDREW GARFIELD", "ANDREW", "GARFIELD", "SPIDERMAN"],
    image: "ANDREW_GARFIELD.jpg",
    issue: "109",
  },
  "09/11/2022": {
    name: ["TOM CRUISE"],
    image: "TOM_CRUISE.jpg",
    issue: "110",
  },
  "09/13/2022": {
    name: ["JOHN LEGEND", "JOHN", "LEGEND", "JON LEGEND"],
    image: "JOHN_LEGEND.jpg",
    issue: "111",
  },
  "09/14/2022": {
    name: ["JOHN CHO", "JON CHO", "JOHN CHOE", "JOHN", "CHO"],
    image: "JOHN_CHO.jpg",
    issue: "112",
  },
  "09/15/2022": {
    name: [
      "DAVID SCHWIMMER",
      "DAVID SWIMMER",
      "DAVID",
      "SCHWIMMER",
      "ROSS",
      "FRIENDS",
    ],
    image: "DAVID_SCHWIMMER.jpg",
    issue: "113",
  },
  "09/16/2022": {
    name: [
      "SALMAN RUSHDIE",
      "SALMON RUSHDIE",
      "SAMAN RUSHDIE",
      "SALMAN RUSHDY",
    ],
    image: "SALMAN_RUSHDIE.jpg",
    issue: "114",
  },
  "09/17/2022": {
    name: ["TONY ROBBINS", "TONY ROBINS", "TONY", "ROBBINS"],
    image: "TONY_ROBBINS.jpg",
    issue: "115",
  },
  "09/21/2022": {
    name: ["KAL PENN", "TAJ", "KAL", "PENN", "KUMAR"],
    image: "KAL_PENN.jpg",
    issue: "116",
  },
  "09/22/2022": {
    name: ["NICK JONAS", "NICK", "JONAS", "JONAS BROTHERS"],
    image: "NICK_JONAS.jpg",
    issue: "117",
  },
  "09/23/2022": {
    name: [
      "JAMES GANDOLFINI",
      "JAMES",
      "GANDOLFINI",
      "TONY",
      "TONY SOPRANO",
      "THE SOPRANOS",
    ],
    image: "JAMES_GANDOLFINI.jpg",
    issue: "118",
  },
  "09/24/2022": {
    name: [
      "BLAKE SHELTON",
      "BLAKE",
      "SHELTON",
      "GWEN STEFANI'S HUSBAND",
      "THE VOICE",
    ],
    image: "BLAKE_SHELTON.jpg",
    issue: "119",
  },
  "09/25/2022": {
    name: ["CHRIS TUCKER", "CHRIS", "TUCKER", "RUSH HOUR"],
    image: "CHRIS_TUCKER.jpg",
    issue: "120",
  },
  "09/26/2022": {
    name: ["ZAC EFRON", "ZACK EFRON", "ZAC", "EFRON", "HIGH SCHOOL MUSICAL"],
    image: "ZAC_EFRON.jpg",
    issue: "121",
  },
  "09/27/2022": {
    name: [
      "JULIAN ASSANGE",
      "JULIAN",
      "ASSANGE",
      "JULIEN ASSANGE",
      "JULIAN ASANGE",
      "WIKILEAKS",
    ],
    image: "JULIAN_ASSANGE.jpg",
    issue: "122",
  },
  "09/28/2022": {
    name: ["50 CENT", "CURTIS JACKSON", "CURTIS", "JACKSON"],
    image: "50_CENT.jpg",
    issue: "123",
  },
  "09/29/2022": {
    name: ["MICHAEL BUBLE", "MICHAEL", "BUBLE"],
    image: "MICHAEL_BUBLE.jpg",
    issue: "124",
  },
  "10/01/2022": {
    name: ["SEAN CONNERY, SHAWN CONNERY", "JAMES BOND", "SEAN", "CONNERY"],
    image: "SEAN_CONNERY.jpg",
    issue: "125",
  },
  "10/06/2022": {
    name: ["CORY FELDMAN", "CORRY FELDMAN", "CORY FELDMEN", "CORY", "FELDMAN"],
    image: "CORY_FELDMAN.jpg",
    issue: "126",
  },
  "10/07/2022": {
    name: ["DMX", "EARL SIMMONS"],
    image: "DMX.jpg",
    issue: "127",
  },
  "10/08/2022": {
    name: [
      "LARRY THE CABLE GUY",
      "DAN WHITNEY",
      "LARRY",
      "CABLE GUY",
      "THE CABLE GUY",
    ],
    image: "LARRY_THE_CABLE_GUY.jpg",
    issue: "128",
  },
  "10/09/2022": {
    name: ["RON HOWARD", "RON", "HOWARD", "RICHIE CUNNINGHAM"],
    image: "RON_HOWARD.jpg",
    issue: "129",
  },
  "10/10/2022": {
    name: ["ROBIN WILLIAMS", "ROBIN", "WILLIAMS", "ROBBIN WILLIAMS"],
    image: "ROBIN_WILLIAMS.jpg",
    issue: "130",
  },
  "10/12/2022": {
    name: ["WOLF BLITZER", "WOLF BLITZEN", "WOLF", "BLITZER", "WOLFE BLITZER"],
    image: "WOLF_BLITZER.jpg",
    issue: "131",
  },
  "10/13/2022": {
    name: ["TIGER WOODS", "TIGER WOOD", "TIGER", "WOODS", "GOLF"],
    image: "TIGER_WOODS.jpg",
    issue: "132",
  },
  "10/14/2022": {
    name: ["SIMON COWELL", "SIMON", "COWELL", "SIMON COWEL"],
    image: "SIMON_COWELL.jpg",
    issue: "133",
  },
  "10/15/2022": {
    name: [
      "TOM WELLING",
      "TOM WELLINGTON",
      "THOMAS WELLING",
      "TOM",
      "WELLING",
      "SMALLVILLE",
      "SUPERMAN",
      "CLARK KENT",
    ],
    image: "TOM_WELLING.jpg",
    issue: "134",
  },
  "10/16/2022": {
    name: [
      "JOSEPH GORDON-LEVITT",
      "JOSEPH GORDON LEVITT",
      "JOSEPH",
      "GORDON-LEVITT",
      "JOSEPH GORDON LEVITTE",
      "JOSEPH GORDON LEVIT",
      "ROBIN",
    ],
    image: "JOSEPH_GORDON-LEVITT.jpg",
    issue: "135",
  },
  "10/21/2022": {
    name: ["JASON ALEXANDER", "GEORGE", "GEORGE COSTANZA"],
    image: "JASON_ALEXANDER.jpg",
    issue: "136",
  },
  "10/22/2022": {
    name: ["BEN KINGSLEY", "SIR BEN KINGSLEY", "BEN", "KINGSLEY"],
    image: "BEN_KINGSLEY.jpg",
    issue: "137",
  },
  "10/23/2022": {
    name: ["TOM GREEN", "TOM", "GREEN"],
    image: "TOM_GREEN.jpg",
    issue: "138",
  },
  "10/24/2022": {
    name: ["NATHAN LANE", "NATE LANE", "NATHAN", "LANE", "THE PRODUCERS"],
    image: "NATHAN_LANE.jpg",
    issue: "139",
  },
  "10/25/2022": {
    name: ["MICHAEL J. FOX", "MICHAEL J FOX", "MICHAEL FOX"],
    image: "MICHAEL_J_FOX.jpg",
    issue: "140",
  },
  "10/26/2022": {
    name: ["FRED DURST", "LIMP BIZKIT", "FRED", "DURST"],
    image: "FRED_DURST.jpg",
    issue: "141",
  },
  "10/27/2022": {
    name: ["LIONEL RICHIE", "LIONEL RITCHIE"],
    image: "LIONEL_RICHIE.jpg",
    issue: "142",
  },
  "10/28/2022": {
    name: ["MACAULEY CULKIN", "MCCAULEY CULKIN", "KEVIN MCCALLISTER"],
    image: "MACAULEY_CULKIN.jpg",
    issue: "143",
  },
  "10/29/2022": {
    name: ["SAMMY HAGAR", "VAN HALEN", "SAM HAGAR"],
    image: "SAMMY_HAGAR.jpg",
    issue: "144",
  },
  "10/30/2022": {
    name: ["GLENN BECK", "GLENN", "BECK", "GLEN BECK"],
    image: "GLENN_BECK.jpg",
    issue: "145",
  },
  "10/31/2022": {
    name: [
      "DAVE PORTNOY",
      "DAVID PORTNOY",
      "ONE BITE",
      "EL PREZ",
      "DAVEY PAGEVIEWS",
    ],
    image: "DAVE_PORTNOY.jpg",
    issue: "146",
  },
  "11/01/2022": {
    name: ["GEORGE CLINTON", "GEORGE", "CLINTON"],
    image: "GEORGE_CLINTON.jpg",
    issue: "147",
  },
  "11/02/2022": {
    name: ["ELON MUSK"],
    image: "ELON_MUSK.jpg",
    issue: "148",
  },
  "11/03/2022": {
    name: [
      "ANDRE AGASSI",
      "ANDRES AGASSI",
      "ANDRE AGGASI",
      "ANDRE AGASI",
      "ANDRE",
      "AGASSI",
      "TENNIS",
    ],
    image: "ANDRE_AGASSI.jpg",
    issue: "149",
  },
  "11/04/2022": {
    name: ["SPIKE LEE", "SPIKE", "SPIKE JONZE"],
    image: "SPIKE_LEE.jpg",
    issue: "150",
  },
  "11/05/2022": {
    name: ["JOHN MAYER", "JOHN", "MAYER", "JOHN MAYOR"],
    image: "JOHN_MAYER.jpg",
    issue: "151",
  },
  "11/06/2022": {
    name: ["KEVIN FEDERLINE", "KEVIN", "FEDERLINE", "K-FED", "KFED"],
    image: "KEVIN_FEDERLINE.jpg",
    issue: "152",
  },
  "11/07/2022": {
    name: ["DJ KHALED", "DJ KALED", "DJ KAHLED", "WE THE BEST MUSIC"],
    image: "DJ_KHALED.jpg",
    issue: "153",
  },
  "11/08/2022": {
    name: ["JAMES CORDEN", "JAMES", "CORDEN", "CARPOOL KARAOKE"],
    image: "JAMES_CORDEN.jpg",
    issue: "154",
  },
  "11/09/2022": {
    name: [
      "CAT STEVENS",
      "YUSUF STEVENS",
      "YUSUF CAT STEVENS",
      "CAT",
      "STEVENS",
    ],
    image: "CAT_STEVENS.jpg",
    issue: "155",
  },
  "11/10/2022": {
    name: ["TUPAC SHAKUR", "TUPAC", "2PAC"],
    image: "TUPAC_SHAKUR.jpg",
    issue: "156",
  },
  "11/11/2022": {
    name: ["DAVE GROHL", "DAVE GROLL", "FOO FIGHTERS", "DAVE", "GROHL"],
    image: "DAVE_GROHL.jpg",
    issue: "157",
  },
  "11/12/2022": {
    name: ["JOHN RITTER", "JOHN", "RITTER", "THREES COMPANY"],
    image: "JOHN_RITTER.jpg",
    issue: "158",
  },
  "11/13/2022": {
    name: ["USHER", "USHER RAYMOND"],
    image: "USHER.jpg",
    issue: "159",
  },
  "11/14/2022": {
    name: ["JACK WHITE", "WHITE STRIPES", "JACK", "WHITE"],
    image: "JACK_WHITE.jpg",
    issue: "160",
  },
  "11/15/2022": {
    name: ["ABRAHAM LINCOLN", "PRESIDENT LINCOLN", "LINCOLN"],
    image: "ABRAHAM_LINCOLN.jpg",
    issue: "161",
  },
  "11/16/2022": {
    name: ["BECK"],
    image: "BECK.jpg",
    issue: "162",
  },
  "11/17/2022": {
    name: ["SNOOP DOGG", "SNOOP", "SNOOP DOGGY DOGG", "CALVIN HARRIS"],
    image: "SNOOP_DOGG.jpg",
    issue: "163",
  },
  "11/17/2022": {
    name: ["JERRY GARCIA", "GRATEFUL DEAD", "JERRY", "GARCIA"],
    image: "JERRY_GARCIA.jpg",
    issue: "164",
  },
  "11/18/2022": {
    name: ["KEVIN BACON", "KEVIN", "BACON"],
    image: "KEVIN_BACON.jpg",
    issue: "165",
  },
  "11/19/2022": {
    name: ["NAS"],
    image: "NAS.jpg",
    issue: "166",
  },
  "11/20/2022": {
    name: ["SIGMUND FREUD", "FREUD"],
    image: "SIGMUND_FREUD.jpg",
    issue: "167",
  },
  "11/21/2022": {
    name: ["JAMES HETFIELD", "METALLICA"],
    image: "JAMES_HETFIELD.jpg",
    issue: "168",
  },
  "11/22/2022": {
    name: [
      "MARTIN LUTHER KING JR.",
      "MARTIN LUTHER KING JR",
      "MARTIN LUTHER KING",
      "MARTIN LUTHOR KING JUNIOR",
      "MARTIN LUTHOR KING JR",
      "MARTIN LUTHOR KING JR.",
      "MARTIN LUTHOR KING JUNIOR",
      "MARTIN LUTHOR KING",
    ],
    image: "MARTIN_LUTHER_KING.jpg",
    issue: "169",
  },
  "11/23/2022": {
    name: [
      "PAUL REUBENS",
      "PAUL REUBEN",
      "PEEWEE",
      "PEEWEE HERMAN",
      "PAUL",
      "REUBENS",
    ],
    image: "PAUL_REUBENS.jpg",
    issue: "170",
  },
  "11/24/2022": {
    name: [
      "ROBERT DOWNEY JR",
      "ROBERT DOWNEY JR.",
      "ROBERT DOWNEY JUNIOR",
      "ROBERT DOWNEY",
      "ROBERT DOWNY JR",
      "ROBERTY DOWNY JR.",
      "ROBERT DOWNY JUNIOR",
    ],
    image: "ROBERT_DOWNEY_JR.jpg",
    issue: "171",
  },
  "11/25/2022": {
    name: ["RUSSELL PETERS", "RUSSELL", "PETERS", "RUSSEL PETERS"],
    image: "RUSSELL_PETERS.jpg",
    issue: "172",
  },
  "11/26/2022": {
    name: [
      "JAMES EARL JONES",
      "JAMES JONES",
      "JAMES EARLE JONES",
      "DARTH VADER",
    ],
    image: "JAMES_EARL_JONES.jpg",
    issue: "173",
  },
  "11/27/2022": {
    name: [
      "MARK RUFFALO",
      "MARK RUFFOLO",
      "MARC RUFFALO",
      "MARK RUFFOLO",
      "MARK",
      "RUFFALO",
    ],
    image: "MARK_RUFFALO.jpg",
    issue: "174",
  },
  "11/28/2022": {
    name: ["JASON MOMOA", "JASON MAMOA", "AQUAMAN", "JASON", "MOMOA"],
    image: "JASON_MOMOA.jpg",
    issue: "175",
  },
  "11/29/2022": {
    name: ["DEREK JETER", "DEREK", "JETER", "YANKEES"],
    image: "DEREK_JETER.jpg",
    issue: "176",
  },
  "11/30/2022": {
    name: ["NELSON MANDELA", "NELSON MANDELLA"],
    image: "NELSON_MANDELA.jpg",
    issue: "177",
  },
  "11/31/2022": {
    name: ["CLINT EASTWOOD", "CLINT", "EASTWOOD"],
    image: "CLINT_EASTWOOD.jpg",
    issue: "178",
  },
  "12/01/2022": {
    name: [
      "LAURENCE FISHBURNE",
      "LAWRENCE FISHBURNE",
      "LAURENCE FISHBURN",
      "LAWRENCE FISHBURN",
      "MORPHEUS",
    ],
    image: "LAURENCE_FISHBURNE.jpg",
    issue: "179",
  },
  "12/01/2022": {
    name: [
      "JESSE VENTURA",
      "JESSE THE BODY VENTURA",
      "THE BODY",
      "JESSE",
      "VENTURA",
    ],
    image: "JESSE_VENTURA.jpg",
    issue: "180",
  },
  "12/02/2022": {
    name: ["JOSH GROBAN", "JOSH", "GROBAN"],
    image: "JOSH_GROBAN.jpg",
    issue: "181",
  },
  "12/03/2022": {
    name: ["ADRIEN GRENIER", "ADRIEN GRENIERE", "ENTOURAGE", "ADRIENE GRENIER"],
    image: "ADRIEN_GRENIER.jpg",
    issue: "182",
  },
  "12/04/2022": {
    name: ["JOEY FATONE", "JOEY", "FATONE", "NSYNC"],
    image: "JOEY_FATONE.jpg",
    issue: "183",
  },
  "12/05/2022": {
    name: ["AXL ROSE", "AXL", "ROSE", "GUNS N ROSES", "AXEL ROSE"],
    image: "AXL_ROSE.jpg",
    issue: "184",
  },
  "12/06/2022": {
    name: ["CHRIS EVANS", "CHRIS", "EVANS", "CAPTAIN AMERICA"],
    image: "CHRIS_EVANS.jpg",
    issue: "185",
  },
  "12/07/2022": {
    name: [
      "JALEEL WHITE",
      "URKEL",
      "STEVE URKEL",
      "URKLE",
      "STEVE URKLE",
      "JALEEL",
      "WHITE",
    ],
    image: "JALEEL_WHITE.jpg",
    issue: "186",
  },
  "12/08/2022": {
    name: [
      "FRANKLIN ROOSEVELT",
      "FRANKLIN DELANO ROOSEVELT",
      "ROOSEVELT",
      "FRANKLIN D ROOSEVELT",
      "FRANKLIN ROSEVELT",
    ],
    image: "FRANKLIN_ROOSEVELT.jpg",
    issue: "187",
  },
  "12/09/2022": {
    name: ["MATTHEW BRODERICK", "MATTHEW", "BRODERICK", "FERRIS BEULLER"],
    image: "MATTHEW_BRODERICK.jpg",
    issue: "188",
  },
  "12/10/2022": {
    name: [
      "CARSON DALY",
      "CARSON DAILY",
      "CARSYN DALY",
      "CARSON",
      "DALY",
      "TRL",
      "CARSON DAILEY",
    ],
    image: "CARSON_DALY.jpg",
    issue: "189",
  },
  "12/11/2022": {
    name: ["GARTH BROOKS", "GARTH", "BROOKS"],
    image: "GARTH_BROOKS.jpg",
    issue: "190",
  },
  "12/12/2022": {
    name: ["MARC ANTHONY", "MARK ANTHONY", "MARC", "ANTHONY"],
    image: "MARC_ANTHONY.jpg",
    issue: "191",
  },
  "12/13/2022": {
    name: ["MATT DILLON", "MATT DYLAN", "MATTHEW DILLON", "MATT", "DILLON"],
    image: "MATT_DILLON.jpg",
    issue: "192",
  },
  "12/14/2022": {
    name: ["DANIEL DAY LEWIS", "DANIEL LEWIS", "DANIEL DAY LOUIS", "LINCOLN"],
    image: "DANIEL_DAY_LEWIS.jpg",
    issue: "193",
  },
  "12/15/2022": {
    name: ["ICE T", "ICE-T", "ICET", "ICE TEA", "ICED T"],
    image: "ICE_T.jpg",
    issue: "194",
  },
  "12/16/2022": {
    name: ["DR DRE", "DR. DRE", "DR.DRE", "DOCTOR DRE"],
    image: "DR_DRE.jpg",
    issue: "195",
  },
  "12/17/2022": {
    name: ["ORLANDO BLOOM", "ORLANDO", "BLOOM"],
    image: "ORLANDO_BLOOM.jpg",
    issue: "196",
  },
  "12/18/2022": {
    name: ["CHRISTOPH WALTZ", "CHRISTOPH", "WALTZ", "CHRISTOPHER WALTZ"],
    image: "CHRISTOPH_WALTZ.jpg",
    issue: "197",
  },
  "12/19/2022": {
    name: ["MARC MARON", "MARK MARON", "MARC", "MARON"],
    image: "MARC_MARON.jpg",
    issue: "198",
  },
  "12/20/2022": {
    name: [
      "STEVEN SEAGAL",
      "STEVEN SEGAL",
      "STEPHEN SEAGAL",
      "STEVEN",
      "SEAGAL",
    ],
    image: "STEVEN_SEAGAL.jpg",
    issue: "199",
  },
  "12/21/2022": {
    name: [
      "STEVEN SEAGAL",
      "STEVEN SEGAL",
      "STEPHEN SEAGAL",
      "STEVEN",
      "SEAGAL",
    ],
    image: "STEVEN_SEAGAL.jpg",
    issue: "199",
  },
  "12/22/2022": {
    name: [
      "RINGO STARR",
      "RINGO",
      "STARR",
      "BEATLES",
      "RINGO STAR",
      "THE BEATLES",
    ],
    image: "RINGO_STARR.jpg",
    issue: "200",
  },
};

const getTodaysGameDate = () => {
  let today = new Date();
  const yyyy = today.getFullYear().toString();
  let mm = today.getMonth() + 1;
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  today = mm + "/" + dd + "/" + yyyy;
  return today;
};

const state = {
  imageStep: 0,
  inputValue: "",
  answer: "",
  status: "",
  image: "",
  scoreCard: {
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
  },
};

const stepMap = {
  0: 0.85,
  1: 0.75,
  2: 0.65,
  3: 0.58,
  4: 0.5,
  5: 0.45,
  6: 0.35,
  7: 0,
};

function imageExists(image_url) {
  var http = new XMLHttpRequest();
  http.open("HEAD", location.href + "men/" + image_url, false);
  http.send();
  return http.status != 404;
}

const findLastSuccessfulImage = () => {
  let exists = false;
  let data;
  let gameDataKeys = Object.keys(gameData);
  for (let i = gameDataKeys.length - 1; i > 0; i--) {
    exists = imageExists(gameData[gameDataKeys[i]].image);
    data = gameDataKeys[i];
    if (!isPastPuzzle(gameDataKeys[i])) exists = false;
    if (exists) return data;
  }

  return data;
};

function stripQueryStringAndHashFromPath(url) {
  return url.split("?")[0].split("#")[0];
}

const onLoad = (testDate) => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  let paramObj = Object.fromEntries(urlSearchParams);
  let param = Object.values(paramObj)[0];
  let lastPuzzle = findLastSuccessfulImage();
  todaysGameDate =
    testDate ||
    (((gameData[param] && isPastPuzzle(param)) ||
      Object.values(paramObj)[1] == "admin") &&
      param) ||
    (gameData[getTodaysGameDate()] && getTodaysGameDate()) ||
    lastPuzzle;
  state.answer = gameData[todaysGameDate].name;
  state.image = "/men/" + gameData[todaysGameDate].image;
  state.issue = gameData[todaysGameDate].issue;
  setImage();
  updateScoreCard();
  window.history.pushState(
    "string",
    "Beardle",
    stripQueryStringAndHashFromPath(location.href)
  );
};

const setImage = () => {
  image.src = state.image;
};

const adjustImage = (step) => {
  document.getElementById("loading-window").style.display = "none";
  document.getElementById("game-container").style.display = "block";
  let imageWin = document.getElementById("image-win");
  imageCover.style.overflow = "hidden";
  // let height = ($(image).height() * stepMap[step])
  imageCover.style.height = $(image).height() * stepMap[step] + "px";
  imageCover.style.width = $(image).width() + "px";
  imageCover.style.margin = "auto";
  imageCover.style.maxHeight = $(image).height() * stepMap[step] + "px";
  imageWin.style.height = $(image).height() + "px";
  imageWin.style.width = $(image).width() + "px";
  imageWin.style.margin = "auto";
  imageWin.style.maxHeight = $(image).height() + "px";
  imageContainer.style.width = $(image).width() + "px";
  imageContainer.style.maxHeight = $(image).height() + "px";
};

const getShareText = (forCopy) => {
  let y = "🟡";
  let g = "🟢";
  let date = todaysGameDate;
  let str = "";
  if (forCopy) {
    str = `https://beardle.app `;
  } else {
    str = `beardle.app `;
  }
  str += `puzzle #: ${state.issue} | tries: ${
    state.status == "win" ? state.imageStep + 1 : "X"
  } | `;
  for (let i = 0; i < state.imageStep; i++) {
    if (state.status == "win" || i < state.imageStep) str += y;
  }
  if (state.status == "win") str += g;
  return str;
};

const checkWin = () => {
  if (state.status == "win") {
    $("#controls-container").hide();
    $("#image-win").css("display", "block");
    $("#image-win").css("background", "none");
    $("#status-text").text("You Win!");
    $("#name-text").text(state.answer[0]);

    $("#image-cover").css("display", "none");
    $("#custom-share-container").show();
    $("#intro").css("display", "none");
    $("#countdown-clock").css("display", "block");

    shareText.innerHTML = getShareText();
  }
  if (state.status == "lose") {
    $("#controls-container").hide();
    $("#custom-share-container").show();
    $("#image-cover").css("display", "none");
    $("#image-win").css("display", "block");

    $("#status-text").text("You Lose!");
    $("#name-text").text(state.answer[0]);

    $("#intro").css("display", "none");
    $("#countdown-clock").css("display", "block");

    shareText.innerHTML = getShareText();
  }
};

const checkGuess = () => {
  state.inputValue = state.inputValue.trimEnd();
  if (state.answer.find((name) => name == state.inputValue)) {
    state.scoreCard[state.imageStep] = "c";
    state.status = "win";
  } else {
    if (state.stepMap != 7) {
      state.scoreCard[state.imageStep] = "X";
      if (state.imageStep < 7) {
        state.imageStep++;
        adjustImage(state.imageStep);
      } else if (state.imageStep == 7) {
        state.status = "lose";
        state.imageStep++;
        adjustImage(state.imageStep);
      }
    }
  }
  if (state.imageStep == 7) $("#hint-button").text("give up");
  checkWin();
};

const updateScoreCard = (isWin) => {
  document.getElementById("score-tracker").innerHTML =
    state.imageStep < 8 ? `try ${state.imageStep + 1}/8:` : "no more tries";
  if (document.getElementById("score-tracker").innerHTML == "no more tries")
    document.getElementById("score-tracker").style.fontSize = "1rem";
  for (let card in state.scoreCard) {
    if (!isWin) {
      if (state.imageStep > 7) {
        document.getElementById("sc" + 7).style.color = "#F7B02B";
        document.getElementById("sc" + 7).innerHTML = "X";
        // state.imageStep = 7
        return;
      }
      if (card < state.imageStep) {
        if (state.scoreCard[card] == "c") {
          document.getElementById("sc" + state.imageStep).innerHTML = "check";
          document.getElementById("sc" + card).style.color = "green";
        } else {
          document.getElementById("sc" + card).style.color = "#F7B02B";
          document.getElementById("sc" + card).innerHTML = "X";
        }
      } else {
        return;
      }
    } else {
      if (card == state.imageStep) {
        if (state.scoreCard[card] == "c") {
          document.getElementById("sc" + card).style.color = "green";
          document.getElementById("sc" + state.imageStep).innerHTML = "✓";
        } else {
          document.getElementById("sc" + state.imageStep).style.color =
            "#F7B02B";
          document.getElementById("sc" + state.imageStep).innerHTML = "X";
        }
      }
    }
  }
};

const updateFbShare = () => {
  // let fbImage = (document.getElementsByName('fb-image'))[0];
  // fbImage.content = 'icon.jpeg'
  // console.log(fbImage)
  // let fbDescription = (document.getElementsByName('fb-description'))[0];
  // fbDescription = 'testtext'
  // fbShareButton = document.getElementById('fb-share-button')
  // fbShareButton['data-href'] = 'https://beardle.app/step5'
};

const checkStatus = () => {
  if (state.status != "win") {
    updateScoreCard(false);
  } else {
    updateScoreCard(true);
    // state.imageStep = 7
    adjustImage(state.imageStep);
  }
  updateFbShare();
};

const gameReset = () => {
  state = {
    imageStep: 0,
    inputValue: "",
    status: "",
  };
  $("#image-win").style.display = "none";
  $("#image-win").text = "You Win!";
};

$(image).on("load", function () {
  adjustImage(state.imageStep);
});

$("#hint-button").on("click", () => {
  checkGuess(state.inputValue);
  checkStatus();
  // if (state.imageStep > 7) state.imageStep = 7
});

$("#guess-input").on("change", function () {
  this.value = this.value.toUpperCase();
  state.inputValue = this.value;
});

$("#guess-button").on("click", function (event) {
  event.preventDefault();
  if (state.inputValue == "") return;

  checkGuess(state.inputValue);
  checkStatus();
  $("#guess-input").val("");
  state.inputValue = "";
  // if (state.imageStep > 7) state.imageStep = 7
});
$("#guess-button").on("submit", function (event) {
  event.preventDefault();
  if (state.inputValue == "") return;

  checkGuess(state.inputValue);
  checkStatus();
  $("#guess-input").val("");
  state.inputValue = "";
  // if (state.imageStep > 7) state.imageStep = 7
});

$("#custom-share-button").on("click", function () {
  /* Get the text field */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(getShareText(true));
  this.innerHTML = "score copied to clipboard!";
  this.style.color = "green";
  setTimeout(() => {
    this.innerHTML = "share score";
    this.style.color = "black";
  }, 2000);
});

window.addEventListener("resize", () => {
  adjustImage(state.imageStep);
});

/* document.getElementById('testingid').addEventListener('click', () => {
    FB.ui({
        href: location.origin,
        method: 'share',
        // method: 'share_open_graph',
        action_type: 'og.shares',
        display: 'popup',
        quote: 'this is a quote',
        action_properties: JSON.stringify({
          object: {
            'og:url': 'https://beardle.app',
            'og:title': 'Title to show',
            'og:description': 'The description',
            'og:image': 'icon.jpeg'
          }
        })
      }, function(response){console.log(response)}).then(data=> {console.log({data})});
}) */

////countdown clock

var today = new Date();

var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
tomorrow.setHours(0, 0, 0, 0);

var diffMs = tomorrow - today; // milliseconds between now & Christmas
var minutes = Math.floor(diffMs / 1000 / 60);

countdown(minutes);

//alert(diffDays + " days, " + diffHrs + " hours, " + diffMins + " minutes until Christmas 2015 =)");

function countdown(minutes) {
  var target_date = new Date().getTime() + minutes * 60 * 1000; // set the countdown date
  var time_limit = minutes * 60 * 1000;
  //set actual timer
  /*setTimeout(
    function() 
    {
      alert( 'done' );
    }, time_limit );*/

  var days, hours, minutes, seconds; // variables for time units

  var countdown = document.getElementById("tiles"); // get tag element

  getCountdown();

  setInterval(function () {
    getCountdown();
  }, 1000);

  function getCountdown() {
    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;

    if (seconds_left >= 0) {
      if (seconds_left * 1000 < time_limit / 2) {
        $("#tiles").removeClass("color-full");
        $("#tiles").addClass("color-half");
      }
      if (seconds_left * 1000 < time_limit / 4) {
        $("#tiles").removeClass("color-half");
        $("#tiles").addClass("color-empty");
      }

      days = pad(parseInt(seconds_left / 86400));
      seconds_left = seconds_left % 86400;

      hours = pad(parseInt(seconds_left / 3600));
      seconds_left = seconds_left % 3600;

      minutes = pad(parseInt(seconds_left / 60));
      seconds = pad(parseInt(seconds_left % 60));

      // format countdown string + set tag value
      countdown.innerHTML =
        "<span>" +
        hours +
        ":</span><span>" +
        minutes +
        ":</span><span>" +
        seconds +
        "</span>";
    }
  }

  function pad(n) {
    return (n < 10 ? "0" : "") + n;
  }
}

const openPastModal = () => {
  $("#past-modal-body").text("");
  let parent = document.createElement("div");
  let dates = Object.keys(gameData);
  dates.reverse();

  dates.forEach((date) => {
    if (isPastPuzzle(date)) {
      let comp = document.createElement("div");
      let link = document.createElement("a");
      let label = document.createElement("span");
      if (!isTodaysPuzzle(date)) {
        label.innerHTML = date + " " + "puzzle #: " + gameData[date].issue;
      } else {
        label.innerHTML = `today,` + " " + "puzzle #: " + gameData[date].issue;
      }
      comp.id = date;
      var params = {
        date: date,
      };

      var esc = encodeURIComponent;
      var query = Object.keys(params)
        .map((k) => esc(k) + "=" + esc(params[k]))
        .join("&");
      link.href = location.origin + "?" + query;
      comp.appendChild(link);
      link.appendChild(label);
      parent.appendChild(comp);
    }
  });
  document.getElementById("past-modal-body").appendChild(parent);
  $("#exampleModalLong").modal("show");
};

const closePastModal = () => {
  $("#exampleModalLong").modal("hide");
};

const openBlogModal = () => {
  $("#blogModal").modal("show");
};

const closeBlogModal = () => {
  $("#blogModal").modal("hide");
};

const isPastPuzzle = (date) => {
  let today = getTodaysGameDate();
  date = date.split("/");
  today = today.split("/");
  var newDate = new Date(date[2], date[0] - 1, date[1]).getTime();
  var newToday = new Date(today[2], today[0] - 1, today[1]).getTime();
  return newDate <= newToday ? true : false;
};

const isTodaysPuzzle = (date) => {
  let today = getTodaysGameDate();
  date = date.split("/");
  today = today.split("/");
  var newDate = new Date(date[2], date[1], date[0]).getTime();
  var newToday = new Date(today[2], today[1], today[0]).getTime();
  return newDate === newToday ? true : false;
};

$("#header").on("click", () => window.open(window.location.origin, "_self"));

const isImage = (image) => {
  var http = new XMLHttpRequest();
  let image_url = "/men/" + image;
  http.open("HEAD", image_url, false);
  http.send();
  // console.log(http.status, 'status')
  // console.log(image_url)
  return http.status != 404;
};

document.getElementById("sultanbros").addEventListener("click", () => {
  window.open("https://www.bensultan.com", "_blank");
});
