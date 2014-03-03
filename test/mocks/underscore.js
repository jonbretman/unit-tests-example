define(['underscore'], function (_) {

    _.each(_.functions(_), function (method) {
        _[method] = sinon.spy(_[method]);
    });

    return _;

});