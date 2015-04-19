var stateInfo = {
	CA: ["California"],
	NJ: ["New Jersey"]
	};

function displayStateInfo(state) {
	$("#state-info #" + state).addClass("active");
	}

function hideStateInfo(state) {
	$("#state-info #" + state).removeClass("active");
	}

$(document).ready(function() {
	var $map = $("#us-map");
	var newWidth = $(window).width() / 2 - 1,
		newHeight = 0.45 * newWidth;
	$map.css('width', newWidth).css('height', newHeight);

	$map.usmap({
		showLabels: true,
		stateStyles: {fill: '#bdc3c7'},
		stateHoverStyles: {fill: '#34495e'},
		mouseover: function(event, data) {
			displayStateInfo(data.name);
			},
		mouseout: function(event, data) {
			hideStateInfo(data.name);
			}
		});

	var stateInfoElem = $("#state-info").get(0);

	for (var state in stateInfo) {
		var elem = document.createElement("div"),
			header = document.createElement("h4"),
			items = document.createElement("ul"),
			specificStateInfo = stateInfo[state];

		header.innerHTML = specificStateInfo[0];
		elem.id = state;
		elem.appendChild(items);
		elem.appendChild(header);

		for (var index in specificStateInfo) {
			if (index == 0) {
				continue; // skip the first element
				}
			var item = document.createElement("li");
			item.innerHTML = specificStateInfo[index];
			items.appendChild(item);
			}

		stateInfoElem.appendChild(elem);
		}
	});