'use strict';

var command = require('../lib/commands').svn;
var Test = require('./_common');

describe('svn', function () {

    it('should run svn fetch', function (done) {
        var options = {
            fetch: 'true'
        };
        new Test(command, options)
            .expect(['svn', 'fetch'])
            .run(done);
    });

    it('should run svn rebase', function (done) {
        var options = {
            rebase: 'true'
        };
        new Test(command, options)
            .expect(['svn', 'rebase'])
            .run(done);
    });
});
