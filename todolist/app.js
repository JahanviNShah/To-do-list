document.addEventListener("DOMContentLoaded", () => {
      
    let addInput = document.querySelector("#add-task");
    addInput.addEventListener("keypress",function(e){
	  // did the user press *enter*? if yes then continue
		if (13 === e.keyCode){
			    // grab the value of the input tag
			let newItem = document.getElementById("add-task").value;
			// if the input tag is not empty then run our function to add an item
			if (newItem) {
			    // this function will add a new item to the todo list
			    addItemTodo(newItem);
			    // reset the input after we added a new item
			    document.getElementById("add-task").value = "";
			}
		}
	});

	function addItemTodo(text){
			// grab the `ul`
	    /*let list = document.getElementById("incomplete-tasks");
	  // create an `li`
		let item = document.createElement('li');
	  	item.innerText = text;*/
	  	var ul = document.getElementById("incomplete-tasks");
	  	var li = document.createElement("li");

	  	var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.addEventListener("click",completeItem);
		li.appendChild(checkbox);

		var item = document.createElement("LABEL");
		var item_text = document.createTextNode(text);
	  	item.appendChild(item_text);
	  	li.appendChild(item);

	  	var span = document.createElement("SPAN");
  		var txt = document.createTextNode("\u00D7");
  		span.className = "close";
  		span.appendChild(txt);
  		span.addEventListener("click",removeItem);

		li.appendChild(span);

	  	//checkbox.appendChild(document.createLabelNode(item.innerText));
	  	ul.insertBefore(li, ul.childNodes[0]);
	  	//list.insertBefore(item,list.childNodes[0]);
	}

	function completeItem(){
	  // grab the `li` by targeting the parent of the parent of the button (checkbox -> li)
		let item = this.parentNode;
	  // grab the `ul` (li -> ul)
	  	let parent = item.parentNode;
	  // grab the parent id
	  	let id = parent.id;
	  // remove the item to its current `ul`
	  	parent.removeChild(item);
	  // add the item to the new `ul`
	  	var target = document.getElementById("completed-tasks-id");
	  	target.insertBefore(item,target.childNodes[0]);
	}

	function removeItem(){
  		// grab the `li` by targeting the parent of the parent of the button (button -> li)
  		let item = this.parentNode;
  		// grab the `ul` (li -> ul)
  		let parent  = item.parentNode;
  		// remove `li` from `ul`
  		parent.removeChild(item);
	} 

});
