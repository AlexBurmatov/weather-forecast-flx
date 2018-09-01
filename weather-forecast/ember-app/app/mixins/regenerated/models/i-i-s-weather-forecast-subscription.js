import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  email: DS.attr('string'),
  timeBeforeCataclysm: DS.attr('date'),
  isArchive: DS.attr('boolean'),
  area: DS.belongsTo('i-i-s-weather-forecast-area', { inverse: null, async: false }),
  cataclysm: DS.belongsTo('i-i-s-weather-forecast-cataclysm', { inverse: null, async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      area: { presence: true },
      cataclysm: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});
export let defineProjections = function (modelClass) {
  modelClass.defineProjection('SubscriptionE', 'i-i-s-weather-forecast-subscription', {
    cataclysm: Projection.belongsTo('i-i-s-weather-forecast-cataclysm', 'Катаклизм', {
      name: Projection.attr('Name', { hidden: true })
    }, { displayMemberPath: 'name' }),
    area: Projection.belongsTo('i-i-s-weather-forecast-area', 'Местность', {
      name: Projection.attr('Name', { hidden: true })
    }, { displayMemberPath: 'name' }),
    email: Projection.attr('Email'),
    timeBeforeCataclysm: Projection.attr('Интервал оповещения о катаклизме'),
    isArchive: Projection.attr('Архивный', { hidden: true })
  });
  modelClass.defineProjection('SubscriptionL', 'i-i-s-weather-forecast-subscription', {
    cataclysm: Projection.belongsTo('i-i-s-weather-forecast-cataclysm', 'Катаклизм', {
      name: Projection.attr('Катаклизм')
    }, { hidden: true }),
    area: Projection.belongsTo('i-i-s-weather-forecast-area', 'Местность', {
      name: Projection.attr('Местность')
    }, { hidden: true }),
    email: Projection.attr('Email'),
    timeBeforeCataclysm: Projection.attr('Интервал оповещения о катаклизме'),
    isArchive: Projection.attr('Архивный', { hidden: true })
  });
};
