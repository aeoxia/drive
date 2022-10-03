import { useEffect, useState } from 'react';

const axios = require('axios').default
const url = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/videos-enhanced-c.json'

function News() {

    const [newsList, setNewsList] = useState([])

    useEffect(() => {
        //put inside useEffect to run once using []

        axios.get(url)
            .then(function (response) {
                // handle success
                // displays whole response structure
                console.log(response);

                // make sure to check structure of json from the url
                // see - https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/videos-enhanced-c.json
                const categories = response.data.categories
                const videos = categories[0].videos

                // from videoList [{ title: title1, subtitle: subtitle1 }, { title: title2, subtitle: subtitle2 }]
                // to video [title1, title2]
                const videoNames = videos.map((video) => {
                    return video.title
                }
                )
                setNewsList(videoNames)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            })
    }, [] // note: this array means it will change whenever the this array's content changes. 
        // in our case it is empty meaning nothing will change therefore it will execute once only
    )

    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <h1>News</h1>
                    <p>This is the news page</p>
                    <ul>
                        {
                            newsList.map((item) =>
                                {
                                    // what is the key for? it is used to make the UI list efficient
                                    // read more here https://reactjs.org/docs/lists-and-keys.html
                                    return <li key={item}>{item}</li>
                                }
                            )
                        }
                    </ul>
                </div>
            </header>
        </div>

    )
}

export default News