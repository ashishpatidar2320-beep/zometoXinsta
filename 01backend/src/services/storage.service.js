const  ImageKit  = require('imagekit');

const client = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

async function uploadFile(file , fileName ){
    const base64File = file.toString("base64")
const response = await client.upload({
  file: base64File,
  fileName: fileName,
});

return response
}

module.exports = {uploadFile}

