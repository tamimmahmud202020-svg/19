const squads = {

france: `
🇫🇷 FRANCE

Goalkeepers
Mike Maignan
Brice Samba
Robin Risser

Defenders
Lucas Digne
Malo Gusto
Lucas Hernandez
Theo Hernandez
Ibrahima Konaté
Jules Koundé
William Saliba
Dayot Upamecano
Maxence Lacroix

Midfielders
N'Golo Kanté
Manu Koné
Adrien Rabiot
Aurélien Tchouaméni
Warren Zaïre-Emery

Attackers
Kylian Mbappé
Ousmane Dembélé
Michael Olise
Marcus Thuram
`,

portugal: `
🇵🇹 PORTUGAL

Cristiano Ronaldo
Bruno Fernandes
Bernardo Silva
Vitinha
Rafael Leão
Diogo Costa
`,

brazil: `
🇧🇷 BRAZIL

Alisson
Ederson
Marquinhos
Casemiro
Neymar Jr
Vinicius Junior
Raphinha
Endrick
`,

england: `
🏴 ENGLAND

Harry Kane
Bukayo Saka
Jude Bellingham
Declan Rice
John Stones
Jordan Pickford
`,

germany: `
🇩🇪 GERMANY

Manuel Neuer
Joshua Kimmich
Jamal Musiala
Florian Wirtz
Kai Havertz
Antonio Rüdiger
`,

norway: `
🇳🇴 NORWAY

Erling Haaland
Martin Ødegaard
Alexander Sørloth
Jørgen Strand Larsen
`,

argentina: `
🇦🇷 ARGENTINA

Lionel Messi
Lautaro Martínez
Julián Álvarez
Alexis Mac Allister
Enzo Fernández
Emiliano Martínez
`
};

document.getElementById("startBtn").onclick = () => {

document.getElementById("page1").classList.add("hidden");
document.getElementById("page2").classList.remove("hidden");

celebrate();

};

function showSquad(country){

document.getElementById("squadBox").innerText =
squads[country];

}

function celebrate(){

const items = [
"⚽","🥅","🧤","🏆","🎉","⭐"
];

for(let i=0;i<100;i++){

let e=document.createElement("div");

e.className="fall";

e.innerHTML=
items[Math.floor(Math.random()*items.length)];

e.style.left=Math.random()*100+"vw";

e.style.animationDuration=
(2+Math.random()*3)+"s";

document.body.appendChild(e);

setTimeout(()=>{
e.remove();
},5000);

}

}
