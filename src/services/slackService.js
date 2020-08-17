import axios from 'axios';

// An access token (from your Slack app or custom integration - xoxp, xoxb)
const token = process.env.REACT_APP_SLACK_API_TOKEN;

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
export default async dataUri => {
  var pngFile64 = dataUri.replace(/^data:image\/(png|png);base64,/, '');
  var pngBlob = base64ToBlob(pngFile64, 'image/png');

  const formData = new FormData();
  formData.set('token', token);
  formData.set('filetype', 'png');
  formData.append('file', pngBlob, 'visitor.png');

  const res = await axios({
    method: 'post',
    url: 'https://slack.com/api/files.upload',
    data: formData,
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  return {
    url_private: res.data.file && res.data.file.url_private,
  };
};
