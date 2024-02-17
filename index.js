const express = require('express')

// app
const app = express();


// port
const PORT = process.env.PORT || 3000;

// listen
app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`)
})
