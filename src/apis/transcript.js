// Imports the Google Cloud client library
const speech = require('@google-cloud/speech');

// Creates a client
const client = new speech.SpeechClient();

let encoding;
var fileType;
var fileName;

if(fileType == '.mp3'){
    encoding = 'MP3'
}else if(fileType == '.wav'){
    encoding = 'LINEAR16'
}

const bucketName = 'audio-storage-111/';
const gcsUri = 'gs://' + bucketName + fileName + fileType;
const sampleRateHertz = 16000;

// gcsUri = 'gs://my-bucket/audio.raw';

const config = {
    encoding: encoding,
    sampleRateHertz: sampleRateHertz,
};

const audio = {
    uri: gcsUri,
};

const request = {
    config: config,
    audio: audio,
};

// Detects speech in the audio file. This creates a recognition job that you
// can wait for now, or get its result later.
const [operation] = await client.longRunningRecognize(request);
// Get a Promise representation of the final result of the job
const [response] = await operation.promise();
const transcription = response.results
    .map(result => result.alternatives[0].transcript)
    .join('\n');

const confidence =  response.results
    .map(result => result.alternatives[0].confidence)
    .join('\n');
console.log(`Transcription: ${transcription}`);