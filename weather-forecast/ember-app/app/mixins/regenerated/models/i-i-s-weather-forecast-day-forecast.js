import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  date: DS.attr('date'),
  temperature: DS.attr('number'),
  preasure: DS.attr('number'),
  windDirection: DS.attr('i-i-s-weather-forecast-wind-direction'),
  windSpeed: DS.attr('number'),
  windSpeedExtrem: DS.attr('number'),
  /**
    Non-stored property.

    @property forecastInLine
  */
  forecastInLine: DS.attr('string'),
  /**
    Method to set non-stored property.
    Please, use code below in model class (outside of this mixin) otherwise it will be replaced during regeneration of models.
    Please, implement 'forecastInLineCompute' method in model class (outside of this mixin) if you want to compute value of 'forecastInLine' property.

    @method _forecastInLineCompute
    @private
    @example
      ```javascript
      _forecastInLineChanged: Ember.on('init', Ember.observer('forecastInLine', function() {
        Ember.run.once(this, '_forecastInLineCompute');
      }))
      ```
  */
  _forecastInLineCompute: function() {
    let result = (this.forecastInLineCompute && typeof this.forecastInLineCompute === 'function') ? this.forecastInLineCompute() : null;
    this.set('forecastInLine', result);
  },
  lastEditingDate: DS.attr('date'),
  isArchive: DS.attr('boolean'),
  precipitation: DS.belongsTo('i-i-s-weather-forecast-precipitation', { inverse: null, async: false }),
  area: DS.belongsTo('i-i-s-weather-forecast-area', { inverse: null, async: false }),
  overcast: DS.belongsTo('i-i-s-weather-forecast-overcast', { inverse: null, async: false }),
  editor: DS.belongsTo('i-i-s-weather-forecast-meteorologist', { inverse: null, async: false }),
  possibleCataclysm: DS.hasMany('i-i-s-weather-forecast-possible-cataclysm', { inverse: 'dayForecast', async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      precipitation: { presence: true },
      area: { presence: true },
      overcast: { presence: true },
      editor: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});
export let defineProjections = function (modelClass) {
  modelClass.defineProjection('DayForecastE', 'i-i-s-weather-forecast-day-forecast', {
    date: Projection.attr('Дата'),
    area: Projection.belongsTo('i-i-s-weather-forecast-area', 'Местность', {
      name: Projection.attr('Name', { hidden: true })
    }, { displayMemberPath: 'name' }),
    temperature: Projection.attr('Температура воздуха'),
    overcast: Projection.belongsTo('i-i-s-weather-forecast-overcast', 'Облачность', {
      name: Projection.attr('Name', { hidden: true })
    }, { displayMemberPath: 'name' }),
    precipitation: Projection.belongsTo('i-i-s-weather-forecast-precipitation', 'Осадки', {
      name: Projection.attr('Name', { hidden: true })
    }, { displayMemberPath: 'name' }),
    preasure: Projection.attr('Давление (мм рт. ст.)'),
    windDirection: Projection.attr('Направление ветра'),
    windSpeed: Projection.attr('Скорость ветра (м/с)'),
    windSpeedExtrem: Projection.attr('Скорость ветра в порывах (м/с)'),
    editor: Projection.belongsTo('i-i-s-weather-forecast-meteorologist', 'Сотрудник, изменивший параметры последним', {
      lastName: Projection.attr('', { hidden: true }),
      firstName: Projection.attr('', { hidden: true }),
      patronymic: Projection.attr('', { hidden: true }),
      fullName: Projection.attr('', { hidden: true })
    }, { displayMemberPath: 'fullName' }),
    lastEditingDate: Projection.attr('Дата последнего изменения'),
    forecastInLine: Projection.attr('Прогноз строкой', { hidden: true }),
    isArchive: Projection.attr('Архивный', { hidden: true }),
    possibleCataclysm: Projection.hasMany('i-i-s-weather-forecast-possible-cataclysm', 'Возможные катаклизмы', {
      cataclysm: Projection.belongsTo('i-i-s-weather-forecast-cataclysm', 'Катаклизм', {
        name: Projection.attr('Катаклизм')
      }, { hidden: true }),
      start: Projection.attr('Начало катаклизма'),
      finish: Projection.attr('Конец катаклизма'),
      isArchive: Projection.attr('Архивный', { hidden: true })
    })
  });
  modelClass.defineProjection('DayForecastL', 'i-i-s-weather-forecast-day-forecast', {
    date: Projection.attr('Дата'),
    area: Projection.belongsTo('i-i-s-weather-forecast-area', 'Местность', {
      name: Projection.attr('Местность')
    }, { hidden: true }),
    temperature: Projection.attr('Температура воздуха'),
    overcast: Projection.belongsTo('i-i-s-weather-forecast-overcast', 'Облачность', {
      name: Projection.attr('Облачность')
    }, { hidden: true }),
    precipitation: Projection.belongsTo('i-i-s-weather-forecast-precipitation', 'Осадки', {
      name: Projection.attr('Осадки')
    }, { hidden: true }),
    preasure: Projection.attr('Давление'),
    windDirection: Projection.attr('Направление ветра'),
    windSpeed: Projection.attr('Скорость ветра'),
    windSpeedExtrem: Projection.attr('Скорость ветра в порывах'),
    editor: Projection.belongsTo('i-i-s-weather-forecast-meteorologist', 'Сотрудник-корректор', {
      fullName: Projection.attr('Сотрудник-корректор'),
      lastName: Projection.attr('', { hidden: true }),
      firstName: Projection.attr('', { hidden: true }),
      patronymic: Projection.attr('', { hidden: true })
    }, { hidden: true }),
    lastEditingDate: Projection.attr('Дата изменения'),
    forecastInLine: Projection.attr('Прогноз строкой', { hidden: true }),
    isArchive: Projection.attr('Архивный', { hidden: true })
  });
};
