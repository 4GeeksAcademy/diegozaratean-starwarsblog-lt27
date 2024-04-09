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
				}
			],
			naves: [],
			message: 'desde flux',
			navesVistas: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			cambiarTexto: (nombreNave) => {
				console.log('cambiarTexto',nombreNave)
				// cambair el texto message 'nuevo texto'
				setStore({ message: nombreNave });
				const store = getStore();

				if(store.navesVistas.includes(nombreNave) )  {
					console.log(' ya esta en la lsita')
					setStore({ navesVistas: store.navesVistas.filter( (elemento)=> elemento != nombreNave )  });
				}else{
					console.log(' no esta en la lista ')
					// agregar el elemento(nombreNave) a navesVsitas				
					setStore({ navesVistas: [ ...store.navesVistas,nombreNave]});
				}

			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				console.log('se cargo pagina desde flux')
				fetch('https://swapi.dev/api/starships')
				.then( (response)=>response.json() )
				//.then( (data)=> console.log(data.results) )
				.then( (data)=> setStore({ naves: data.results }) )

				
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
