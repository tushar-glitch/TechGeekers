const express = require('express')
const app = express()
const axios = require('axios')
require('dotenv').config()

app.get('/api/v1/getimage', async (req, res) => {
    const { q } = req.query
    if (q) {
        try {
            const resp_data = await axios.get(`https://pixabay.com/api/?key=${process.env.PIXABAY_KEY}&q=${q}`)
            const data = resp_data.data.hits
            var image_data = [];
            for (let i in data) {
                image_data.push({
                    image_url: data[i].webformatURL,
                    image_alt_tag: data[i].tags
                })
            }
            res.status(200).json({msg:"Data fetched successfully!", image_data})
        }
        catch (error) {
            res.status(500).json({msg:"Something went wrong!"})
        }
    }
    else {
        res.status(404).json({msg:"Please provide query string!"})
    }
})

app.listen(3333)