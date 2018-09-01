import { Model as DayForecastMixin, defineProjections } from
  '../mixins/regenerated/models/i-i-s-weather-forecast-day-forecast';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, DayForecastMixin, {

});
defineProjections(Model);
export default Model;
