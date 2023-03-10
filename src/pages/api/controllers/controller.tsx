import axios from 'axios';

export interface PlacesApiResponse {
    results: {
      photos(photos: any): any;
      name: string;
      formatted_address: string;
      // add more fields as needed
    }[];
  }

export class PlacesController {
    private readonly API_BASE_URL = 'https://maps.googleapis.com/maps/api/place';
    
    constructor(private readonly apiKey: string) {}
    
    async searchPlaces(query: string): Promise<PlacesApiResponse> {
        const url = `${this.API_BASE_URL}/textsearch/json`;
        const response = await axios.get(url, {
            params: {
                key: this.apiKey,
                query,
                types: 'restaurant'
            },
        });
        return response.data as PlacesApiResponse;
    }
    
    async getPlaceDetails(placeId: string): Promise<PlacesApiResponse['results'][0]> {
        const url = `${this.API_BASE_URL}/details/json`;
        const response = await axios.get(url, {
            params: {
                key: this.apiKey,
                place_id: placeId,
            },
        });
        return response.data.result as PlacesApiResponse['results'][0];
    }
}