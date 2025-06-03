import "react-leaflet";

declare module "react-leaflet" {
  interface MapContainerProps {
    crs?: unknown;
    maxBounds?: unknown;
    maxBoundsViscosity?: number;
  }
  interface ImageOverlayProps {
    opacity?: number;
  }
}
