import { Model as MeteorologistMixin, defineProjections } from
  '../mixins/regenerated/models/i-i-s-weather-forecast-meteorologist';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, MeteorologistMixin, {

});
defineProjections(Model);
export default Model;
