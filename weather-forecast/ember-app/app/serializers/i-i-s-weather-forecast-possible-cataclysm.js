import { Serializer as PossibleCataclysmSerializer } from
  '../mixins/regenerated/serializers/i-i-s-weather-forecast-possible-cataclysm';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(PossibleCataclysmSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
