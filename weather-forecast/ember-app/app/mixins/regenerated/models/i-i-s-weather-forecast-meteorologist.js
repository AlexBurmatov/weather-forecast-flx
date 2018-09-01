import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  patronymic: DS.attr('string'),
  /**
    Non-stored property.

    @property fullName
  */
  fullName: DS.attr('string'),
  /**
    Method to set non-stored property.
    Please, use code below in model class (outside of this mixin) otherwise it will be replaced during regeneration of models.
    Please, implement 'fullNameCompute' method in model class (outside of this mixin) if you want to compute value of 'fullName' property.

    @method _fullNameCompute
    @private
    @example
      ```javascript
      _fullNameChanged: Ember.on('init', Ember.observer('fullName', function() {
        Ember.run.once(this, '_fullNameCompute');
      }))
      ```
  */
  _fullNameCompute: function() {
    let result = (this.fullNameCompute && typeof this.fullNameCompute === 'function') ? this.fullNameCompute() : null;
    this.set('fullName', result);
  },
  login: DS.attr('string'),
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
  modelClass.defineProjection('MeteorologistE', 'i-i-s-weather-forecast-meteorologist', {
    lastName: Projection.attr('Фамилия', { hidden: true }),
    firstName: Projection.attr('Имя', { hidden: true }),
    patronymic: Projection.attr('Отчество', { hidden: true }),
    fullName: Projection.attr('ФИО'),
    login: Projection.attr('Логин'),
    isArchive: Projection.attr('Архивный', { hidden: true })
  });
  modelClass.defineProjection('MeteorologistL', 'i-i-s-weather-forecast-meteorologist', {
    lastName: Projection.attr('Фамилия'),
    firstName: Projection.attr('Имя'),
    patronymic: Projection.attr('Отчество'),
    fullName: Projection.attr('ФИО', { hidden: true }),
    login: Projection.attr('Логин'),
    isArchive: Projection.attr('Архивный', { hidden: true })
  });
};
