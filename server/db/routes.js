'use strict';
module.exports = function(app) {
    const db = require('./queries')

    app.route('/show')
        .get(db.show)

    app.route('/show/:name')
        .get(db.showName)


    //crud
    app.route('/del/:id')
        .delete(db.del)

    app.route('/maj/:id')
        .put(db.myUpdate)

    app.route('/new')
        .post(db.create)


}