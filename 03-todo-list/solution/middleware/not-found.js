const notFound = (req,res) => {
    console.log("ROUTE NOT FOUND")
    res.status(404).send("not found")
}

module.exports = notFound