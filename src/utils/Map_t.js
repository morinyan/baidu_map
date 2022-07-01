<script>
var BMapGL = window.BMapGL;
var BMapGLLib = window.BMapGLLib;
export default {
  name: 'App',

  mounted() {
    var map = new window.BMapGL.Map("app", {
      // 是否显示室内图
      showControls: true,
      // 地图poi是否允许点击
      enableIconClick: true,
      // 是否显示室内图楼层切换控件
      displayOptions:{indoor:true}
    });
    // var point = new window.BMapGL.Point(116.404, 39.915);
    // map.enableScrollWheelZoom(true);
    // map.centerAndZoom(point, 15);
    // window.morin = map;
    console.log(BMapGL, BMapGLLib);

    map.centerAndZoom(new BMapGL.Point(116.404, 39.915), 11);
    map.enableScrollWheelZoom(true);

    // browser
    // var geolocation = new BMapGL.Geolocation();
    // geolocation.getCurrentPosition(function(r) {
    //   console.log('current:', r);
    //   if (this.getStatus() == window.BMAP_STATUS_SUCCESS) {
    //     var mk = new BMapGL.Marker(r.point)
    //     map.addOverlay(mk);
    //     map.panTo(r.point);
    //   }
    // })

    // IP
    // function myFun(result){
    //     var cityName = result.name;
    //     map.setCenter(cityName);
    //     alert("当前定位城市:" + cityName);
    // }
    // var myCity = new BMapGL.LocalCity();
    // myCity.get(myFun); 

    // SDK
    // var geolocation = new BMapGL.Geolocation();
    // // 开启SDK辅助定位
    // geolocation.enableSDKLocation();
    // geolocation.getCurrentPosition(function(r){
    //     if(this.getStatus() == window.BMAP_STATUS_SUCCESS){
    //         var mk = new BMapGL.Marker(r.point);
    //         map.addOverlay(mk);
    //         map.panTo(r.point);
    //         alert('您的位置：' + r.point.lng + ',' + r.point.lat);
    //     }
    //     else {
    //         alert('failed' + this.getStatus());
    //     }        
    // });

    // var dist = new BMapGL.DistrictLayer({
    //     name: '(北京,天津)',
    //     fillColor: '#5e8bff',
    //     fillOpacity: 1
    // });
    // map.addDistrictLayer(dist);

    // 设置掩膜区域坐标点数组
    //   var path = [
    //   new BMapGL.Point(116.31951444701689,40.03514188328609),
    //   new BMapGL.Point(116.31914525270483,40.03627653457813),
    //   new BMapGL.Point(116.31800011574751,40.03960034324275),
    //   new BMapGL.Point(116.31419172285828,40.03965310472413),
    //   new BMapGL.Point(116.31601289759325,40.037228304952336),
    //   new BMapGL.Point(116.31924096994166,40.03521921152976)
    // ]; 
    // // 创建区域掩膜实例
    // var mapmask = new BMapGL.MapMask(path, {
    //   showRegion: 'inside', // 显示区域范围以内部分
    //   isBuildingMask: true, // 楼块是否参与掩膜
    //   isPoiMask: true, // poi标注是否参与掩膜
    //   isMapMask: true // 底图是否参与掩膜
    // });
    // map.addOverlay(mapmask)

    // map.setHeading(64.5);   //设置地图旋转角度
    // map.setTilt(73);       //设置地图的倾斜角度
    // var map = new BMapGL.Map("allmap",{
    //     enableRotate: false,
    //     enableTilt: false
    // });
    // map.setMapType(BMAP_EARTH_MAP);      // 设置地图类型为地球模式

    // var scaleCtrl = new BMapGL.ScaleControl();  // 添加比例尺控件
    // map.addControl(scaleCtrl);
    // var zoomCtrl = new BMapGL.ZoomControl();  // 添加缩放控件
    // map.addControl(zoomCtrl);
    // var cityCtrl = new BMapGL.CityListControl();  // 添加城市列表控件
    // map.addControl(cityCtrl);

    // var opts = {
    //     offset: new BMapGL.Size(150, 5)
    // }
    // // 添加控件
    // map.addControl(new BMapGL.ScaleControl(opts));
    // // 移除控件
    // map.removeControl(new BMapGL.ScaleControl(opts));

    // var point = new BMapGL.Point(116.404, 39.915);   
    // var marker = new BMapGL.Marker(point);        // 创建标注   
    // map.addOverlay(marker);                     // 将标注添加到地图中

    // var myIcon = new BMapGL.Icon("markers.png", new BMapGL.Size(23, 25), {   
    //     // 指定定位位置。  
    //     // 当标注显示在地图上时，其所指向的地理位置距离图标左上   
    //     // 角各偏移10像素和25像素。您可以看到在本例中该位置即是  
    //     // 图标中央下端的尖角位置。   
    //     anchor: new BMapGL.Size(10, 25),   
    //     // 设置图片偏移。  
    //     // 当您需要从一幅较大的图片中截取某部分作为标注图标时，您  
    //     // 需要指定大图的偏移位置，此做法与css sprites技术类似。   
    //     imageOffset: new BMapGL.Size(0, 0 - 25)   // 设置图片偏移   
    // });     
    //     // 创建标注对象并添加到地图  
    // var marker = new BMapGL.Marker(point, {icon: myIcon});   
    // map.addOverlay(marker); 

    // marker.addEventListener("click", function(){   
    //     alert("您点击了标注");   
    // });

    // ------1
    // var polyline = new window.BMapGL.Polyline([
    //     new BMapGL.Point(116.399, 39.910),
    //     new BMapGL.Point(116.405, 39.920),
    //     new BMapGL.Point(116.425, 39.900)
    //   ], {strokeColor:"blue", strokeWeight:2, strokeOpacity:0.5});
    // map.addOverlay(polyline);

    // -------2
    // var polygon = new BMapGL.Polygon([
    //       new BMapGL.Point(116.387112,39.920977),
    //       new BMapGL.Point(116.385243,39.913063),
    //       new BMapGL.Point(116.394226,39.917988),
    //       new BMapGL.Point(116.401772,39.921364),
    //       new BMapGL.Point(116.41248,39.927893)
    //   ], {strokeColor:"blue", strokeWeight:2, strokeOpacity:0.5});
    // map.addOverlay(polygon);

    // --- 3
    var path = [{
        'lng': 116.297611,
        'lat': 40.047363
    }, {
        'lng': 116.302839,
        'lat': 40.048219
    }, {
        'lng': 116.308301,
        'lat': 40.050566
    }, {
        'lng': 116.305732,
        'lat': 40.054957
    }, {
        'lng': 116.304754,
        'lat': 40.057953
    }, {
        'lng': 116.306487,
        'lat': 40.058312
    }, {
        'lng': 116.307223,
        'lat': 40.056379
    }];
    var point = [];
    for (var i = 0; i < path.length; i++) {
        point.push(new BMapGL.Point(path[i].lng, path[i].lat));
    }
    var pl = new BMapGL.Polyline(point);

    var trackAni = new BMapGLLib.TrackAnimation(map, pl, {
        overallView: true, // 动画完成后自动调整视野到总览
        tilt: 30,          // 轨迹播放的角度，默认为55
        duration: 20000,   // 动画持续时长，默认为10000，单位ms
        delay: 3000        // 动画开始的延迟，默认0，单位ms
    });

    trackAni.start();

    // map.centerAndZoom(new BMapGL.Point(116.331398,39.897445), 12);
    // //创建地址解析器实例
    // var myGeo = new BMapGL.Geocoder();
    // // 将地址解析结果显示在地图上，并调整地图视野
    // myGeo.getPoint('北京市海淀区上地10街', function(point){
    //     if(point){
    //         console.log('坐标:', point)
    //         map.centerAndZoom(point, 16);
    //         map.addOverlay(new BMapGL.Marker(point, {title: '北京市海淀区上地10街'}))
    //     }else{
    //         alert('您选择的地址没有解析到结果！');
    //     }
    // }, '北京市')

    // map.centerAndZoom(new BMapGL.Point(116.331398,39.897445), 13);
    // var geoc = new BMapGL.Geocoder();
    // map.addEventListener('click', function(e){
    //     var pt = e.latlng;
    //     geoc.getLocation(pt, function(rs){
    //         var addComp = rs.addressComponents;
    //         alert(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
    //     })
    // })

    // var p1 = new BMapGL.Point(116.301934,39.977552);
    // var p2 = new BMapGL.Point(116.508328,39.919141);
    var walking = new BMapGL.WalkingRoute(map, {renderOptions:{map: map, autoViewport: true}});

    var driving = new BMapGL.DrivingRoute(map, {renderOptions:{map: map, autoViewport: true}});
   
    // driving.search(p1, p2);
    var output = '从上地到西单坐公交需要：';

    var transit = new BMapGL.TransitRoute(map,{
                      renderOptions: {map: map},
                      onSearchComplete: function(results){
                          var plan = results.getPlan(0);
                          output += '总时长：' + plan.getDuration(true);  //获取时间
                          output += '总路程：' + plan.getDistance(true);  //获取距离
                          console.log('output:', output);
                      },
                  });

    console.log(driving, walking, transit)


    let routes = [];
    map.addEventListener('click', function(e) {
      const pt = e.latlng;
      console.log('坐标:', pt)

      var marker = new BMapGL.Marker(pt);
      map.addOverlay(marker);


      if (routes.length > 2) {
        routes = [];
      }

      routes.push(pt);

      if (routes.length === 2) {
        walking.search(routes[0], routes[1]);
      }
    })

  }
}
</script>
