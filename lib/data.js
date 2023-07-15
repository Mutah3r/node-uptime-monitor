/**
 * Title: Handle Data
 * Description: Handle User Data
 * Author: Mutaher Ahmed Shakil
 * Date: 07/15/2023
 * 
 */

// dependencies
const fs = require('fs');
const path = require('path');

// module scaffolding
const lib = {};

// base directory of the data folder
lib.basedir = path.join(__dirname, '/../.data/');

// write data to file
lib.create = (dir, file, data, callback) => {
    // open file for writing
    fs.open(lib.basedir + dir + '/' + file + '.json', 'wx', (err, fileDescriptor) => {
        if (!err && fileDescriptor) {
            // convert data to string
            const stringData = JSON.stringify(data);

            // write data to file and then close it
            fs.writeFile(fileDescriptor, stringData, (err2) => {
                if (!err2) {
                    fs.close(fileDescriptor, (err3) => {
                        if (!err3) {
                            callback(false);
                        }
                        else {
                            callback('Error closing the new file');
                        }
                    });
                }
                else {
                    callback('Error writing to new file');
                }
            })
        }
        else {
            callback('There was an error. File may already exist');
        }
    })
}

// read data from file
lib.read = (dir, file, callback) => {
    fs.readFile(lib.basedir + dir + '/' + file + '.json', 'utf-8', (err, data) => {
        callback(err, data);
    });
}


// export module
module.exports = lib;