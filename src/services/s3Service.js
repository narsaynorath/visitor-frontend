import S3 from 'aws-s3';

function base64ToBlob(base64, mime) {
  mime = mime || '';
  var sliceSize = 1024;
  var byteChars = window.atob(base64);
  var byteArrays = [];

  for (
    var offset = 0, len = byteChars.length;
    offset < len;
    offset += sliceSize
  ) {
    var slice = byteChars.slice(offset, offset + sliceSize);

    var byteNumbers = new Array(slice.length);
    for (var i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    var byteArray = new Uint8Array(byteNumbers);

    byteArrays.push(byteArray);
  }

  return new Blob(byteArrays, { type: mime });
}

const config = {
  bucketName: 'securitycompass-visitor-images',
  region: 'us-east-2',
  accessKeyId: process.env.REACT_APP_S3_ACCESS,
  secretAccessKey: process.env.REACT_APP_S3_SECRET,
};

const S3Client = new S3(config);

export default async dataUri => {
  var pngFile64 = dataUri.replace(/^data:image\/(png|png);base64,/, '');
  var file = base64ToBlob(pngFile64, 'image/png');

  const res = await S3Client.uploadFile(file, 'visitor');

  return res.ok
    ? res.location
    : 'https://securitycompass-visitor-images.s3.us-east-2.amazonaws.com/Black_colour.jpg';
};
