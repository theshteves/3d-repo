tree_size = 0;	

var insert = function(id, pid, key) {
	
	// For debugging:
	console.log("id: " + id + ", pid: " + pid + ",key: " + key);	

	// Create new node
	var new_node = document.createElement("div");
	new_node.setAttribute("id", id);
	new_node.setAttribute("class", "node");

	// Create node properties
	var new_key = document.createElement("p");
	new_key.innerHTML = key;

	// Append properties to node
	new_node.appendChild(new_key);	
	
	// Insert node into tree
	if (pid == 0) {
		document.getElementById("tree").appendChild(new_node);
	} else {
		document.getElementById(pid - 1).appendChild(new_node);
	}

	// Return curent tree size
	return id + 1;
};

$(document).ready(function() {
	
	$("#insert").click(function() {
		tree_size = insert(tree_size, $("#in_pid").val(), $("#in_key").val());
	});

});

