define('aws-violations-project/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/resourceviolations-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/resourceviolations-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/untaggedresources-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/untaggedresources-test.js should pass ESLint\n\n');
  });
});