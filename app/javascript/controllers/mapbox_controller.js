import { Controller } from "@hotwired/stimulus"
import mapboxgl from "mapbox-gl"
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder"

export default class extends Controller {
   static values = {
      apiKey: String,
      markers: Array
  }
//   static targets = ["input_latitude", "input_longitude"]

//   initialize() {
//     this.token = "pk.eyJ1Ijoia2VsbGciLCJhIjoiY2wwdjNpc2NiMHptazNqbjVnaXZlbmN0OCJ9.K5WW-rictSQHsOyLjYx-sQ"
//     console.log("kelly1")
//   }


//   insertMuseums(data) {
//     data.features.forEach((result) => {
//       //   const museumTag = `<li>
//       //   <p>${result.place_name}</p>
//       //   <p>${result.properties.category}</p>
//       //   <p>${result.context.text[1]}</p>
//       // </li>`;
//       console.log(result[0])
//   //    list.insertAdjacentHTML('beforeend', museumTag);
//     })
//   }

//   geocode(event) {
//     event.preventDefault()
//     console.log("kelly2")
//     const fetchLatitude = this.input_latitudeTarget.value
//     const fetchLongitude = this.input_longitudeTarget.value
//     console.log(`${fetchLatitude}`)
//     console.log(`${fetchLongitude}`)
//     console.log(`https://api.mapbox.com/geocoding/v5/mapbox.places/museum.json?type=poi&proximity=${fetchLongitude},${fetchLatitude}&access_token=pk.eyJ1Ijoia2VsbGciLCJhIjoiY2wwdjNpc2NiMHptazNqbjVnaXZlbmN0OCJ9.K5WW-rictSQHsOyLjYx-sQ`)
//     fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/museum.json?type=poi&proximity=${fetchLongitude},${fetchLatitude}&access_token=pk.eyJ1Ijoia2VsbGciLCJhIjoiY2wwdjNpc2NiMHptazNqbjVnaXZlbmN0OCJ9.K5WW-rictSQHsOyLjYx-sQ`)
//       .then(response => response.json())
//       .then(data => this.insertMuseums(data));
//       //.then(data) => {

//         // const address = data.features.place_name
//         // const category = data.features.properties.category
//         // const postcode = data.features.context.text[1]
//         // this.#insertCoordinates(longitude, latitude)
//         // this.#insertMap(longitude, latitude)
//       //}


//     };


//   // #insertCoordinates(longitude, latitude) {
//   //   this.coordinatesTarget.innerText = `${latitude}, ${longitude}`
//   // }

//   // #insertMap(longitude, latitude) {
//   //   mapboxgl.accessToken = this.token
//   //   const map = new mapboxgl.Map({
//   //     container: "map",
//   //     style: "mapbox://styles/mapbox/streets-v9",
//   //     center: [ longitude, latitude ],
//   //     zoom: 12
//   //   })
//   //   new mapboxgl.Marker()
//   //     .setLngLat([ longitude, latitude ])
//   //     .addTo(map)
//   // }

  // ce qui marche bien mais qui n'est pas ce qui est demandé.
  connect() {
  mapboxgl.accessToken = this.apiKeyValue

  this.map = new mapboxgl.Map({
  container: this.element,
  style: "mapbox://styles/mapbox/streets-v10"
  })

  this.#addMarkersToMap()
  this.#fitMapToMarkers()
  this.map.addControl(new MapboxGeocoder({ accessToken: mapboxgl.accessToken,
  mapboxgl: mapboxgl }))
  }

  #addMarkersToMap() {
    this.markersValue.forEach((marker) => {
      const popup = new mapboxgl.Popup().setHTML(marker.info_window)
        new mapboxgl.Marker()
          .setLngLat([ marker.lng, marker.lat ])
          .addTo(this.map)
          .addTo(this.map)
  });
  }

  #fitMapToMarkers() {
    const bounds = new mapboxgl.LngLatBounds()
      this.markersValue.forEach(marker => bounds.extend([ marker.lng, marker.lat ]))
      this.map.fitBounds(bounds, { padding: 70, maxZoom: 15, duration: 0 })
   }

}



// - I take the access

// - I build the API URL
// https://api.mapbox.com/geocoding/v5/{endpoint}/{museum}.json
// https://api.mapbox.com/geocoding/v5/mapbox.places/museum,488609,23408.json?access_token=pk.eyJ1Ijoia2VsbGciLCJhIjoiY2wwdjNpc2NiMHptazNqbjVnaXZlbmN0OCJ9.K5WW-rictSQHsOyLjYx-sQ
// - I call the API URL with CURL ( or whatever to call an url)
// - I save the result in something (I search on google how to save a JSON object in rubi rails)
// - I parse the JSON (I search on google how to parse a JSON in ruby rails)
// - I build a list of museum ordered per postal code
// - I show the list in with a simple print
