import axios from "axios"
import type { AxiosInstance } from "axios";

interface getDirectionsServiceGeoJsonDTO {
    coordinates: Array<Array<number>>;
}

export class OpenRouteService {
    private _api: AxiosInstance;

    constructor() {
        this._api = axios.create({
            baseURL: 'https://api.openrouteservice.org/v2/',
            timeout: 5000,
            headers: { 'Authorization': '5b3ce3597851110001cf6248fa29c86e8f96454d8fbd8099f4b6dd60' }
        });
    }

    async getDirectionsServiceGeoJson(body: getDirectionsServiceGeoJsonDTO) {
        return this._api.post("directions/driving-car/geojson", body);
    }
}