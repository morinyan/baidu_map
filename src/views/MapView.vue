<template>
    <div id="map"></div>
    <MapTools :tools="tools" />
</template>

<script>
import MapTools from '@/components/MapTools'
const BMapGL = window.BMapGL;
// const BMapGLLib = window.BMapGLLib;
let map;

export default {
    name: 'MapView',

    components: {
        MapTools
    },

    data() {
        return {
            tools: [
                'current position'
            ],
            currentPos: null,
        }
    },

    mounted() {
        this.createMap();
    },

    methods: {
        createMap() {
            map = new BMapGL.Map("map");
            map.centerAndZoom(new BMapGL.Point(116.404, 39.915), 11);
            map.enableScrollWheelZoom(true);
        },

        getCurrentPos() {
            // browser
            const geolocation = new BMapGL.Geolocation();
            geolocation.getCurrentPosition(function(r) {
              if (this.getStatus() == window.BMAP_STATUS_SUCCESS) {
                const mk = new BMapGL.Marker(r.point)
                map.addOverlay(mk);
                map.panTo(r.point);
              }
            })
        },

        bindEventsHandle() {
            // click event
            map.addEventListener('click', (e) => {
                const pt = e.latlng;
                this.currentPos = pt;

                var marker = new BMapGL.Marker(pt);
                map.addOverlay(marker);

            })
        },

        createMarker(pt) {
            const _pt = pt || this.currentPos;
            console.log(_pt)
        },

        searchRoutes() {
            // walking.search(routes[0], routes[1]);
        },

        createDrive() {

        },
    }
}
</script>

<style scoped>
#map {
    width: 100vw;
    height: 100vh;
}
</style>