import { AUDIO } from '../constants/mediaTypes';
import { audioData, videoData } from '../data/data';

export default class Request {
    static makeRequest = async ({ 
            endpoint, 
            method = 'GET', 
            headers = {}, 
            body = null,
            type= AUDIO
    }) => {
        //Dummy
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(type === AUDIO ? audioData : videoData), 1500)
            
        });

        //Real
        /*
        return new Promise((resolve, reject) => { 
            try {
                let response = await fetch(
                    endpoint, 
                    Request.getHeaders(method, headers, body)
                );
                let data;
                switch(response.headers.get('Content-Type')) {
                    case 'text/html':
                        data = response.text();
                        break;
                    case 'application/json':
                        data = response.json();
                        break;
                    default:
                        data = response.text();
                }
                let data = await response.json();
                resolve(data);
            }
            catch(error) {
                reject(error);
            }
                
        })
        */
    }

    static getHeaders = (method, headers = {}, body = null) => ({
        body,
        method: method || 'GET',
        headers,
    });
}