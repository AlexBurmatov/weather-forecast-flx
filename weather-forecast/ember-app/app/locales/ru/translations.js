import Ember from 'ember';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISweather_forecastAreaLForm from './forms/i-i-s-weather-forecast-area-l';
import IISweather_forecastCataclysmLForm from './forms/i-i-s-weather-forecast-cataclysm-l';
import IISweather_forecastDayForecastLForm from './forms/i-i-s-weather-forecast-day-forecast-l';
import IISweather_forecastMeteorologistLForm from './forms/i-i-s-weather-forecast-meteorologist-l';
import IISweather_forecastOvercastLForm from './forms/i-i-s-weather-forecast-overcast-l';
import IISweather_forecastPossibleCataclysmLForm from './forms/i-i-s-weather-forecast-possible-cataclysm-l';
import IISweather_forecastPrecipitationLForm from './forms/i-i-s-weather-forecast-precipitation-l';
import IISweather_forecastRegionLForm from './forms/i-i-s-weather-forecast-region-l';
import IISweather_forecastSubscriptionLForm from './forms/i-i-s-weather-forecast-subscription-l';
import IISweather_forecastAreaEForm from './forms/i-i-s-weather-forecast-area-e';
import IISweather_forecastCataclysmEForm from './forms/i-i-s-weather-forecast-cataclysm-e';
import IISweather_forecastDayForecastEForm from './forms/i-i-s-weather-forecast-day-forecast-e';
import IISweather_forecastMeteorologistEForm from './forms/i-i-s-weather-forecast-meteorologist-e';
import IISweather_forecastOvercastEForm from './forms/i-i-s-weather-forecast-overcast-e';
import IISweather_forecastPossibleCataclysmEForm from './forms/i-i-s-weather-forecast-possible-cataclysm-e';
import IISweather_forecastPrecipitationEForm from './forms/i-i-s-weather-forecast-precipitation-e';
import IISweather_forecastRegionEForm from './forms/i-i-s-weather-forecast-region-e';
import IISweather_forecastSubscriptionEForm from './forms/i-i-s-weather-forecast-subscription-e';
import IISweather_forecastAreaModel from './models/i-i-s-weather-forecast-area';
import IISweather_forecastCataclysmModel from './models/i-i-s-weather-forecast-cataclysm';
import IISweather_forecastDayForecastModel from './models/i-i-s-weather-forecast-day-forecast';
import IISweather_forecastMeteorologistModel from './models/i-i-s-weather-forecast-meteorologist';
import IISweather_forecastOvercastModel from './models/i-i-s-weather-forecast-overcast';
import IISweather_forecastPossibleCataclysmModel from './models/i-i-s-weather-forecast-possible-cataclysm';
import IISweather_forecastPrecipitationModel from './models/i-i-s-weather-forecast-precipitation';
import IISweather_forecastRegionModel from './models/i-i-s-weather-forecast-region';
import IISweather_forecastSubscriptionModel from './models/i-i-s-weather-forecast-subscription';

const translations = {};
Ember.$.extend(true, translations, EmberFlexberryTranslations);

Ember.$.extend(true, translations, {
  models: {
    'i-i-s-weather-forecast-area': IISweather_forecastAreaModel,
    'i-i-s-weather-forecast-cataclysm': IISweather_forecastCataclysmModel,
    'i-i-s-weather-forecast-day-forecast': IISweather_forecastDayForecastModel,
    'i-i-s-weather-forecast-meteorologist': IISweather_forecastMeteorologistModel,
    'i-i-s-weather-forecast-overcast': IISweather_forecastOvercastModel,
    'i-i-s-weather-forecast-possible-cataclysm': IISweather_forecastPossibleCataclysmModel,
    'i-i-s-weather-forecast-precipitation': IISweather_forecastPrecipitationModel,
    'i-i-s-weather-forecast-region': IISweather_forecastRegionModel,
    'i-i-s-weather-forecast-subscription': IISweather_forecastSubscriptionModel,
  },

  'application-name': 'Прогноз погоды',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            caption: '',
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Прогноз погоды',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Прогноз погоды',
          title: 'Weather forecast'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'прогноз-погоды': {
          caption: 'Прогноз погоды',
          title: 'Прогноз погоды',
          'i-i-s-weather-forecast-day-forecast-l': {
            caption: 'Дневные прогнозы',
            title: ''
          },
          'i-i-s-weather-forecast-possible-cataclysm-l': {
            caption: 'Возможные катаклизмы',
            title: ''
          }
        },
        пользователи: {
          caption: 'Пользователи',
          title: 'Пользователи',
          'i-i-s-weather-forecast-meteorologist-l': {
            caption: 'Метеорологи',
            title: ''
          },
          'i-i-s-weather-forecast-subscription-l': {
            caption: 'Подписки на опопвещения о катаклизмах',
            title: ''
          }
        },
        справочники: {
          caption: 'Справочники',
          title: 'Справочники',
          'i-i-s-weather-forecast-region-l': {
            caption: 'Регионы',
            title: ''
          },
          'i-i-s-weather-forecast-area-l': {
            caption: 'Местности',
            title: ''
          },
          'i-i-s-weather-forecast-overcast-l': {
            caption: 'Облачности',
            title: ''
          },
          'i-i-s-weather-forecast-precipitation-l': {
            caption: 'Осадки',
            title: ''
          },
          'i-i-s-weather-forecast-cataclysm-l': {
            caption: 'Катаклизмы',
            title: ''
          }
        },
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-weather-forecast-area-l': IISweather_forecastAreaLForm,
    'i-i-s-weather-forecast-cataclysm-l': IISweather_forecastCataclysmLForm,
    'i-i-s-weather-forecast-day-forecast-l': IISweather_forecastDayForecastLForm,
    'i-i-s-weather-forecast-meteorologist-l': IISweather_forecastMeteorologistLForm,
    'i-i-s-weather-forecast-overcast-l': IISweather_forecastOvercastLForm,
    'i-i-s-weather-forecast-possible-cataclysm-l': IISweather_forecastPossibleCataclysmLForm,
    'i-i-s-weather-forecast-precipitation-l': IISweather_forecastPrecipitationLForm,
    'i-i-s-weather-forecast-region-l': IISweather_forecastRegionLForm,
    'i-i-s-weather-forecast-subscription-l': IISweather_forecastSubscriptionLForm,
    'i-i-s-weather-forecast-area-e': IISweather_forecastAreaEForm,
    'i-i-s-weather-forecast-cataclysm-e': IISweather_forecastCataclysmEForm,
    'i-i-s-weather-forecast-day-forecast-e': IISweather_forecastDayForecastEForm,
    'i-i-s-weather-forecast-meteorologist-e': IISweather_forecastMeteorologistEForm,
    'i-i-s-weather-forecast-overcast-e': IISweather_forecastOvercastEForm,
    'i-i-s-weather-forecast-possible-cataclysm-e': IISweather_forecastPossibleCataclysmEForm,
    'i-i-s-weather-forecast-precipitation-e': IISweather_forecastPrecipitationEForm,
    'i-i-s-weather-forecast-region-e': IISweather_forecastRegionEForm,
    'i-i-s-weather-forecast-subscription-e': IISweather_forecastSubscriptionEForm,
  },

});

export default translations;
