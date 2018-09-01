import { Serializer as CataclysmSerializer } from
  '../mixins/regenerated/serializers/i-i-s-weather-forecast-cataclysm';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(CataclysmSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
