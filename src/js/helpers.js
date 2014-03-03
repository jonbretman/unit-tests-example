define(['underscore'], function (_) {

    return {

        _: _,

        prefixEach: function (arr, prefix) {

            return _.map(arr, function (value) {
                return _.isString(value) ? prefix + value : value;
            });

        }

    };

});