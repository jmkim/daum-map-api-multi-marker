var icon_momstouch = new daum.maps.MarkerImage(
    'images/marker/icon_map.png',
    new daum.maps.Size(42, 56),
    {
        offset: new daum.maps.Point(24, 56),
        shape: "poly",
        coords: "20, 0, 13, 1, 7, 5, 2, 11, 0, 17, 1, 25, 5, 34, 11, 44, 18, 55, 22, 55, 29, 44, 35, 34, 39, 25, 40, 17, 38, 11, 33, 5, 27, 1, 20, 0"
		//coords: "12, 5, 11, 17, 9, 21, 7, 23, 5, 24, 4, 27, 3, 39, 3, 55, 8, 56, 14, 57, 31, 57, 41, 56, 47, 55, 48, 54, 48, 51, 47, 36, 46, 28, 45, 23, 42, 22, 40, 20, 39, 18, 38, 15, 37, 11, 36, 4, 30, 4, 29, 7, 29, 11, 20, 11, 19, 5, 18, 4, 15, 4, 12, 5",
    }
);
var icon_geoloc = new daum.maps.MarkerImage(
    'images/marker/icon_geo.png',
    new daum.maps.Size(42, 56),
    {
        offset: new daum.maps.Point(24, 56),
        shape: "poly",
        coords: "20, 0, 13, 1, 7, 5, 2, 11, 0, 17, 1, 25, 5, 34, 11, 44, 18, 55, 22, 55, 29, 44, 35, 34, 39, 25, 40, 17, 38, 11, 33, 5, 27, 1, 20, 0"
		//coords: "12, 5, 11, 17, 9, 21, 7, 23, 5, 24, 4, 27, 3, 39, 3, 55, 8, 56, 14, 57, 31, 57, 41, 56, 47, 55, 48, 54, 48, 51, 47, 36, 46, 28, 45, 23, 42, 22, 40, 20, 39, 18, 38, 15, 37, 11, 36, 4, 30, 4, 29, 7, 29, 11, 20, 11, 19, 5, 18, 4, 15, 4, 12, 5",
    }
);
var infowindow = new daum.maps.InfoWindow({zIndex:1});

for(i = 0; i < momstouch.length; i++) {
	var marker = new daum.maps.Marker({
		position: new daum.maps.LatLng(momstouch[i][1], momstouch[i][2]),
		image: icon_momstouch
	});
	marker.setMap(map);
	daum.maps.event.addListener(marker, 'click', (function(marker, i) {
		return function() {
			infowindow.setContent('<h3>' + momstouch[i][0] + '</h3>'
					+ '<p style="white-space:nowrap">' + '주소: ' + momstouch[i][3] + '<br>'
					+ '전화번호: ' + momstouch[i][4] + '</p>');
			infowindow.open(map, marker);
		}
	})(marker, i));
}