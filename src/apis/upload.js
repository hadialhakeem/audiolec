const bucketName = 'audio-storage-111';
const destination = 'Destination object name, e.g. file.txt';

// Imports the Google Cloud client library
const {Storage} = require('@google-cloud/storage');

// Creates a client
const storage = new Storage();

function makeid(length) {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function makeName(fileName) {
    let newFileName = "";
    let fileNameList = fileName.split('.');
    for (let i = 0; i < fileNameList.length-1; ++i) {
        newFileName += fileNameList[i];
    }
    newFileName += '-' + makeid(5);
    newFileName += '.' + fileNameList[fileNameList.length-1];

    return newFileName;
}

async function uploadFile(filename) {
    // Uploads a local file to the bucket
    let uploadedFileName = makeName(filename)

    await storage.bucket(bucketName).upload(filename, {
        // By setting the option `destination`, you can change the name of the
        destination: uploadedFileName,
        // object you are uploading to a bucket.
        metadata: {
            // Enable long-lived HTTP caching headers
            // Use only if the contents of the file will never change
            // (If the contents will change, use cacheControl: 'no-cache')
            cacheControl: 'no-cache',
        },
    });

    console.log(`${filename} uploaded to ${bucketName}.`);
    return uploadedFileName;
}

/*
uploadFile('test-lec.mp3')
   .catch(console.error);
 */
