tree_size = 0;

var insert = function(id, pid, key) {
	
	// For debugging:
	console.log("id: " + id + "\npid: " + pid + "\nkey: " + key);	

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
				console.log("node: " + key);
					
				if (key.split("/").length == 1) {
					tree_size = insert(key, 0, key);

				} else {
					root = key.split("/").slice(0, -1).join("/");
	
					// Find parent node to attach to
					while (root.split("/").length > 1) {
						if (!document.getElementById(root)) {
							tree_size = insert(root, root.split("/").slice(0, -1).join("/"), root);
						}

						root = root.split("/").slice(0, -1).join("/");
					}
					
					if (!document.getElementById(key)) {
						tree_size = insert(key, key.split("/").slice(0, -1).join("/"), key);
					}
				}
					
				if (node["type"] == "dir") {
					get("https://api.github.com/repos/theshteves/web-roast/contents/" + node["path"]);
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
		get("https://api.github.com/repos/theshteves/web-roast/contents");	
	});

});

