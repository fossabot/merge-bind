const mergeBind = require('./index');

const testFn = (...args) => args;

const bound = mergeBind(testFn, {
    someDefaultOption: 'foo',
});

test('supplement first argument with pre-configured defaults', () => {

    expect(bound({someOtherOption: 'bar'})).toEqual([{
        someDefaultOption: 'foo',
        someOtherOption:   'bar',
    }]);
});

test('allow overrides', () => {

    expect(bound({someDefaultOption: 'baz'})).toEqual([{
        someDefaultOption: 'baz',
    }]);
});

test('carry rest of the arguments', () => {

    expect(bound({}, 'more', 'args')).toEqual([{
        someDefaultOption: 'foo',
    }, 'more', 'args']);
});