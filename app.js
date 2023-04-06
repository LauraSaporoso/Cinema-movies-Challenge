let container = document.getElementById('container');
let body = document.body;
const arr = [
    {
    sala: "Sala 1",
    titoloFilm: " John Wick: Chapter 4",
    dataI: "15/01",
    dataF: "25/02",
    locandinaFilm: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    descrizioneFilm: "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes."
},
{
    sala: "Sala 2",
    titoloFilm: " The Super Mario Bros. Movie",
    dataI: "20/01",
    dataF: "20/02",
    locandinaFilm: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
    descrizioneFilm: "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
},
{
    sala: "Sala 3",
    titoloFilm: " The Mandalorian",
    dataI: "12/01",
    dataF: "12/04",
    locandinaFilm: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/eU1i6eHXlzMOlEq0ku1Rzq7Y4wA.jpg",
    descrizioneFilm: "After the fall of the Galactic Empire, lawlessness has spread throughout the galaxy. A lone gunfighter makes his way through the outer reaches, earning his keep as a bounty hunter."
},
{
    sala: "Sala 4",
    titoloFilm: " Tetris",
    dataI: "23/01",
    dataF: "11/03",
    locandinaFilm: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4F2QwCOYHJJjecSvdOjStuVLkpu.jpg",
    descrizioneFilm: "In 1988, American video game salesman Henk Rogers discovers the video game Tetris. When he sets out to bring the game to the world, he enters a dangerous web of lies and corruption behind the Iron Curtain."
},
{
    sala: "Sala 5",
    titoloFilm: " Inside",
    dataI: "1/02",
    dataF: "23/02",
    locandinaFilm: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dXsiWJWwGwYwOQ6DfYFt5pPBMwT.jpg",
    descrizioneFilm: "An art thief becomes trapped in a New York penthouse after his heist goes awry. Imprisoned with nothing but priceless works of art, he must use all his cunning and invention to survive."
},
{
    sala: "Sala 6",
    titoloFilm: "Creed III",
    dataI: "15/01",
    dataF: "25/02",
    locandinaFilm: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/cvsXj3I9Q2iyyIo95AecSd1tad7.jpg",
    descrizioneFilm: "After dominating the boxing world, Adonis Creed has been thriving in both his career and family life. When a childhood friend and former boxing prodigy, Damien Anderson, resurfaces after serving a long sentence in prison, he is eager to prove that he deserves his shot in the ring. The face-off between former friends is more than just a fight. To settle the score, Adonis must put his future on the line to battle Damien — a fighter who has nothing to lose."
},
{
    sala: "Sala 7",
    titoloFilm: "Kill Boksoon",
    dataI: "15/01",
    dataF: "25/02",
    locandinaFilm: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/taYgn3RRpCGlTGdaGQvnSIOzXFy.jpg",
    descrizioneFilm: "At work, she's a renowned assassin. At home, she's a single mom to a teenage daughter. Killing? That's easy. It's parenting that's the hard part."
},
{
    sala: "Sala 8",
    titoloFilm: "The Good Mothers",
    dataI: "3/02",
    dataF: "21/04",
    locandinaFilm: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1WwKoGbQETx7erXfh5w1OW0BHEC.jpg",
    descrizioneFilm: "The true story of three courageous women inside the notorious Calabrian ‘Ndrangheta mafia, working with newly-minted female prosecutor, Alessandra Cerreti, to bring down down the criminal empire."
},
{
    sala: "Sala 9",
    titoloFilm: "Dungeons & Dragons: Honor Among Thieves",
    dataI: "9/01",
    dataF: "9/02",
    locandinaFilm: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6LuXaihVIoJ5FeSiFb7CZMtU7du.jpg",
    descrizioneFilm: "A charming thief and a band of unlikely adventurers undertake an epic heist to retrieve a lost relic, but things go dangerously awry when they run afoul of the wrong people."
},
{
    sala: "Sala 10",
    titoloFilm: "The Crossover",
    dataI: "18/03",
    dataF: "3/02",
    locandinaFilm: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ahL7MXhqvTul41uRrKaxycJhbUQ.jpg",
    descrizioneFilm: "The coming-of-age story of basketball prodigy twins Filthy (aka Josh) and JB who learn that even though they have so much that binds them together growing up is all about discovering what makes us unique."
},
{
    sala: "Sala 11",
    titoloFilm: "Air",
    dataI: "15/01",
    dataF: "25/02",
    locandinaFilm: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/76AKQPdH3M8cvsFR9K8JsOzVlY5.jpg",
    descrizioneFilm: "Discover the game-changing partnership between a then undiscovered Michael Jordan and Nike's fledgling basketball division which revolutionized the world of sports and culture with the Air Jordan brand."
},
{
    sala: "Sala 12",
    titoloFilm: "Dr. STONE",
    dataI: "3/01",
    dataF: "5/04",
    locandinaFilm: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/64DIVpWiGlvvJczMnyu8jojSYKm.jpg",
    descrizioneFilm: "One fateful day, all of humanity was petrified by a blinding flash of light. After several millennia, high schooler Taiju awakens and finds himself lost in a world of statues. However, he's not alone! His science-loving friend Senku's been up and running for a few months and he's got a grand plan in mind, to kickstart civilization with the power of science!"
}
];


