'use strict';

var grunt = require('grunt');
var ArgUtil = require('flopmang');

module.exports = function (task, exec, done) {
    var argUtil = new ArgUtil(task, [
        {
            option: 'fetch',
            flag: 'fetch'
        },
        {
            option: 'rebase',
            flag: 'rebase'
        }
    ]);

    var args = ['svn'].concat(argUtil.getArgFlags());

    // Add callback
    args.push(done);

    exec.apply(this, args);
};

module.exports.description = 'Download objects and refs from a SVN repo.';
