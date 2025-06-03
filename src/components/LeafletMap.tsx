import {
  MapContainer,
  ImageOverlay,
  useMap,
  Marker,
  Popup,
} from "react-leaflet";
import L, { CRS, type LatLngTuple } from "leaflet";
import { useEffect } from "react";

// 1) FitBounds stays the same
function FitBounds({ bounds }: { bounds: L.LatLngBoundsExpression }) {
  const map = useMap();
  useEffect(() => {
    map.options.crs = CRS.Simple;
    map.fitBounds(bounds, { animate: false });
  }, [map, bounds]);
  return null;
}

// 2) New: CoordinatesControl as a Leaflet.Control
function CoordinatesControl() {
  const map = useMap();

  useEffect(() => {
    // create container div
    const container = L.DomUtil.create("div", "leaflet-control-coords");
    Object.assign(container.style, {
      background: "rgba(255,255,255,0.8)",
      padding: "4px 8px",
      fontSize: "12px",
    });

    // define the control
    const coordsCtrl = new L.Control({ position: "bottomleft" });
    coordsCtrl.onAdd = () => container;
    coordsCtrl.addTo(map);

    // update on mousemove
    const onMouseMove = (e: L.LeafletMouseEvent) => {
      container.innerHTML = `${e.latlng.lat.toFixed(1)}, ${e.latlng.lng.toFixed(
        1
      )}`;
    };
    map.on("mousemove", onMouseMove);

    // cleanup
    return () => {
      map.off("mousemove", onMouseMove);
      map.removeControl(coordsCtrl);
    };
  }, [map]);

  return null;
}

type POI = { name: string; position: LatLngTuple };

export default function LeafletMap() {
  const width = 4095,
    height = 4095;
  const bounds: L.LatLngBoundsExpression = [
    [0, 0],
    [height, width],
  ];
  const padding = 300;
  const paddedBounds: L.LatLngBoundsExpression = [
    [-padding, -padding],
    [height + padding, width + padding],
  ];

  const pois: POI[] = [
    { name: "Hothall", position: [1128, 1100] },
    { name: "Coldhill", position: [600, 1800] },
    { name: "Greenfield", position: [1300, 2700] },
    { name: "Mon", position: [1800, 2680] },
    { name: "Winterheart", position: [1058, 1534] },
    { name: "Palemilton", position: [1658, 1908] },
  ];

  return (
    <MapContainer
      crs={CRS.Simple}
      bounds={bounds}
      minZoom={-1}
      maxZoom={2}
      style={{ width: "100%", height: "100vh", backgroundColor: "#222" }}
      scrollWheelZoom
      maxBounds={paddedBounds}
      maxBoundsViscosity={1.2}
    >
      <FitBounds bounds={bounds} />
      <ImageOverlay url="images/maps/map.png" bounds={bounds} opacity={1} />

      {/* stays fixed on screen */}
      <CoordinatesControl />

      {pois.map((poi, idx) => (
        <Marker key={idx} position={poi.position}>
          <Popup>
            <strong className="text-[#926c15]">{poi.name}</strong>
            <br />[{poi.position[0]}, {poi.position[1]}]
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
