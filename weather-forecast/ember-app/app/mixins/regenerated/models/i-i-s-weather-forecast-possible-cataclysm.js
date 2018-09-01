import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  start: DS.attr('date'),
  finish: DS.attr('date'),
  isArchive: DS.attr('boolean'),
  cataclysm: DS.belongsTo('i-i-s-weather-forecast-cataclysm', { inverse: null, async: false }),
  dayForecast: DS.belongsTo('i-i-s-weather-forecast-day-forecast', { inverse: 'possibleCataclysm', async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      cataclysm: { presence: true },
      dayForecast: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});
export let defineProjections = function (modelClass) {
  modelClass.defineProjection('PossibleCataclysmE', 'i-i-s-weather-forecast-possible-cataclysm', {
    cataclysm: Projection.belongsTo('i-i-s-weather-forecast-cataclysm', 'Катаклизм', {
      name: Projection.attr('Name', { hidden: true })
    }, { displayMemberPath: 'name' }),
    start: Projection.attr('Начало катаклизма'),
    finish: Projection.attr('Конец катаклизма'),
    isArchive: Projection.attr('Архивный', { hidden: true })
  });
  modelClass.defineProjection('PossibleCataclysmL', 'i-i-s-weather-forecast-possible-cataclysm', {
    cataclysm: Projection.belongsTo('i-i-s-weather-forecast-cataclysm', 'Катаклизм', {
      name: Projection.attr('Катаклизм')
    }, { hidden: true }),
    start: Projection.attr('Начало катаклизма'),
    finish: Projection.attr('Конец катаклизма'),
    isArchive: Projection.attr('Архивный', { hidden: true })
  });
};
