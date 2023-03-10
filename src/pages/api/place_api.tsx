import type { NextApiRequest, NextApiResponse } from 'next'
import {PlacesController, PlacesApiResponse } from './controllers/controller'

const controller = new PlacesController("AIzaSyC9kSQZw-WnCbS3gDBIXhRYfhP5XxTzhHM"); // replace with your actual API key

export default async function placesapi(
    req: string,
  ) {
    const query = req
    try {
        const response: PlacesApiResponse = await controller.searchPlaces(query);
        return response
    } catch (error) {
    // res.status(500).json({ error: error.message });
    let errorMessage = "Failed to do something exceptional";
    if (error instanceof Error) {
        errorMessage = error.message;
    }
    console.log(errorMessage);
    }
}

