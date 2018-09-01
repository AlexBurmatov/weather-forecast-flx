import { Model as CataclysmMixin, defineProjections } from
  '../mixins/regenerated/models/i-i-s-weather-forecast-cataclysm';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, CataclysmMixin, {

});
defineProjections(Model);
export default Model;
