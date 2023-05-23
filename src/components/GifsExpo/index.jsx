const GifsExpo = ({categories = []}) => {
   const getGifs = (categories) => {
    let gifsList = []
    categories.forEach(async(category) => {
        const response = await fetch(
           `http://api.giphy.com/v1/gifs/search?api_key=CliJ36TeXNMBB5qd5z6DZiT5mWlZnbFP&q=${categories}&limit=10`
            )
        const apiResponse = await response.json()
           // console.log(apiResponse.data[0].images.fixed_width.url)
           gifsList = apiResponse.data.map((gif) => {
            return gif.images.fixed_width.url
           })
    })
    console.log(gifsList)
   }
   getGifs(categories)
    return (
        <h4>GifsExpo</h4>
    )
}
export default GifsExpo