arr.forEach((data) => {
    createBox(data);

});

function createBox(data) {

    //button -- with click open a info page
    let button = document.createElement('button');
    
    button.onclick = function() {clickBox(this)};
    container.appendChild(button);
    
    //box
    let box = document.createElement('div');
    box.id = data.numberBox;
    box.className = "box";
    button.appendChild(box);

    //sala
    let sala = document.createElement('h2');
    sala.id = "sala";
    sala.textContent = data.sala;
    box.appendChild(sala);

    //div text contiene titolo e div data
    let textdiv = document.createElement('div');
    textdiv.className = "text";
    box.appendChild(textdiv);

    let titolo = document.createElement('h3');
    titolo.id = "titolo-film";
    titolo.textContent = data.titoloFilm;
    textdiv.appendChild(titolo);

    //date
    let datadivI = document.createElement('div');
    datadivI.className = "data";
    textdiv.appendChild(datadivI);
    //p scritta inizio 
    let inizio = document.createElement('p');
    inizio.textContent = "Inizio";
    datadivI.appendChild(inizio);
    // data inizio 
    let dataIn = document.createElement('p');
    dataIn.id = "data-i";
    dataIn.textContent = data.dataI;
    datadivI.appendChild(dataIn);

    //date
    let datadivFin = document.createElement('div');
    datadivFin.className = "data";
    textdiv.appendChild(datadivFin);

    //p scritta Fine 
    let fine = document.createElement('p');
    fine.textContent = "Fine";
    datadivFin.appendChild(fine);
    // data inizio 
    let dataFin = document.createElement('p');
    dataFin.id = "data-f";
    dataFin.textContent = data.dataF;
    datadivFin.appendChild(dataFin);


//if (check == 0)
//{

//}

let overlay = document.getElementById('overlay');
function clickBox() {
    //console.log(data.clickdiv[0].imgFilm);
   // console.log(data.clickdiv[0].description);

    let divDisplay = document.createElement("div");
    divDisplay.className = "clickPage";
    overlay.appendChild(divDisplay);

    // div container finestra che si apre
    let clickBox = document.createElement('div');
    clickBox.className = "clickBox";
    divDisplay.appendChild(clickBox);

    // image locandina
    let locandina = document.createElement("img");
    locandina.src = data.locandinaFilm;
    clickBox.appendChild(locandina);

    // div che contiene titolo, descrizione film, e il div con date
    let divInfo = document.createElement('div');
    divInfo.className = "info";
    clickBox.appendChild(divInfo);

    // titolo
    let titolo = document.createElement('h3');
    titolo.id = "titolo-film";
    titolo.textContent = data.titoloFilm;
    divInfo.appendChild(titolo);

    // descrizione
    let descrizione = document.createElement('p');
    descrizione.id = "description";
    descrizione.textContent = data.descrizioneFilm;
    divInfo.appendChild(descrizione);

    // grande div con date 
    let containerDate = document.createElement('div');
    containerDate.className = "container-date";
    divInfo.appendChild(containerDate);

    // date
    let datadivI = document.createElement('div');
    datadivI.className = "data";
    containerDate.appendChild(datadivI);

    //p scritta inizio 
    let inizio = document.createElement('p');
    inizio.textContent = "Data inizio";
    datadivI.appendChild(inizio);

    // data inizio 
    let dataIn = document.createElement('p');
    dataIn.id = "data-i";
    dataIn.textContent = data.dataI;
    datadivI.appendChild(dataIn);

    //date
    let datadivFin = document.createElement('div');
    datadivFin.className = "data";
    containerDate.appendChild(datadivFin);

    //p scritta Fine 
    let fine = document.createElement('p');
    fine.textContent = "Data fine";
    datadivFin.appendChild(fine);
    // data inizio 
    let dataFin = document.createElement('p');
    dataFin.id = "data-f";
    dataFin.textContent = data.dataF;
    datadivFin.appendChild(dataFin);






    myBlurFunction = function(state) {
        /* state can be 1 or 0 */
        let blurContainer = document.getElementById('blur');
        let overlayEle = document.getElementById('overlay');
    
        if (state) {
            overlayEle.style.display = 'block';
            blurContainer.setAttribute('class', 'blur');
           //containerContainer.setAttribute('class', 'blur');
        } else {
            overlayEle.style.display = 'none';
            blurContainer.setAttribute('class', null);
            //clickBox.remove();
            divDisplay.remove();
            //containerContainer.setAttribute('class', null);
        }
    };
}






}




