let rock = document.querySelector(".rock")
let scissors =document.querySelector(".Scissors")
let paper = document.querySelector(".paper")

let playerScores = []
let Botscore = []
let userObject = document.querySelector(".userObject")
let botObject = document.querySelector(".botObject")

 let number;
 let score = 0;
function rps(){

	number = Math.floor(Math.random() * 3) + 1
	let items = ""

	if(number === 1){
		items = `<h1>Bot: ${Botscores}</h1>
					<img src = 'rock1.png' class = 'rocky'>`
		botObject.innerHTML =  items
		Botscorer()
	}
	else if(number === 2){
		items = `<h1>Bot: ${Botscores}</h1>
					<img src = 'paper1.png' class = 'rocky'>`
		botObject.innerHTML =  items
		Botscorer()
}

	else if(number === 3){
		items = `<h1>Bot: ${Botscores}</h1>
					<img src = 'scissors1.png' class = 'rocky'>`
		botObject.innerHTML =  items
		Botscorer()
	}

	// let	score = 0;
	// if (number === 1 && rock.click()){
	// 		score = score + 1

	// 		items = `<h1>Alex: 0</h1>
	// 				<img src = 'rock1.png' class = 'rocky'>`
	// 	botObject.innerHTML =  items


	// 	item = ` <h1 class="userName">${playerName}: ${score}</h1>
	// 			<img src = 'rock1.png' class = 'rocky'>`

	// 		userObject.innerHTML = item
		
	// } 
}
let playerName = []
Object.defineProperty(playerName, 'length', {writeable:false});

	function entry() {
	let userInPut = document.querySelector(".userInput")
	console.log(userInPut)
	playerName.push(userInPut.value)
	localStorage.setItem("key", JSON.stringify(playerName))
}
	let item = ""
function rockk() {
	for(let i = 1; i < 3; i++){
	item = ` <h1 class="userName">${playerName}: 0</h1>
				<img src = 'rock1.png' class = 'rocky'>
				<img src = 'paper1.png' class = 'rocky'>
				<img src = 'scissors1.png' class = 'rocky'>`
			}
	userObject.innerHTML = item

}

function turnOnrock(){
			 if( number === 1){
			 	score = score;
			 }
			 else if(number === 2){
			 	score = score - 5;
			 }

			 else{
			 	score = score + 5;
			 }
			 item = ` <h1 class="userName">${playerName}: ${score}</h1>
				<img src = 'rock1.png' class = 'rocky'>`

			userObject.innerHTML = item
			rps()
			Botscorer()
}


function turnOnpaper(){
		if( number === 1){
			 	score = score + 5;
			 }
			 else if(number === 2){
			 	score = score ;
			 }

			 else{
			 	score = score - 5;
			 }

	item = ` <h1 class="userName">${playerName}: ${score}</h1>
				<img src = 'paper1.png' class = 'rocky'>`

			userObject.innerHTML = item
			rps()
Botscorer()
			 
}


function turnOnscissors(){
	if( number === 1){
			 	score = score - 5;
			 }
			 else if(number === 2){
			 	score = score  + 5;
			 }

			 else{
			 	score = score			 }
	item = ` <h1 class="userName">${playerName}: ${score}</h1>
				<img src = 'scissors1.png' class = 'rocky'>`

			userObject.innerHTML = item
			rps()
			Botscorer()
}

let Botscores = 0
function Botscorer(){
	if(score === -5){
		Botscores = Botscores + 5
	}
}


let name = JSON.parse(localStorage.getItem("key"))

if(name){
	playerName = name
	rockk()
}

function refresh(){
	localStorage.clear()
	playerName = []
	item = "";
}


// if (turnOnscissors && number === 3) {
// 	item = ` <h1 class="userName">${playerName}: 5</h1>
// 				<img src = 'scissors1.png' class = 'rocky'>`

// 			userObject.innerHTML = item
// }