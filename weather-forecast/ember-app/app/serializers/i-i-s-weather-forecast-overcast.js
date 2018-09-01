import { Serializer as OvercastSerializer } from
  '../mixins/regenerated/serializers/i-i-s-weather-forecast-overcast';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(OvercastSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
