// 현재 내 위치의 위도, 경도, 값
let myx = 33.450701;
let myy = 126.570667;
let otherx = 33.450701;
let othery = 126.570667;
let txt = document.querySelector("#text-container > p");

// 콤보박스 요소 가져오기
let comboBox = document.getElementById("area");

// 콤보박스에 change 이벤트 리스너 추가, 콤보박스 값이 바뀔때마다
comboBox.addEventListener("change", () => {
    let selectedValue = comboBox.value;
    const tablename = document.querySelector("#tablename");
    tablename.innerText = selectedValue;

    if (selectedValue === "서울") { // 서울 자료 가져오기
        let url1 = "https://apis.data.go.kr/B552657/AEDInfoInqireService/getAedLcinfoInqire?serviceKey=MLrIT9J5oAz7WAVKOXQr4s3UpJJoYArYijEhOn4jMD8WA3ANfsEvoRrTgygo5qCuJtl6fvMgdO21%2FhU%2FAxlN0g%3D%3D";
        fetch(url1)
            .then(response => response.text())  // XML 데이터를 텍스트로 가져옴
            .then(data => {
                let parser = new DOMParser();
                let xmlDoc = parser.parseFromString(data, "text/xml");
                display1(xmlDoc);
            })
            .catch(error => console.error('Error fetching XML:', error));
    } else if(selectedValue === "부산"){ // 부산 자료 가져오기
        let url2 = "https://apis.data.go.kr/6260000/BusanAedService/getAedList?serviceKey=MLrIT9J5oAz7WAVKOXQr4s3UpJJoYArYijEhOn4jMD8WA3ANfsEvoRrTgygo5qCuJtl6fvMgdO21%2FhU%2FAxlN0g%3D%3D&pageNo=1&numOfRows=10&resultType=json";
        fetch(url2)
        .then(response => response.json()) // JSON 가져오기
        .then(data => {
            const busandata = data.getAedList.body.items.item;
            display2(busandata)
        })
    } else if(selectedValue === "경남"){ // 경남 자료 가져오기
        let url3 = "https://apis.data.go.kr/6480000/GyeongnamAedService/gyeongnamaed?serviceKey=MLrIT9J5oAz7WAVKOXQr4s3UpJJoYArYijEhOn4jMD8WA3ANfsEvoRrTgygo5qCuJtl6fvMgdO21%2FhU%2FAxlN0g%3D%3D&pageNo=1&numOfRows=10&resultType=json";
        fetch(url3)
        .then(result => result.json())
        .then(data => {
            const gyeongnamdata = data.getGyeongnamAed.body.items.item;
            display3(gyeongnamdata)
        })
    } else{ // 그 외
        const result = document.querySelector('#result');
        result.innerText="";
        reloadmap(33.450701, 126.570667,"카카오본사") // 이스터애그 느낌
    }
});

// 지역별 표(서울)
function display1(xmlDoc) {
    const result = document.querySelector('#result');
    let string = '';
    let items = xmlDoc.querySelectorAll('item');
    items.forEach((seoul) => {
        const buildAddress = seoul.querySelector('buildAddress').textContent;
        const managerTel = seoul.querySelector('managerTel').textContent;
        const lat = parseFloat(seoul.querySelector('wgs84Lat').textContent); // XML에서 위도 정보 추출
        const lng = parseFloat(seoul.querySelector('wgs84Lon').textContent); // XML에서 경도 정보 추출
        string += `<table><tr><th>위치</th><td>${buildAddress}</td></tr>
                    <tr><th>전화번호</th><td>${managerTel}</td></tr>
                    <tr><th>지도</th><td class="click" data-lat="${lat}" data-lng="${lng}" data-buildAddress="${buildAddress}">클릭!</td></tr>
                </table>`;
    });
    result.innerHTML = string;

    const bttn = document.querySelectorAll(".click"); // 각 클릭 태그에 효과를 추가함
    for(let button of bttn){
        button.addEventListener("click",function(){
            const lat = button.getAttribute("data-lat");
            const lng = button.getAttribute("data-lng");
            const buildAddress = button.getAttribute("data-buildAddress");
            reloadmap(lat, lng, buildAddress); // 맵을 다시 불러옴
            const distance = calculateDistance(myx, -myy, lat, - lng);
            txt.innerText = `거리: ${distance.toFixed(3)} km`;
        })
    }
}

