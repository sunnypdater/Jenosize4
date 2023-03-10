import axios from "axios";
import placesapi from "../api/place_api"
import React, { useEffect, useState } from "react";

type resa = {
    photo_url: string,
    name: string,
    detail: string
};

export default function Contents() {
    const [res, setRes] = useState([]);
    
    useEffect(() => {
        async function getData(){
            let results: resa[] = []
            var Raw_data = await placesapi( "test" )
            console.log("Raw_Data : ",Raw_data)
            if (Raw_data?.results) {
                var result = Raw_data?.results
                console.log(Raw_data?.results)
                result.forEach(element => {
                    console.log(element)
                    if(element.photos){
                        // let a = element?.photos[0].photo_reference as string
                        results.push({
                            photo_url: `https://maps.googleapis.com/maps/api/place/photo?photoreference=${element.photos[0].photo_reference}&sensor=false&maxheight=300&maxwidth=300&key=AIzaSyC9kSQZw-WnCbS3gDBIXhRYfhP5XxTzhHM`,
                            name: '',
                            detail: ''
                        });       
                    }});
                }
                setRes(results)
            }
    
        getData();
        }, []);

        const Results_content = () => {
            return <>
                <div style={{width: '50%',display: 'flex',margin: '0 auto'}}>
                        <div style={{padding : '4px', display:'flex' }}>
                            <img src="https://maps.googleapis.com/maps/api/place/photo?photoreference=AfLeUgOQJa9t1E2QPkljAx6TDWZqhxw1gcbp1H3pR9BGR1I5ySMON5eO2g27JZUI4JjR1LrklGyvdiGbpIc-XEh7b-YUxBiMIjfXEkMnY54bN_v-RniQiYBCKILi-Ft_Ma4xrHll4mR22cz-Cc6JMZynfvaVLGjL_j2ciRLdlwFdyc2u88T1&sensor=false&maxheight=300&maxwidth=200&key=AIzaSyC9kSQZw-WnCbS3gDBIXhRYfhP5XxTzhHM" />
                        </div>
                        <div style={{padding : '4px', }}>
                            <h3>What is Lorem Ipsum?</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                </div>
            </>
        }

    return (
        <>
        <div >
            <Results_content/>
        </div>
        </>
    )
}



