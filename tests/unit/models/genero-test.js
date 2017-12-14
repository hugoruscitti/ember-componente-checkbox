import { moduleForModel, test } from 'ember-qunit';

moduleForModel('genero', 'Unit | Model | genero', {
  // Specify the other units that are required for this test.
  needs: ['model:juego']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
