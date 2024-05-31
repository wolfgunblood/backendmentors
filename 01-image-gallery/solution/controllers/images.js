const asyncWrapper = require("../middleware/async");
const getImages = asyncWrapper(async (req, res) => {
   
    k
    return res.status(200).send("Get all images");
});



module.exports = getImages;
