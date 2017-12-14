import { moduleForModel, test } from 'ember-qunit';

moduleForModel('juego', 'Unit | Model | juego', {
  // Specify the other units that are required for this test.
  needs: ['model:genero']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
