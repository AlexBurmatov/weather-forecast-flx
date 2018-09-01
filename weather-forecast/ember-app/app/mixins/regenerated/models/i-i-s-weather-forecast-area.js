import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  id: DS.attr('number'),
  name: DS.attr('string'),
  isArchive: DS.attr('boolean'),
  region: DS.belongsTo('i-i-s-weather-forecast-region', { inverse: null, async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      region: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});
export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AreaE', 'i-i-s-weather-forecast-area', {
    id: Projection.attr('Идентификатор'),
    name: Projection.attr('Наименование'),
    isArchive: Projection.attr('Архивный'),
    region: Projection.belongsTo('i-i-s-weather-forecast-region', 'Регион', {
      name: Projection.attr('Наименование региона', { hidden: true })
    }, { displayMemberPath: 'name' })
  });
  modelClass.defineProjection('AreaL', 'i-i-s-weather-forecast-area', {
    id: Projection.attr('Идентификатор'),
    name: Projection.attr('Наименование'),
    isArchive: Projection.attr('Архивный', { hidden: true }),
    region: Projection.belongsTo('i-i-s-weather-forecast-region', 'Регион', {
      name: Projection.attr('Регион')
    }, { hidden: true })
  });
};
