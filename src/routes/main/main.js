const main = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    response.write(`
    <!doctype html>
    <html>
    <body>
       <h1>Main<h1>
    </body>
    </html>
  `);
    response.end();
}
module.exports = main;