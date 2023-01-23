import { TidalAPI } from "tidalapi-ts";

export class Tidal2Api {
    
    constructor(username, password, token) {

        
        
        // if (!username || !password || !token)
        //     throw new Error("Missing credentials");
        // this needs to go to the server node.js
        this.baseUrl = 'https://listen.tidal.com/v1/search/top-hits?query=bonobo%20kerala&limit=3&offset=0&types=ARTISTS,ALBUMS,TRACKS,VIDEOS,PLAYLISTS&includeContributors=true&countryCode=PL&locale=en_US&deviceType=BROWSER';
        this.authData = { username, password, token };
    }
    
    search = async (params) => {
        
        console.log("Username: " + this.authData.username);
        console.log("Password: " + this.authData.password);
        console.log("Token: " + this.authData.token);
        const service = '/search/top-hits'
        
        const api = new TidalAPI({
            username: this.authData.username,
            password: this.authData.password,
            // Could also be 'LOSSLESS' but this only supported on premium subscriptions
            quality: 'HIGH'
        });

        const artists = await api.search({query: 'Dream Theater', limit: 1, types: "artists"});
        console.log(artists);

        this.tryLogin(this.authData);

        fetch(this.baseUrl, {
            method: "GET",
            headers: {
                'Origin': 'http://listen.tidal.com',
                'X-Tidal-SessionId': "CzET4vdadNUFQ5JU",
                "authority": "listen.tidal.com",
                "authorization": "Bearer eyJraWQiOiJ2OU1GbFhqWSIsImFsZyI6IkVTMjU2In0.eyJ0eXBlIjoibzJfYWNjZXNzIiwidWlkIjoxODYwNTA2NTksInNjb3BlIjoicl91c3Igd191c3IiLCJnVmVyIjowLCJzVmVyIjowLCJjaWQiOjIzMTAsImN1ayI6ImVmMjRkNTgyLTQ4MmYtNDBiNC05Y2QxLTI1NDQ4MTMyMjMyYiIsImV4cCI6MTY0Njg0MTQ1OSwic2lkIjoiMmIxYzI2Y2EtZDc3Ny00ZDA3LTlhN2MtMmZkYzk5OTAxZTlkIiwiaXNzIjoiaHR0cHM6Ly9hdXRoLnRpZGFsLmNvbS92MSJ9.hm1O91aXuYYoc1VUhwaSVaI7Ip2_zvComoNFCS51jxwkoi_QL4lAgu8AA4FYZwjMcDR5kYo8p9P59XBwtj_dDQ",
                "cookie" : "app_lang=en; _gcl_au=1.1.1305949012.1646597535; _scid=2989a35b-f610-48c6-9358-212da7053ab4; _fbp=fb.1.1646597535508.1057603243; _rdt_uuid=1646597535665.2acbf814-a068-4e8e-b8cb-4d7edea0a25e; cjConsent=MHxZfDB8Tnww; _gid=GA1.2.281231715.1646754975; tdlTrk=4cb39bc1-9ef8-11ec-9344-fb6054ae6dfa; web.sid.tidal.com=s%3A4cb39bc0-9ef8-11ec-9344-fb6054ae6dfa.9kl08JHIjsevFwX6xfi%2FbLf4zqKvjJzgy91u98d5YqM; amplitude_id_nulltidal.com=eyJkZXZpY2VJZCI6IjZhZmIxYWEyLTRjMGUtNGIzZi05Yjg5LWM4ZTIzZTZhM2U1OVIiLCJ1c2VySWQiOiIxODYwNTA2NTkiLCJvcHRPdXQiOmZhbHNlLCJzZXNzaW9uSWQiOjE2NDY3NTQ5ODIzMDcsImxhc3RFdmVudFRpbWUiOjE2NDY3NTUwNTU3NDAsImV2ZW50SWQiOjIsImlkZW50aWZ5SWQiOjIsInNlcXVlbmNlTnVtYmVyIjo0fQ==; fbm_185717988231456=base_domain=.tidal.com; fbsr_185717988231456=simnMzYtw4t04gb6GEMK8w1PtwgXUABlGsOfOuMBPJw.eyJ1c2VyX2lkIjoiMTEzNDIzMTIzMzI2NTIxNCIsImNvZGUiOiJBUUJ2eksyM2s5dUtCQ3dBV0pYLXdoOHcwWFRIM2xLZGtUYnhTaldPVGRfTjFWY3YtbnJMU1BJZzJIcXhDYjlFNmg4T0lQV2NvdWVSTFJ1NzlHdnRJZ0NVenA0ZUlfOHNfSGpkdlNONVhUa281VlI5d24zZVk2MFZod2pweGlOV1pNRVlNLUdxcFNZRU1wcTlRbnlmQ2NibGc0b2FEaDRvUE1VbUttblItX09iOWZJS2FSbHowTHJEdkJUWHg4TzFhdW9FYnN4dngycHpBN0ptUHlMT0JOSjloYlF6ZGR4clhWRlgwMHdXQVRWOXEydmVkZVR0ZFFlN3ltQWhISnUwSnRZMUdKWmVJZndETndrdHJfQU93VjJjYjRBNEZ2dHJwRHJpUnh0X21sWDhTRmd2UHVJVmY3aUtqV1RoN2pobGFzclp3UGtEeHdPLWxqUUstdFVUVklCeCIsIm9hdXRoX3Rva2VuIjoiRUFBQ282TmEzaVNBQkFLME1aQ25UNXduUGVNTEhTRG9wSUJPUFdBSlNTdkt2QnBpSDZ5VTlIWGNJU1pDeElrMTN3Z1hSN1FZY1d6S2FWTkx1ZTBnNWhjVjJmRlcwYnEyN3ZWQnNzdUJ4N2k2VGJGYzNCOEJmUnBKeXByTU5tTEt4RUZVSmRQcjF2Tk1TcFhaQnhvVVdVY1ZIa3gxbjB1S3d4Mm02M3FWZnNTaFU5Mk1hU1J3IiwiYWxnb3JpdGhtIjoiSE1BQy1TSEEyNTYiLCJpc3N1ZWRfYXQiOjE2NDY4MjYxMjB9; _ga_L3VKM7RRQP=GS1.1.1646826120.2.0.1646826120.0; _ga=GA1.2.1486002994.1646597536; _gat_gtag_UA_107436206_3=1; datadome=bIvOe0c7aEIcJZqamTpwmjjYIC.D81J9VmxA0HR-YrO394kvUNnmaieJRU~sokMFki-SbdI0NcixThGZ3MtMDiI.whmEB3sg8_lZo3NqrWq~Z7MAW0MJ-okaGhl5JUQ",
                "referer": "https://listen.tidal.com/",
                "sec-fetch-mode" : "cors",
                "sec-fetch-site" : "same-origin"
            }
        })
        .then(response => response.json())
        .then(response => {
            console.log(response);
        })
        .catch(err => { console.log(err);});
    }
}