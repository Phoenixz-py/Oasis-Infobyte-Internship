let i = 0;

		let tag = document.getElementById("text");
		let html = document.getElementById("text").innerHTML;
		let attr = tag.setAttribute("data", html);
		let txt = tag.getAttribute("data");
		let speed = 10;

		typeWriter =() => {
		  if (i <= txt.length) {
		    document.getElementById("text").innerHTML = txt.slice(0 , i + 1);
		    i++;
		    setTimeout(typeWriter, speed);
		  }
		    //console.log(document.getElementById("text").innerHTML);
		}

typeWriter();