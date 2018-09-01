import { Model as AreaMixin, defineProjections } from
  '../mixins/regenerated/models/i-i-s-weather-forecast-area';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, AreaMixin, {

});
defineProjections(Model);
export default Model;
