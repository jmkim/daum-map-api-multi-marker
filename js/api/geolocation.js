function geofind() {
	var output = document.getElementById("map-geolocation");
	if (!navigator.geolocation){
		output.innerHTML = "<p>위치 찾기를 지원하지 않는 브라우저입니다.</p>";
		return;
	}
	marker.setMap(null);
	function success(position) {
		var geoLat  = position.coords.latitude;
		var geoLng = position.coords.longitude;
		var geoLatLng = new daum.maps.LatLng(geoLat, geoLng);
		var geoMarker = new daum.maps.Marker({
			position: geoLatLng,
			image: icon_geoloc,
			zindex: 1
		});
		map.panTo(geoLatLng);
		geoMarker.setMap(map);
	};
	function error() {
		output.innerHTML = "<p>위치를 찾을 수 없습니다.</p>";
	};
	output.innerHTML = "<p>Locating…</p>";
	navigator.geolocation.getCurrentPosition(success, error);
}