import { Model as PrecipitationMixin, defineProjections } from
  '../mixins/regenerated/models/i-i-s-weather-forecast-precipitation';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, PrecipitationMixin, {

});
defineProjections(Model);
export default Model;
