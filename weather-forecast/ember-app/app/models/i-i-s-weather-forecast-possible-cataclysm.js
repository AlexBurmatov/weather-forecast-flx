import { Model as PossibleCataclysmMixin, defineProjections } from
  '../mixins/regenerated/models/i-i-s-weather-forecast-possible-cataclysm';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, PossibleCataclysmMixin, {

});
defineProjections(Model);
export default Model;
