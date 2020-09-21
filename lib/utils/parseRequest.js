module.exports = rawRequest => {
  return {
    method: rawRequest.toString().split('\n')[0].split(' ')[0],
    path: rawRequest.toString().split('\n')[0].split(' ')[1],
    body: rawRequest.toString().replace(/\r\n/g, '\n').replace(/\r/g, '\n').split(/\n\n/g)[1]
  };
};
