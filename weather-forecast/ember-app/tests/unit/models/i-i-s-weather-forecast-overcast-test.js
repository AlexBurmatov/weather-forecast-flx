import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-weather-forecast-overcast', 'Unit | Model | i-i-s-weather-forecast-overcast', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-weather-forecast-area',
    'model:i-i-s-weather-forecast-cataclysm',
    'model:i-i-s-weather-forecast-day-forecast',
    'model:i-i-s-weather-forecast-meteorologist',
    'model:i-i-s-weather-forecast-overcast',
    'model:i-i-s-weather-forecast-possible-cataclysm',
    'model:i-i-s-weather-forecast-precipitation',
    'model:i-i-s-weather-forecast-region',
    'model:i-i-s-weather-forecast-subscription'
  ]
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
