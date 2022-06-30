const BMapGL = window.BMapGL;
// const BMapGLLib = window.BMapGLLib;

export class BMap {
  constructor(container, options = {}) {
    this.opt = Object.assign({ }, options);
    this.$el = container;
    this.map = null;
    this.currentPos = null;
    this.defaultPos = new BMapGL.Point(116.404, 39.915);
    this.defaultZ = 11;

    this.init()
  }

  init() {
    if (this.$el) {
      this.map = BMapGL.Map(this.$el)
      this.map.centerAndZoom(this.defaultPos, this.defaultZ);
      this.map.enableScrollWheelZoom(true);
    }
  }

  getCurrentPos() {
    // browser
    const geolocation = new BMapGL.Geolocation();
    geolocation.getCurrentPosition(function(r) {
      if (this.getStatus() == window.BMAP_STATUS_SUCCESS) {
        this.currentPos = r.point;
      }
    })
  }

  setMapZoom(zoom) {
    this.defaultZ = zoom;
    this.map.setZoom(zoom);
  }

  

}
