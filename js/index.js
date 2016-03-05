tree_size = 0;

var insert = function(id, pid, key) {
	
	//console.log("id: " + id + "\npid: " + pid + "\nkey: " + key);
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
		document.getElementById(pid).appendChild(new_node);
	}

	// Return curent tree size
	return id + 1;
};

var get = function(url) {
	
	//console.log("GET: " + url);
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {

    	if (xhttp.readyState == 4 && xhttp.status == 200) {
			JSON.parse(xhttp.responseText).forEach(function(node) {

				key = node["path"];
				//console.log("node: " + key);

				if (!document.getElementById(key)) {
					if (node["type"] == "dir") {

						tree_size = insert(key, key.split("/").slice(0, -1).join("/"), key + "/");
						console.log("GET: " + url + "\n=> " + node["path"]);
						get(url + "/" + node["path"].split("/").pop());

					} else {
						tree_size = insert(key, key.split("/").slice(0, -1).join("/"), key);
					}
				}
			});			
    	}
  	};

  	xhttp.open("GET", url, true);
  	xhttp.send();	
};


$(document).ready(function() {

	$("#insert").click(function() {
		//tree_size = insert(tree_size, $("#in_pid").val(), $("#in_key").val());	
		get("https://api.github.com/repos/" + $("#in_user").val() + "/" + $("#in_repo").val() + "/contents");
	});

});

