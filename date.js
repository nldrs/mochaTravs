const getDate = () => new Date(Date.now()).toISOString().slice(0,10)

module.exports= getDate
