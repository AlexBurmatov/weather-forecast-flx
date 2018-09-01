import Ember from 'ember';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            caption: '',
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'прогноз-погоды': {
          caption: 'прогноз-погоды',
          title: 'прогноз-погоды',
          'i-i-s-weather-forecast-day-forecast-l': {
            caption: 'i-i-s-weather-forecast-day-forecast-l',
            title: 'i-i-s-weather-forecast-day-forecast-l'
          },
          'i-i-s-weather-forecast-possible-cataclysm-l': {
            caption: 'i-i-s-weather-forecast-possible-cataclysm-l',
            title: 'i-i-s-weather-forecast-possible-cataclysm-l'
          }
        },
        пользователи: {
          caption: 'пользователи',
          title: 'пользователи',
          'i-i-s-weather-forecast-meteorologist-l': {
            caption: 'i-i-s-weather-forecast-meteorologist-l',
            title: 'i-i-s-weather-forecast-meteorologist-l'
          },
          'i-i-s-weather-forecast-subscription-l': {
            caption: 'i-i-s-weather-forecast-subscription-l',
            title: 'i-i-s-weather-forecast-subscription-l'
          }
        },
        справочники: {
          caption: 'справочники',
          title: 'справочники',
          'i-i-s-weather-forecast-region-l': {
            caption: 'i-i-s-weather-forecast-region-l',
            title: 'i-i-s-weather-forecast-region-l'
          },
          'i-i-s-weather-forecast-area-l': {
            caption: 'i-i-s-weather-forecast-area-l',
            title: 'i-i-s-weather-forecast-area-l'
          },
          'i-i-s-weather-forecast-overcast-l': {
            caption: 'i-i-s-weather-forecast-overcast-l',
            title: 'i-i-s-weather-forecast-overcast-l'
          },
          'i-i-s-weather-forecast-precipitation-l': {
            caption: 'i-i-s-weather-forecast-precipitation-l',
            title: 'i-i-s-weather-forecast-precipitation-l'
          },
          'i-i-s-weather-forecast-cataclysm-l': {
            caption: 'i-i-s-weather-forecast-cataclysm-l',
            title: 'i-i-s-weather-forecast-cataclysm-l'
          }
        },
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
