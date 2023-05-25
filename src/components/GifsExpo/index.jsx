import { useState } from "react"
const GifsExpo = ({categories = []}) => {
   const [urlList, setUrlList] = useState([])
    const getGifs = async (categories) => {
    const responsesList = await Promise.all(categories.map(async(category) => {
        const response = await fetch(
           `http://api.giphy.com/v1/gifs/search?api_key=CliJ36TeXNMBB5qd5z6DZiT5mWlZnbFP&q=${categories}`
            )
        const apiResponse = await response.json()
        return apiResponse.data
    }))
    let gifsList = []
    responsesList.forEach((data) => {
        data.forEach((item) => {
            gifsList = [...gifsList, item.images.fixed_width.url.split('?')[0]]
        })
    })
    setUrlList([...gifsList])
   }
   getGifs(categories)
   return (
        <>
        <div>
            {
                urlList.map((url) => {
                    return(
                        <img key={url} src={url}/>
                    )
                })
            }
        </div>
        </>
        )
}
export default GifsExpo