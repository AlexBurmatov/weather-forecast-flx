import { Serializer as MeteorologistSerializer } from
  '../mixins/regenerated/serializers/i-i-s-weather-forecast-meteorologist';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(MeteorologistSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
