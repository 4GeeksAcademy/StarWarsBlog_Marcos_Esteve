const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				},
			],
			characters: [
				{

				}
			],
			starships : [
				{

				}
			],
			characters_data: [
				{
					
				}
			],
			description_personajes: [
				{
					name: "Luke Skywalker",
					description : "Luke Skywalker was a Tatooine farmboy who rose from humble beginnings to become one of the greatest Jedi the galaxy has ever known. Along with his friends Princess Leia and Han Solo, Luke battled the evil Empire, discovered the truth of his parentage, and ended the tyranny of the Sith. A generation later, the location of the famed Jedi master was one of the galaxy’s greatest mysteries. Haunted by Ben Solo’s fall to evil and convinced the Jedi had to end, Luke sought exile on a distant world, ignoring the galaxy’s pleas for help. But his solitude would be interrupted – and Luke Skywalker had one final, momentous role to play in the struggle between good and evil."
				},
				{
					name: "C-3PO",
					description: "C-3PO longs for more peaceful times, but his continued service to the Resistance — and his knowledge of more than seven million forms of communication — keeps the worry-prone droid in the frontlines of galactic conflict. Programmed for etiquette and protocol, Threepio was built by a young Anakin Skywalker, and has been a constant companion to astromech R2-D2. Over the years, he was involved in some of the galaxy’s most defining moments and thrilling battles. Since the Empire’s defeat, C-3PO has served Leia Organa, head of a Resistance spy ring aimed at undermining the First Order."
				},
				{
					name: "R2-D2",
					description: "A reliable and versatile astromech droid, R2-D2 has served Padmé Amidala, Anakin Skywalker, and Luke Skywalker in turn, showing great bravery in rescuing his masters and their friends from many perils. A skilled starship mechanic and fighter pilot's assistant, he has an unlikely but enduring friendship with the fussy protocol droid C-3PO."
				},
				{
					name: "Darth Vader",
					description: "Once the heroic Jedi Knight named Anakin Skywalker, Darth Vader was seduced by the dark side of the Force. Forever scarred by his defeat on Mustafar, Vader was transformed into a cybernetically-enhanced Sith Lord. At the dawn of the Empire, Vader led the Empire’s eradication of the Jedi Order and the search for survivors. He remained in service of the Emperor -- the evil Darth Sidious -- for decades, enforcing his Master’s will and seeking to crush the Rebel Alliance and other detractors. But there was still good in him…"
				},
				{
					name: "Leia Organa",
					description: "Princess Leia Organa was one of the greatest leaders of the Rebel Alliance, fearless on the battlefield and dedicated to ending the Empire’s tyranny. Daughter of Padmé Amidala and Anakin Skywalker, sister of Luke Skywalker, and with a soft spot for scoundrels, Leia ranked among the galaxy’s great heroes. But life under the New Republic proved difficult for her. Sidelined by a new generation of political leaders, she struck out on her own to oppose the First Order as founder of the Resistance. These setbacks in her political career were accompanied by more personal losses, which she endured with her seemingly inexhaustible will."
				},
				{
					name: "Owen Lars",
					description: "Owen Lars continued his father Cliegg’s efforts to build his homestead into a productive farm, working alongside his wife, Beru. Helping with the dreary chores required to keep the farm profitable, Owen relies on his nephew, Luke Skywalker, whom the couple raised since birth. Like most moisture farmers on Tatooine, Lars is fiercely protective of his land and his family. When there is an intrusion on the tranquility of the Lars Homestead, Owen defends his home."
				},
				{
					name: "Beru Whitesun lars",
					description: "In her youth, Beru Whitesun's aspirations did not reach beyond Tatooine. The shy young woman was content to marry Owen Lars and lead the tough life of a moisture farmer. In time, she became a surrogate mother and guardian to their nephew, Luke Skywalker. Fiercely protective of the child, Beru would do anything to ensure Luke's safety and happiness."
				},
				{
					name: "R5-D4",
					description: "A red astromech droid, R5-D4 thought he'd found a home when the Jawas sold him to Owen Lars, along with the protocol droid C-3PO. But R5's motivator blew as he rolled away from the sandcrawler, forcing the Jawas to take him back in exchange for R2-D2."
				},
				{
					name: "Biggs Darklighter",
					description: "Biggs Darklighter grew up on Tatooine with Luke Skywalker, and shared his friend's dreams of escaping the dull desert world. After graduating from the Imperial Academy, he defected from the Empire's service to join the Rebellion. He and Luke were reunited at Yavin 4's Rebel base, and flew together against the Death Star. Luke returned from that mission as a hero, but Biggs did not survive."
				},
				{
					name: "Obi-Wan Kenobi",
					description: "A legendary Jedi Master, Obi-Wan Kenobi was a noble man and gifted in the ways of the Force. He trained Anakin Skywalker, served as a general in the Republic Army during the Clone Wars, and guided Luke Skywalker as a mentor."
				},
			]

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				const store = getStore();
				setStore({characters: []})
				fetch("https://www.swapi.tech/api/people")
				.then((response) => response.json())
				.then((data) => {console.log(data);
					setStore({characters: data.results})});
				
			},
			loadPlanetData : () =>{
				const store = getStore();
				fetch("https://www.swapi.tech/api/starships")
				.then((response)=> response.json())
				.then ((data)=> {
					console.log(data);
					setStore({starships: data.results}

				)});
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
