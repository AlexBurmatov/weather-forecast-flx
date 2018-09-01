import { Serializer as DayForecastSerializer } from
  '../mixins/regenerated/serializers/i-i-s-weather-forecast-day-forecast';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(DayForecastSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
