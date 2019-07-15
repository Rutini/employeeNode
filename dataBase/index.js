const Sequelize = require('sequelize');
const fs = require('fs');
const resolve = require('path').resolve;

module.exports = (() => {
    let instance;

    function initConnection() {
        let client = new Sequelize(process.env.DATABASE, process.env.USERNAME, process.env.PASSWORD, {
            host: process.env.HOST,
            dialect: process.env.DIALECT,
            operatorsAliases: false,
            logging: false
        });
        let models = {};

        function getModels() {
            fs.readdir('./dataBase/models', (err, files) => {
                files.forEach(file => {
                    const modelName = file.split('.')[0];
                    models[modelName] = client.import(resolve(`./dataBase/models/${modelName}`));
                });
            });
        }

        return {
            getModel: (modelName) => models[modelName],
            setModels: () => {
                return getModels();
            }
        };
    }

    return {
        getInstance: () => {
            if (!instance) {
                instance = initConnection();
            }
            return instance;
        }
    }
})();
