QUnit.test('Testing computeArea function with several sets of inputs', function (assert) {
    assert.equal(computeArea(3,4,5), 6, 'Tested with positive values for the sides');
	assert.throws(function () { computeArea(-5,6,7); }, /The given argument is not a valid value/, 'Passing in negative value raises an Error');
	assert.throws(function () { computeArea(0,9,12); }, /The given argument is not a valid value/, 'Passing in 0 as side value raises an Error');
});