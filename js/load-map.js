// Rushy Panchal
// load-map.js

(function($) {
	'use strict';

	var stateInfo = {
		AL: ["Alabama"],
		AK: ["Alaska", "Has one of the largest deposits of oil"],
		AZ: ["Arizona"],
		AR: ["Arkansas"],
		CA: ["California"],
		CO: ["Colorado", "Coal mining, especially in the Denver basin"],
		CT: ["Connecticut"],
		DC: ["District of Columbia"],
		DE: ["Delaware"],
		FL: ["Florida"],
		GA: ["Georgia"],
		HI: ["Hawaii"],
		ID: ["Idaho"],
		IL: ["Illinois", "Recoverable Coal Reserve", "Harrisburg Coal Field"],
		IN: ["Indiana"],
		IA: ["Iowa"],
		KS: ["Kansas"],
		KY: ["Kentucky", "Coal mining"],
		LA: ["Louisiana", "One of the top producers of natural gas"],
		ME: ["Maine"],
		MD: ["Maryland"],
		MA: ["Massachusetts"],
		MI: ["Michigan"],
		MN: ["Minnesota"],
		MS: ["MIssissippi"],
		MO: ["MIssouri"],
		MT: ["Montana", "Recoverable Coal Reserve", "Oil-bearing shales"],
		NE: ["Nebraska"],
		NV: ["Nevada"],
		NH: ["New Hampshire"],
		NJ: ["New Jersey"],
		NM: ["New Mexico", "One of the top producers of natural gas"],
		NY: ["New York"],
		NC: ["North Carolina"],
		ND: ["North Dakota", "Contains oil-bearing shales"],
		OH: ["Ohio"],
		OK: ["Oklahoma", "One of the top producers of natural gas"],
		OR: ["Oregon"],
		PA: ["Pennsylvania", "One of the largest deposits of anthracite coal"],
		RI: ["Rhode Island"],
		SC: ["South Carolina"],
		SD: ["South Dakota"],
		TN: ["Tennessee"],
		TX: ["Texas", "One of the top producers of natural gas"],
		UT: ["Utah"],
		VT: ["Vermont"],
		VA: ["Virginia"],
		WA: ["Washington"],
		WV: ["West Virginia", "Recoverable Coal Reserve", "Significant coal mining"],
		WI: ["Wisconsin"],
		WY: ["Wyoming", "Coal mined in the Powder River Basin", "Recoverable Coal Reserve", "Largest coal-producing site", "One of the top producers of natural gas"]
		};

	function setStateInfo() {
		// Set the resource info per state
		var stateInfoElem = $("#state-info"),
			stateInfoAll = $("#state-info-all"),
			resourceLocations = $("#name-info-all");

		stateInfoAll.css("max-height", resourceLocations.height());

		for (var state in stateInfo) {
			var elem = document.createElement("div"),
				header = document.createElement("h4"),
				items = document.createElement("ul"),
				specificStateInfo = stateInfo[state];

			header.innerHTML = specificStateInfo[0];
			elem.id = state;
			elem.appendChild(header);
			elem.appendChild(items);

			// display all sources of coal, oil, and gas in one spot, in drop-down
			// check if coal, oil, or gas by checking if string contains (i.e "gas" in elem)

			for (var index in specificStateInfo) {
				if (index == 0) {
					continue; // skip the first element
					}
				var item = document.createElement("li");
				item.innerHTML = specificStateInfo[index];
				items.appendChild(item);
				}

			stateInfoElem.append(elem);
			if (specificStateInfo.length > 1) {
				stateInfoAll.append($(elem).clone());
				}
			}
		}

	function createMap() {
		// Create the interactive map
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
		}

	function displayStateInfo(state) {
		// Display a state info for the hovered state
		$("#state-info #" + state).addClass("active");
		}

	function hideStateInfo(state) {
		// Hide the state info the hovered state
		$("#state-info #" + state).removeClass("active");
		}

	$(document).ready(function() {
		createMap();
		setStateInfo();
		});

	})(jQuery);
