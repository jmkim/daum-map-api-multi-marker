var container = document.getElementById('map-canvas');
var options = {
	center: new daum.maps.LatLng(37.528957, 127.123277),
	level: 3,
	mapTypeId: 3,
	draggable: true,
	scrollwheel: true,
	disableDoubleClick: false
};

var map = new daum.maps.Map(container, options);

// var ZoomControl = new daum.maps.ZoomControl();
// map.addControl(ZoomControl, daum.maps.ControlPosition.RIGHT);

// var mapTypeControl = new daum.maps.MapTypeControl();
// map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPRIGHT);

var mapTypes = {
    terrain : daum.maps.MapTypeId.TERRAIN,    
    traffic :  daum.maps.MapTypeId.TRAFFIC,
    bicycle : daum.maps.MapTypeId.BICYCLE
};

function setOverlayMapTypeId() {
    var chkTerrain = document.getElementById('chkTerrain'),  
        chkTraffic = document.getElementById('chkTraffic'),
        chkBicycle = document.getElementById('chkBicycle');
    for (var type in mapTypes) {
        map.removeOverlayMapTypeId(mapTypes[type]);    
    }
    if (chkTerrain.checked) {
        map.addOverlayMapTypeId(mapTypes.terrain);    
    }
    if (chkTraffic.checked) {
        map.addOverlayMapTypeId(mapTypes.traffic);    
    }
    if (chkBicycle.checked) {
        map.addOverlayMapTypeId(mapTypes.bicycle);    
    }
}

var geocoder = new daum.maps.services.Geocoder();