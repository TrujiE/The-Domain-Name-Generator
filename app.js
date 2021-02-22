

//console.log("The Domain Name Generator");
let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let ext = ['.com', '.cl', '.net', '.us'];

function uno(){
	//console.log("Opcion: 1");
	let total="Opcion 'For' <br>";	
	let large_pron = pronoun.length;
	let large_adj = adj.length;
	let large_noun = noun.length;
	let large_ext = ext.length;
	
	for(let pr=0; pr < large_pron; pr++){
		for(let ad=0; ad < large_adj; ad++){
			for(let no=0; no < large_noun; no++){
				for(let ex=0; ex < large_ext; ex++){
					//console.log(pronoun[pr]+adj[ad]+noun[no]+ext[ex]);
					total= total + "<br>" + (pronoun[pr]+adj[ad]+noun[no]+ext[ex]);
				}
			}
		}
	}

	return total;
}


let element1 = document.getElementById("uno");
element1.innerHTML= uno();


function dos(){
	//console.log("Opcion: 2");
	let total="<br> Opcion 'For of' <br>";
	for(let pr1 of pronoun){
		for(let ad1 of adj){
			for(let no1 of noun){
				for(let ex1 of ext){
					//console.log(pr1+ad1+no1+ex1);
					total= total + "<br>" + (pr1+ad1+no1+ex1);
				}
			}
		}
	}
	return total;
}

let element2 = document.getElementById("dos");
element2.innerHTML= dos();
