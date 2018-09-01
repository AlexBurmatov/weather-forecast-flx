import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-weather-forecast-day-forecast', 'Unit | Serializer | i-i-s-weather-forecast-day-forecast', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-weather-forecast-day-forecast',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-weather-forecast-wind-direction',

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

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
