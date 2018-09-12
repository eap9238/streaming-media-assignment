const fs = require('fs');

const getPage = (request, response, index) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

const getIndex = (request, response) => {
    const index = fs.readFileSync(`${__dirname}/../client/client.html`);
    getPage(request, response, index);
};

const getParty = (request, response) => {
    const index = fs.readFileSync(`${__dirname}/../client/client.html`);
    getPage(request, response, index);
};

const getBling = (request, response) => {
    const index = fs.readFileSync(`${__dirname}/../client/client2.html`);
    getPage(request, response, index);
};

const getBird = (request, response) => {
    const index = fs.readFileSync(`${__dirname}/../client/client3.html`);
    getPage(request, response, index);
};

module.exports.getIndex = getIndex;
module.exports.getParty = getParty;
module.exports.getBling = getBling;
module.exports.getBird = getBird;
