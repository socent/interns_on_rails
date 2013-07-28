// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );


$(document).ready(function() {
	$("#toggle").click(function(){
  var w = $('#sidebar').width();
  var pos = $('#sidebar').offset().left;
 
  if(pos == 0){
  $("#sidebar").animate({"left": -w}, "slow");
  }
  else
  {
  $("#sidebar").animate({"left": "0"}, "slow");
  }
  
});
	var enter = false
	var toggle = true
	var cloudmadeUrl = 'http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.jpg';
	var subDomains = ['otile1','otile2','otile3','otile4'];
	var cloudmadeAttrib = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';
	var cloudmade = new L.TileLayer(cloudmadeUrl, {maxZoom: 18, minZoom: 3, attribution: cloudmadeAttrib, subdomains: subDomains, zindex: -1});
	var latlng = new L.LatLng(85.037, -167.343);
	var maxBounds = new L.LatLngBounds(latlng);
	var start = new L.LatLng(15.505, -45.09);
	var map = new L.Map('map', {center: start, zoom: 4, zoomControl: false, layers: [cloudmade]});
	new L.Control.Zoom({position: "bottomright"}).addTo(map)
	L.icon = function (options) {
    return new L.Icon(options);
};
		var blueIcon = L.icon({
	  	iconUrl: 'bluemarker.png',
	    // shadowUrl: 'bluemarker.png',
    iconSize:     [28, 35], // size of the icon
    // shadowSize:   [38, 95], // size of the shadow
    iconAnchor:   [21, 34], // point of the icon which will correspond to marker's location
    // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
	});
    var marker = L.marker([51.5, -0.09]).addTo(map);
// 	var marker = L.marker([43.6481, -79.4042], {icon: blueIcon}).addTo(map).bindPopup("Welcome!");
// 	L.marker([51.5, -0.09], {icon: blueIcon}).addTo(map).bindPopup("I am a green leaf.");
// L.marker([51.495, -0.083], {icon: blueIcon}).addTo(map).bindPopup("I am a red leaf.");
// L.marker([51.49, -0.1], {icon: blueIcon}).addTo(map).bindPopup("I am an orange leaf.");
// L.marker([51.5, -0.09]).addTo(map)
//     .bindPopup('A pretty CSS3 popup. <br> Easily customizable.')
//     .openPopup();
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
});