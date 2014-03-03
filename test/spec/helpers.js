define(['helpers'], function (helpers) {

    describe('helpers', function () {

        it('should be an object', function () {
            expect(helpers).to.be.an('object');
        });

        describe('#addPrefix', function () {

            it('should add the prefix to the beginning of each item of the array', function () {

                // sort of equals
                expect(helpers.prefixEach(['a','b','c'], 'letter-')).to.eql(['letter-a', 'letter-b', 'letter-c']);

            });

            it('should ignore non-string values', function () {

                var obj = {};
                var number = 5;
                var fn = function () {};

                var result = helpers.prefixEach([obj, number, fn]);

                // strict equals
                expect(result[0]).to.equal(obj);
                expect(result[1]).to.equal(number);
                expect(result[2]).to.equal(fn);

            });

            it('should pass the first parameter directly to _.map', function () {

                var arr = ['a', 'b', 'c'];
                helpers.prefixEach(arr, '');

                // use strict equal to test that the SAME array was passed to map()
                expect(helpers._.map.lastCall.args[0]).to.equal(arr);

            });

        });

    });

});