// 지역별 표(부산)
function display2(busandata) {
    const result = document.querySelector('#result');
    let string = '';
    busandata.forEach((busan) => {
    string += `<table><tr><th>위치</th><td>${busan.addrs}</td></tr>
                <tr><th>전화번호</th><td>${busan.biz_tel}</td></tr>
                <tr><th>지도</th><td class="click" data-geom="${busan.geom}" data-addrs="${busan.addrs}">클릭!</td></tr>
            </table>`;
    });
    result.innerHTML = string;

    const bttn = document.querySelectorAll(".click");
    for(let button of bttn){
        button.addEventListener("click",function(){
            const addrs = button.getAttribute("data-addrs");
            const geom = button.getAttribute("data-geom");
            const change = PointChange(geom);
            reloadmap(change.lat, change.lng, addrs);
            const distance = calculateDistance(myx, -myy, change.lat, - change.lng);
            txt.innerText = `거리: ${distance.toFixed(3)} km`;
        })
    }
}

// 지역별 표(경남)
function display3(gyeongnamdata) {
    const result = document.querySelector('#result');
    let string = '';
    gyeongnamdata.forEach((gyeongnam) => {
    string += `<table><tr><th>위치</th><td>${gyeongnam.addrs}</td></tr>
                <tr><th>전화번호</th><td>${gyeongnam.biz_tel}</td></tr>
                <tr><th>지도</th><td class="click" data-lat="${gyeongnam.lat}" data-lng="${gyeongnam.lng}" data-product="${gyeongnam.product_nm}">클릭!</td></tr>
            </table>`;
    });
    result.innerHTML = string;

    const bttn = document.querySelectorAll(".click");
    for(let button of bttn){
        button.addEventListener("click",function(){
            const lat = button.getAttribute("data-lat");
            const lng = button.getAttribute("data-lng");
            const product_nm = button.getAttribute("data-product");
            reloadmap(lat, lng, product_nm);
            const distance = calculateDistance(myx, -myy, lat, - lng);
            txt.innerText = `거리: ${distance.toFixed(3)} km`;
        })
    }
}

// 위치 정규화, 부산태그는 geom에 같이 들어있어서 사용해야함
function PointChange(pointString) {
    // 정규 표현식을 사용하여 숫자 부분 추출
    const matches = pointString.match(/\(([-\d.]+)\s+([-\d.]+)\)/);
    if (matches && matches.length === 3) {
        const lng = parseFloat(matches[1]);
        const lat = parseFloat(matches[2]);
        return { lat, lng };
    }
    return null;
}

// 현재위치
const getLocation = document.querySelector("#getLocation");
getLocation.addEventListener('click', function(e) {
    e.preventDefault();
    if (navigator.geolocation) { 
        navigator.geolocation.getCurrentPosition(showPosition, errorPosition);
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
        let watchId = navigator.geolocation.watchPosition(showPosition, errorPosition, options);
        setTimeout(function() { // 30초 후에 종료
            navigator.geolocation.clearWatch(watchId);
        }, 30000);
    } else {
        alert('지오로케이션을 지원하지 않습니다.');
    }
});
function showPosition(position) { 
    document.querySelector("#mylocation").innerHTML = `
        <b>위도:</b> ${position.coords.latitude}, <b>경도:</b> ${position.coords.longitude}, <b>내위치 확인</b>
    `;
    reloadmap(position.coords.latitude,position.coords.longitude,"내 위치");
    myx = position.coords.latitude;
    myy = position.coords.longitude;
    const distance = calculateDistance(myx, -myy, otherx, -othery);
    txt.innerText = `거리: ${distance.toFixed(3)} km`;
};
function errorPosition(err) {
    alert(err.message);
}

// 새로운 맵 로드
let mapContainer = document.getElementById('map'), 
    mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 5 // 지도의 확대 레벨
};
let map = new kakao.maps.Map(mapContainer, mapOption);

// 각 위치 로드
function reloadmap(a,b,name){
    let mapContainer = document.getElementById('map'), 
    mapOption = {
        center: new kakao.maps.LatLng(a, b), // 지도의 중심좌표
        level: 5 // 지도의 확대 레벨
    };
    let map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // 마커가 표시될 위치입니다 
    var markerPosition  = new kakao.maps.LatLng(a, b); 

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
    
    let iwContent = `<div style="padding:3px;">${name}</div>`,
    iwPosition = new kakao.maps.LatLng(a, b); //인포윈도우 표시 위치입니다

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
        position : iwPosition, 
        content : iwContent 
    });
    
    // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
    infowindow.open(map, marker);
}


function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // 지구의 반지름 (단위: km)
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c; // 두 지점 간의 거리 (단위: km)
    return distance;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180);
}

const distance = calculateDistance(myx, -myy, otherx, -othery);
txt.innerText = `거리: ${distance.toFixed(3)} km`;