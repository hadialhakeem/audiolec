const bucketName = 'audio-storage-111';
const destination = 'Destination object name, e.g. file.txt';

// Imports the Google Cloud client library
const {Storage} = require('@google-cloud/storage');

// Creates a client
const storage = new Storage();

export default async function uploadFile(filename) {
    // Uploads a local file to the bucket
    console.log(`${filename} uploaded to ${bucketName}.`);
    return await storage.bucket(bucketName).upload(filename, {
        // By setting the option `destination`, you can change the name of the
        destination: filename,
        // object you are uploading to a bucket.
        metadata: {
            // Enable long-lived HTTP caching headers
            // Use only if the contents of the file will never change
            // (If the contents will change, use cacheControl: 'no-cache')
            cacheControl: 'public, max-age=31536000',
        },
    });


}

// uploadFile().catch(console.error);