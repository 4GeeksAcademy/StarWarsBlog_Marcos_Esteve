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
			],
			description_starships: [
				{
					name: "CR90 corvette",
					description: "Inferno Squad’s primary vessel and home, the Raider II-class corvette Corvus was assigned to Captain Iden Versio following the Battle of Yavin. Outfitted with turbolasers, a hyperdrive, and room for a sizable crew, the agile Corvus is a dangerous enemy for Rebel starfighters. Since Yavin 4, the Corvus has been on hundreds of black operations, as well as plenty of known battles such as the Battle of Endor."
				},
				{
					name:"Star Destroyer",
					description: "The Super Star Destroyer is one of the largest, most powerful Imperial vessels ever created. A smooth hull presents an arrowhead shaped profile when viewed from above. Resting in the center of this hull is an island of habitable volume. Weapons emplacements bristle on the layered city-like surface. The trapezoidal command tower stands near the aft end of this island, capped with two geodesic communication and deflection domes. The underside is a busy network of engineering and superstructure. Thirteen colossal engine thrusters glow blood red as they push the immense craft through space."
				},
				{
					name: "Sentinel-class landing craft",
					description: "Gobi Glie's starship may not look like much from the outside, but it holds untold riches for a young Hera Syndulla. At the controls of the craft, Gobi teaches the young girl how to fly on instinct, entrusting her with his ship with the exception of take-off and landing. The craft is also an essential part of the freedom fighter's work to shore up armaments for Ryloth after the Imperial occupation begins in the time of the Empire. On one occasion, Gobi and Hera met Clone Force 99 on Ryloth's moon to secure weapons for the coming civil war, smuggling the elicit cargo inside the ship's ample hold."
				},
				{
					name: "Death Star",
					description: "Darth Vader piloted this distinctive experimental TIE fighter above the first Death Star, using its blaster cannons and his uncanny abilities with the Force to blast Rebel starfighters into glittering fragments."
				},
				{
					name: "Y-wing",
					description: "The Y-wing is a workhorse starfighter has been in use since the Clone Wars. Used for dogfights and for bombing runs against capital ships and ground targets, Y-wings are often overshadowed by newer models such as the X-wing and the A-wing. But the Y-wing's historical importance is remarkable, and it has reliably served multiple generations of star pilots."
				},
				{
					name: "Millennium Falcon",
					description: "An extensively modified Corellian light freighter, the Millennium Falcon is a legend in smuggler circles and is coveted by many for being the fastest hunk of junk in the galaxy. Despite her humble origins and shabby exterior, the ship that made the Kessel Run in less than 12 parsecs has played a role in some of the greatest victories of the Rebel Alliance and the New Republic. The Falcon looks like a worn-out junker, but beneath her hull she’s full of surprises. A succession of owners, including Lando Calrissian and Han Solo, have made special modifications that boosted the freighter’s speed, shielding and firepower to impressive and downright illegal levels. The price of such tinkering? The Falcon can be unpredictable, with her hyperdrive particularly balky. Despite her flaws, she’s beloved by her owners – Han Solo and Chewbacca spent years searching the galaxy for the ship they once called home, rejoicing when they finally reclaimed her."
				},
				{
					name: "TIE Advanced x1",
					description: "Reminiscent in design of the Empire's TIE interceptor and Darth Vader's TIE advanced, Kylo Ren's TIE silencer is an angular fighter equipped with laser cannons and missile launchers. Ren is an expert pilot -- thanks to skills passed down from his father -- which he puts to use in exploiting his ship's speed and ferocity. There is no other First Order craft like the TIE silencer, and it is an effective tool in Ren's mission to destroy the Resistance."
				},
				{
					name: "Executor",
					description: "The mighty flagship of Darth Vader, the Executor led Death Squadron during the Empire’s assault on Hoth and pursued the Millennium Falcon to Bespin, where Luke Skywalker and his friends narrowly escaped her tractor beams. First commanded by Admiral Ozzel and later by Admiral Piett, the massive warship met her end during the Battle of Endor, when a rebel A-wing smashed through her command bridge. Out of control, the Executor careened into the Death Star and exploded."
				},
				{
					name: "X-wing",
					description: "Though an outdated starfighter, the Z-95 boasts endurance and adaptability. The clone pilots of the Galactic Republic used the Z-95 Headhunter during the Clone Wars. A multi-purpose starfighter, the Z-95 has spawned countless variants, with the Republic making its own mark on the Headhunter's large production run with a clone trooper-specific model. The Z-95 is largely recognized as a respectable and versatile snub-fighter of its era, and was the forerunner of the incredibly successful X-wing starfighter."
				},
				{
					name: "Rebel transport",
					description: "The distinctive shape and hue of a Republic Cruiser is instantly recognizable throughout the galaxy, indicating a vessel on a mission for the Galactic Senate, the Supreme Chancellor, or the Jedi Order. Chancellor Valorum dispatched a Republic Cruiser carrying two important Jedi ambassadors to negotiate an end to the Trade Federation Blockade of Naboo. The cruiser docked within a Trade Federation battleship's cavernous landing bay. On the orders of Darth Sidious, the Trade Federation ambushed the Jedi ambassadors. The crew of the cruiser was caught by surprise, destroyed by a concealed turbolaser turret."
				}
			],
			favorites: [
				
			],
			icon_status : [
				false
			]

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			change_icone_true : () => {
				const store = getStore();
				setStore({icon_status: true})
			},
			setFavorites: (nuevos_favoritos) => {
				const store = getStore()
				setStore({favorites: nuevos_favoritos})
			},
			love_icon : (name) =>{
				console.log(name)
				const store = getStore();
				setStore({favorites: [...store.favorites, name]})
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
