import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('meteorologist', 'Meteorologists');
inflector.irregular('precipitation', 'Precipitations');
inflector.irregular('subscription', 'Subscriptions');
inflector.irregular('cataclysm', 'Cataclysms');
inflector.irregular('forecast', 'Forecasts');
inflector.irregular('overcast', 'Overcasts');
inflector.irregular('region', 'Regions');
inflector.irregular('area', 'Areas');

export default {};
