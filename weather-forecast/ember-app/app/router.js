import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-weather-forecast-area-l');
  this.route('i-i-s-weather-forecast-area-e',
  { path: 'i-i-s-weather-forecast-area-e/:id' });
  this.route('i-i-s-weather-forecast-area-e.new',
  { path: 'i-i-s-weather-forecast-area-e/new' });
  this.route('i-i-s-weather-forecast-cataclysm-l');
  this.route('i-i-s-weather-forecast-cataclysm-e',
  { path: 'i-i-s-weather-forecast-cataclysm-e/:id' });
  this.route('i-i-s-weather-forecast-cataclysm-e.new',
  { path: 'i-i-s-weather-forecast-cataclysm-e/new' });
  this.route('i-i-s-weather-forecast-day-forecast-l');
  this.route('i-i-s-weather-forecast-day-forecast-e',
  { path: 'i-i-s-weather-forecast-day-forecast-e/:id' });
  this.route('i-i-s-weather-forecast-day-forecast-e.new',
  { path: 'i-i-s-weather-forecast-day-forecast-e/new' });
  this.route('i-i-s-weather-forecast-meteorologist-l');
  this.route('i-i-s-weather-forecast-meteorologist-e',
  { path: 'i-i-s-weather-forecast-meteorologist-e/:id' });
  this.route('i-i-s-weather-forecast-meteorologist-e.new',
  { path: 'i-i-s-weather-forecast-meteorologist-e/new' });
  this.route('i-i-s-weather-forecast-overcast-l');
  this.route('i-i-s-weather-forecast-overcast-e',
  { path: 'i-i-s-weather-forecast-overcast-e/:id' });
  this.route('i-i-s-weather-forecast-overcast-e.new',
  { path: 'i-i-s-weather-forecast-overcast-e/new' });
  this.route('i-i-s-weather-forecast-possible-cataclysm-l');
  this.route('i-i-s-weather-forecast-possible-cataclysm-e',
  { path: 'i-i-s-weather-forecast-possible-cataclysm-e/:id' });
  this.route('i-i-s-weather-forecast-possible-cataclysm-e.new',
  { path: 'i-i-s-weather-forecast-possible-cataclysm-e/new' });
  this.route('i-i-s-weather-forecast-precipitation-l');
  this.route('i-i-s-weather-forecast-precipitation-e',
  { path: 'i-i-s-weather-forecast-precipitation-e/:id' });
  this.route('i-i-s-weather-forecast-precipitation-e.new',
  { path: 'i-i-s-weather-forecast-precipitation-e/new' });
  this.route('i-i-s-weather-forecast-region-l');
  this.route('i-i-s-weather-forecast-region-e',
  { path: 'i-i-s-weather-forecast-region-e/:id' });
  this.route('i-i-s-weather-forecast-region-e.new',
  { path: 'i-i-s-weather-forecast-region-e/new' });
  this.route('i-i-s-weather-forecast-subscription-l');
  this.route('i-i-s-weather-forecast-subscription-e',
  { path: 'i-i-s-weather-forecast-subscription-e/:id' });
  this.route('i-i-s-weather-forecast-subscription-e.new',
  { path: 'i-i-s-weather-forecast-subscription-e/new' });
});

export default Router;
