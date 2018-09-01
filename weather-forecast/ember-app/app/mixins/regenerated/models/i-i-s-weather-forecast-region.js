import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  id: DS.attr('number'),
  name: DS.attr('string'),
  isArchive: DS.attr('boolean'),
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
  modelClass.defineProjection('RegionE', 'i-i-s-weather-forecast-region', {
    id: Projection.attr('Идентификатор'),
    name: Projection.attr('Наименование'),
    isArchive: Projection.attr('Архивный', { hidden: true })
  });
  modelClass.defineProjection('RegionL', 'i-i-s-weather-forecast-region', {
    id: Projection.attr('Идентификатор'),
    name: Projection.attr('Наименование'),
    isArchive: Projection.attr('Архивный', { hidden: true })
  });
};
