module.exports = ({ responseBody = '', contentType = 'text/html', status = '200 OK' }) => {
  return `HTTP/1.1 ${status}
Accept-Ranges: bytes
Content-Length: ${responseBody.length}
Content-Type: ${contentType}\r
\r
${responseBody}`;
};
