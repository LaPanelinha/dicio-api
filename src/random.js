const axios = require('axios');

module.exports = async (req, res) => {
    const { data: { word } } = await axios({
        method: "post",
        url: "https://www.dicio.com.br/randword/",
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: new URLSearchParams({ k: "a3" })
    })
    
    return res.send({ word})
}
