import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  name: DS.attr('string'),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});
export let defineProjections = function (modelClass) {
  modelClass.defineProjection('OvercastE', 'i-i-s-weather-forecast-overcast', {
    name: Projection.attr('Наименование')
  });
  modelClass.defineProjection('OvercastL', 'i-i-s-weather-forecast-overcast', {
    name: Projection.attr('Наименование')
  });
};
