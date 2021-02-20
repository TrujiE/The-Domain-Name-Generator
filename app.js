

console.log("The Domain Name Generator");

let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let ext = ['.com', '.cl', '.net', '.us'];

/*
Debería generar algo como:

thegreatjogger.com  0+0+0+0
thegreatracoon.com 	0+0+1+0
ourgreatjogger.com 	1+0+0+0
ourgreatracoon.com 	1+0+1+0
thebigjogger.com 	0+1+0+0
thebigracoon.com 	0+1+1+0
ourbigjogger.com 	1+1+0+0
ourbigracoon.com 	1+1+1+0
*/

let large_pron = pronoun.length;
let large_adj = adj.length;
let large_noun = noun.length;
let large_ext = ext.length;

for(let pr=0; pr < large_pron; pr++){
	//console.log(pronoun[pr]);

	for(let ad=0; ad < large_adj; ad++){
		//console.log(adj[ad]);

		for(let no=0; no < large_noun; no++){
			//console.log(noun[no]);

			for(let ex=0; ex < large_ext; ex++){

				console.log(pronoun[pr]+adj[ad]+noun[no]+ext[ex]);
			}
		}
	}
}