"use client"
// go to http://localhost:3030/route
import axios from "axios"
import { OpenRouteService } from "../../../api/openroute.service"
import React, { useState, useEffect } from 'react';


const KFC_CORDS = [
    [174.725334, -36.810466], // swap around so 174,-36 as to make in longitude/latitude format
    [174.744898, -36.852169],
    [174.766899, -36.845877], // latitude, longitude
    [174.781531, -36.847980],
    [174.711398, -36.870182],
    [174.776536, -36.871066],
    [174.732349, -36.882515],
    [174.747344, -36.886678],
    [174.796548, -36.892618],
    [174.848354, -36.897945],
    [174.855749, -36.880465],
    [174.898816, -36.900546],
]

export default function Page() {
    const [time, setTime] = useState(null);
    const [distance, setDistance] = useState(null);
    const [routeIndex, setRouteIndex] = useState(null);

    async function get_dis_time(LocationA: Array<number>, LocationB: Array<number>) {
        let time = null;
        let dis = null;

        const openRouteService = new OpenRouteService();
        const response = await openRouteService.getDirectionsServiceGeoJson({
            coordinates: [LocationA, LocationB] // longtitude, latitude
        }).catch((err) => {
            console.log("something went wrong", err.config.data)
        })


        time = response!.data.features[0].properties.summary.duration;
        dis = response!.data.features[0].properties.summary.distance;
        return { "time": time, "dis": dis }
    }

    function get_route(StartingP:Array<number>, TargetingP:Array<number>, startingT: Date, TargetT: Date) {
        let routeIndex: number[] = [1, 2, 3];
        startingT = new Date();
        TargetT = new Date();
        return routeIndex;
        
    }


    useEffect(() => {
        (async () => {
            const result = await get_dis_time(KFC_CORDS[0], KFC_CORDS[1]);
            setTime(result.time);
            setDistance(result.dis);
            const routeIndex = get_route(KFC_CORDS[0], KFC_CORDS[1], new Date(), new Date());
            setRouteIndex(routeIndex);
            //console.log(result.time);
            //console.log(result.dis);
        })()
    }, []);
    
 
    return (
        <p>{time} - {  routeIndex  } - {distance}</p>

    )
}