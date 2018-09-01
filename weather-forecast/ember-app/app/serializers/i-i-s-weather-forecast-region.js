import { Serializer as RegionSerializer } from
  '../mixins/regenerated/serializers/i-i-s-weather-forecast-region';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(RegionSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
