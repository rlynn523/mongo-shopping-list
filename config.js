exports.DATABASE_URL = process.env.DATABASE_URL ||
    global.DATABASE_URL ||
    process.env.NODE_ENV === 'production' ?
    'mongodb://ryanlynn:rango123@ds049150.mlab.com:49150/heroku_r4flkwdr' :
    'mongodb://localhost/shopping-list-dev';
exports.PORT = process.env.PORT || 8080;
