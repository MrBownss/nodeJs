
const http = require("http")
const moment = require('moment')

const PORT = 3000;
const body = {
    Name : 'ahmad taufik',
    Age : 23,
    Religion : 'Islam',
    Hobby : 'Swimming, Fishing',
    creat_at : moment()
    }

const data = res => {
    res.statusCode = 200;
    res.setHeader("content-type", "text/json");
    res.write(JSON.stringify(body));
    res.end();
}

const page404 = res => {
    res.statusCode = 404;
    res.setHeader("content-type", "text/json");
    res.write(JSON.stringify({
        status: 'not found',
        massage: 'Resource not found'
    }));
    res.end();
}

const home = res => {
    res.end('<h1>Home Page</h1>');
}

const server = http.createServer((req, res) => {
    switch(req.url) {
        case '/data': data(res); break;
        case '/': home(res); break;
        default: page404(res); break;
    }
    
});

server.listen(PORT, () => console.log(`Server running at port localhost:${PORT}`));

