var apps = {
	data: [
		
		{item:{
			id: 0,
			name: "insight",
			iconUrl: "./icons/insight.png",
			element: "",			
			call: function(){

				insight.view();

			},
			position: {
				spoke: 0,
				item: 0,
			}

		}},

		{item:{
			id: 1,
			name: "People",
			iconUrl: "./icons/insight.png",
			element: "",			
			call: function(){

				insight.view();

			},
			position: {
				spoke: 0,
				item: 0,
			}

		}},
		{item:{
			id: 2,
			name: "Places",
			iconUrl: "./icons/places.png",
			element: "",			
			call: function(){

				insight.view();

			},
			position: {
				spoke: 0,
				item: 0,
			}

		}},
		{item:{
			id: 3,
			name: "Things",
			iconUrl: "./icons/things.png",
			element: "",			
			call: function(){

				insight.menu();

			},
			position: {
				spoke: 0,
				item: 0,
			}

		}},
		{item:{
			id: 4,
			name: "Actions",
			iconUrl: "./icons/actions.png",
			element: "",			
			call: function(){

				insight.menu();

			},
			position: {
				spoke: 0,
				item: 0,
			}

		}},
		{item:{
			id: 5,
			name: "Mode",
			iconUrl: "./icons/mode.png",
			element: "",			
			call: function(){

				insight.mode();

			},
			position: {
				spoke: 0,
				item: 0,
			}

		}},
	],
}

var menu = {
	//model data
	heirachy: {},


	view: function(){

	//add overlay element
		//create overlay
		var overlay = document.createElement('div');
			overlay.className = "overlay";
			overlay.id = "overlay";

			//custom style info
			overlay.style.height = window.innerHeight + "px";
			overlay.style.width = window.innerWidth + "px";

			//add on window change watchers
				window.onresize = function(){

				//custom style info
				overlay.style.height = window.innerHeight + "px";
				overlay.style.width = window.innerWidth + "px";

				}
				

		//add underlay element
			//create underlay
			var underlay = document.createElement('div');
				underlay.className = "underlay";
				underlay.id = "underlay";

				//custom style info
				underlay.style.height = window.innerHeight + "px";
				underlay.style.width = window.innerWidth + "px";

				//add on window change watchers
				window.onresize = function(){

				//custom style info
				underlay.style.height = window.innerHeight + "px";
				underlay.style.width = window.innerWidth + "px";

				}

			//append to overlay
			overlay.appendChild(underlay);

			//add menu element
			//create menu

			var menuSize = 240;

			var menu = document.createElement('div');
				menu.className = "menu";
				menu.id = "menu";

				//custom style info
				menu.style.top = window.innerHeight / 2 - menuSize / 2 + "px";
				menu.style.left = window.innerWidth / 2 - menuSize / 2 + "px";


				//add on window change watchers
				window.onresize = function(){

				//custom style info
				menu.style.top = window.innerHeight / 2 - menuSize / 2 + "px";
				menu.style.left = window.innerWidth / 2 - menuSize / 2 + "px";

				}


			//add ring to menu
			//create menu
			var ring = document.createElement('div');
				ring.className = "ring";
				ring.id = "ring";
				ring.style.height = menuSize + "px";
				ring.style.width = menuSize + "px";

				var offset = 32.5;

				ring.style.webkitTransform = 'rotate('+offset+'deg)'; 
			    ring.style.mozTransform    = 'rotate('+offset+'deg)'; 
			    ring.style.msTransform     = 'rotate('+offset+'deg)'; 
			    ring.style.oTransform      = 'rotate('+offset+'deg)'; 
			    ring.style.transform       = 'rotate('+offset+'deg)'; 	

				var radians = 360 / apps.data.length;




				var i = 0;
				while(i < apps.data.length){

				var deg = radians * i;
					
					//update item position
					apps.data[0].item.position.spoke = deg;
					apps.data[0].item.position.item = deg + offset;

					console.log(apps.data[0].item.position.spoke)

				//create ringItemSpoke
				var ringItemSpoke = document.createElement('div');
					ringItemSpoke.className = "ringItemSpoke";
					ringItemSpoke.id = "ringItemSpoke";
					ringItemSpoke.style.height = 40 + "px";
					ringItemSpoke.style.zIndex = 1;
					


					//rotate;
					ringItemSpoke.style.webkitTransform = 'rotate('+deg+'deg)'; 
				    ringItemSpoke.style.mozTransform    = 'rotate('+deg+'deg)'; 
				    ringItemSpoke.style.msTransform     = 'rotate('+deg+'deg)'; 
				    ringItemSpoke.style.oTransform      = 'rotate('+deg+'deg)'; 
				    ringItemSpoke.style.transform       = 'rotate('+deg+'deg)'; 	


					//add apps
					var ringItem = document.createElement('div');

					 //generate a unique id for the div
						var uId, foo, j;
							uId = '';
							for(j=0; j<32; j++) {
							if( j == 8 || j == 12|| j == 16|| j == 20) 
							uId = uId + '-';
							foo = Math.floor(Math.random()*16).toString(16).toUpperCase();
							uId = uId + i;
							}

						ringItem.id = uId;
						ringItem.className = "ringItem";
						ringItem.style.width = "50px";
						ringItem.style.height = "50px";
						ringItem.style.zIndex = 100;

						//addelemnt to data
						console.log(apps.data[0].item.element)

						//rotate;
						ringItem.style.webkitTransform = 'rotate(-'+ deg + offset +'deg)'; 
					    ringItem.style.mozTransform    = 'rotate(-'+ deg + offset +'deg)'; 
					    ringItem.style.msTransform     = 'rotate(-'+ deg + offset +'deg)'; 
					    ringItem.style.oTransform      = 'rotate(-'+ deg + offset +'deg)'; 
					    ringItem.style.transform       = 'rotate(-'+ deg + offset +'deg)'; 	


						//append icon
						var ringIcon = document.createElement('img');
							ringIcon.src = "iconUrl";
							ringIcon.id = "ringIcon";
							ringIcon.className = "ringIcon";


							ringItem.appendChild(ringIcon);


					//find the center of the Item
					ringCenter = ringItem.style.width / 2;

		
			

					ringItemTop = 0;
					ringItemLeft =  0;

					//(x0 + r cos theta, y0 + r sin theta)

					ringItem.style.top = ringItemTop + "px";
					ringItem.style.left = ringItemLeft + "px";

				ringItemSpoke.appendChild(ringItem);

			ring.appendChild(ringItemSpoke)

		i++;
		}

			//append ring to menu
			menu.appendChild(ring);	

			//append to overlay
			overlay.appendChild(menu);		

		//append overlay to body
			document.body.appendChild(overlay);

	}


}