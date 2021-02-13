function stringToBase64(transcription){
    let transcriptionBase64 = Buffer.from(transcription).toString('base64');
    console.log(transcriptionBase64)
    return transcriptionBase64;
}
