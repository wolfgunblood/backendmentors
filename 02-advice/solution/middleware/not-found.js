const notFound = (req,res) => {
    console.log('ROUTE DOES NOT EXISTS')
    return res.status(404).send('not found')
}

module.exports = notFound