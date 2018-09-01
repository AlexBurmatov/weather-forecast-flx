import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import WindDirectionEnum from '../enums/i-i-s-weather-forecast-wind-direction';

export default FlexberryEnum.extend({
  enum: WindDirectionEnum,
  sourceType: 'IIS.weather_forecast.WindDirection'
});
