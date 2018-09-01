import { Model as OvercastMixin, defineProjections } from
  '../mixins/regenerated/models/i-i-s-weather-forecast-overcast';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, OvercastMixin, {

});
defineProjections(Model);
export default Model;
