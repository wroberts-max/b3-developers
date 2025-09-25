"use client"

import { useEffect, useRef } from "react"
import maplibregl from "maplibre-gl"
import "maplibre-gl/dist/maplibre-gl.css"

export default function ServiceAreaMap({ heightClass = "h-[420px]" }: { heightClass?: string }) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ref.current) return

    const map = new maplibregl.Map({
      container: ref.current,
      style: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json",
      center: [-89.1, 30.4],
      zoom: 8,
    })

    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right")

    map.on("load", () => {
      map.addSource("service-area", { type: "geojson", data: "/service-area.geojson" })
      map.addLayer({
        id: "service-area-fill",
        type: "fill",
        source: "service-area",
        paint: { "fill-color": "#2563eb", "fill-opacity": 0.25 },
      })
      map.addLayer({
        id: "service-area-outline",
        type: "line",
        source: "service-area",
        paint: { "line-color": "#2563eb", "line-width": 2 },
      })
    })

    return () => map.remove()
  }, [])

  return <div ref={ref} className={`w-full rounded-lg overflow-hidden ${heightClass}`} />
}