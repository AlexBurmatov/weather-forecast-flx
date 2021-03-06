import { Serializer as PrecipitationSerializer } from
  '../mixins/regenerated/serializers/i-i-s-weather-forecast-precipitation';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(PrecipitationSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
