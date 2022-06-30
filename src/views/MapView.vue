<template>
    <div id="map"></div>

    <MapTools
        :tools="tools"
        :select="select"
    />
</template>

<script>
import MapTools from '@/components/MapTools';
const BMapGL = window.BMapGL;
// const BMapGLLib = window.BMapGLLib;
const BMAP_STATUS_SUCCESS = window.BMAP_STATUS_SUCCESS;
let map;

export default {
    name: 'MapView',

    components: {
        MapTools
    },

    data() {
        return {
            tools: [
                '当前位置',
            ],
            currentPos: new BMapGL.Point(116.404, 39.915),  // 默认
            zoom: 11,
        }
    },

    mounted() {
        this.createMap();
    },

    methods: {
        createMap() {
            map = new BMapGL.Map("map");
            map.centerAndZoom(
                new BMapGL.Point(116.404, 39.915), 
                this.zoom
            );
            map.enableScrollWheelZoom(true);
            // bind
            this.bindEventsHandle();
        },

        getCurrentPos() {
            const self = this;
            // browser
            const geolocation = new BMapGL.Geolocation();
            geolocation.getCurrentPosition(function(r) {
              if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                self.createMarker(r.point);
                // map.panTo(r.point);
              }
            })
        },

        bindEventsHandle() {
            // click event
            map.addEventListener('click', (e) => {
                const pt = e.latlng;
                this.currentPos = pt;
                this.createMarker(pt);
            })
        },

        setMapZoom(zoom) {
            this.zoom = zoom;
            map.setZoom(zoom);
        },

        createMarker(pt) {
            const marker = new BMapGL.Marker(pt);
            map.addOverlay(marker);
            map.panTo(pt);
            this.setMapZoom(18);
        },

        searchRoutes() {
            // walking.search(routes[0], routes[1]);
        },

        createDrive(type) {
            console.log(type);
            // var walking = new BMapGL.WalkingRoute(map, {renderOptions:{map: map, autoViewport: true}});
            // var driving = new BMapGL.DrivingRoute(map, {renderOptions:{map: map, autoViewport: true}});
        },

        select(name) {
            switch(name) {
                case '当前位置':
                    this.getCurrentPos();
                    break;
                default:
                    break;
            }
        }
    }
}
</script>

<style scoped>
#map {
    width: 100vw;
    height: 100vh;
}
</style>