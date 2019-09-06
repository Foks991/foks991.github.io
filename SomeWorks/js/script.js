let div = document.getElementsByClassName("item");
			let array_photos = [
				"url('images/Waxom.png')",
				"url('images/Alpari.png')",
				"url('images/SportClub.png')",
			];
			
			for (let i = 0; i < div.length; i++){
				div[i].style.backgroundImage = array_photos[i];
			}