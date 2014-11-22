<!DOCTYPE html>
<html>
	<head>
		<meta name="viewport" content="width=device-width">
		<link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico">
		<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
		<title>맘스터치 위치 찾기</title>
		<style type="text/css">
			html, body { height: 95%; margin: 0; padding: 0;}
			#header { height: 5%; margin: 0; padding: 0;}
			#map-canvas { height: 70%; margin: 0; padding: 0;}
			#footer { height: 20%; margin: 0; padding: 0;}
			p {
				font-family: "NanumGothic", sans-serif;
				text-align:center;
				margin:1em;
				font-size:12px;
			}
			h3 {
				font-family: "NanumGothic", sans-serif;
				font-weight: bold;
				text-align:center;
				margin:1em;
				font-size:12px;
			}
		</style>
	</head>
	<body>
		<div class="header">
			<p>
				<button type="button" class="btn btn-primary" onclick="map.setMapTypeId(daum.maps.MapTypeId.ROADMAP)">지도</button>
				<button type="button" class="btn btn-primary" onclick="map.setMapTypeId(daum.maps.MapTypeId.HYBRID)">스카이뷰</button>
			</p>
		</div>
		<div id="map-canvas"></div>
		<div class="footer">
			<p>
				<button type="button" class="btn btn-primary" onclick="geofind()">내 위치</button>
			</p>
			<span id="map-geolocation"><p>MOM'S TOUCH MAP VER 14.11.20.01</p></span>
			<p>
				<span class="button-checkbox" onclick="setOverlayMapTypeId()">
					<input type="checkbox" class="hidden" id="chkTerrain">
					<button type="button" class="btn" data-color="default">지형정보</button>
				</span>
				<span class="button-checkbox" onclick="setOverlayMapTypeId()">
					<input type="checkbox" class="hidden" id="chkTraffic">
					<button type="button" class="btn" data-color="default">교통정보</button>
				</span>
				<span class="button-checkbox" onclick="setOverlayMapTypeId()">
					<input type="checkbox" class="hidden" id="chkBicycle">
					<button type="button" class="btn" data-color="default">자전거도로</button>
				</span>
			</p>
			<p>
				Based on a work at <a xmlns:dct="http://purl.org/dc/terms/" href="http://github.com/kdzlvaids/momstouch" rel="dct:source">http://github.com/kdzlvaids/momstouch</a>.<br>
				<span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/InteractiveResource" property="dct:title" rel="dct:type">맘스터치 위치 찾기</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="mailto:kdzlvaids@gmail.com" property="cc:attributionName" rel="cc:attributionURL">Jongmin Kim</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial 4.0 International License</a>.
			</p>
			<p><a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc/4.0/80x15.png"></a></p>
		</div>
		<script type="text/javascript" src="//code.jquery.com/jquery-1.11.1.min.js"></script>
		<script type="text/javascript" src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
		<script type="text/javascript" src="//apis.daum.net/maps/maps3.js?apikey=5377a73a7960f3096e68395f8a8d9c70419475d8"></script>
		<script type="text/javascript" src="js/api/initialise.js"></script>
		<script type="text/javascript" src="js/data/database.js"></script>
		<script type="text/javascript" src="js/api/setmarkers.js"></script>
		<script type="text/javascript" src="js/api/geolocation.js"></script>
		<script type="text/javascript" src="js/bootstrap.custom.js"></script>
	</body>
</html>
