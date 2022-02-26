const { MongoClient } = require("mongodb");

const Db = 'mongodb://root:Small01Dev*@18.168.65.40:27017/tictactoe?authSource=admin&authMechanism=SCRAM-SHA-256';

const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

var _db;

module.exports = {
    connectToServer: function(callback) {
        client.connect(function(err, db) {
            // Verify we got a good "db" object
            if (db) {
                _db = db.db("tictactoe");
                console.log("Successfully connected to MongoDB TTT.");
            }
            return callback(err);
        });
    },

    getDb: function() {
        return _db;
    },
};