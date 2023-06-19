//your JS code here. If required.

const liTag = document.getElementsByTagNames('li');

for(let i=0; i<10; i++){
	liTag[i] = function(event){
		let getId = event.target.id;
		if(getId === level){
			alert("The level of the element is: ", i)
		}
	}
	liTag[i]();
	}
