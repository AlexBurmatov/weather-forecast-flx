import { Model as RegionMixin, defineProjections } from
  '../mixins/regenerated/models/i-i-s-weather-forecast-region';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, RegionMixin, {

});
defineProjections(Model);
export default Model;
