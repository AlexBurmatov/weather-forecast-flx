import { Serializer as AreaSerializer } from
  '../mixins/regenerated/serializers/i-i-s-weather-forecast-area';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(AreaSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
