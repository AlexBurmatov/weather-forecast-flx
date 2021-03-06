import Ember from 'ember';

export default Ember.Controller.extend({
  sitemap: Ember.computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          caption: i18n.t('forms.application.sitemap.прогноз-погоды.caption'),
          title: i18n.t('forms.application.sitemap.прогноз-погоды.title'),
          children: [{
            link: 'i-i-s-weather-forecast-day-forecast-l',
            caption: i18n.t('forms.application.sitemap.прогноз-погоды.i-i-s-weather-forecast-day-forecast-l.caption'),
            title: i18n.t('forms.application.sitemap.прогноз-погоды.i-i-s-weather-forecast-day-forecast-l.title'),
            children: null
          }, {
            link: 'i-i-s-weather-forecast-possible-cataclysm-l',
            caption: i18n.t('forms.application.sitemap.прогноз-погоды.i-i-s-weather-forecast-possible-cataclysm-l.caption'),
            title: i18n.t('forms.application.sitemap.прогноз-погоды.i-i-s-weather-forecast-possible-cataclysm-l.title'),
            children: null
          }]
        }, {
          link: null,
          caption: i18n.t('forms.application.sitemap.пользователи.caption'),
          title: i18n.t('forms.application.sitemap.пользователи.title'),
          children: [{
            link: 'i-i-s-weather-forecast-meteorologist-l',
            caption: i18n.t('forms.application.sitemap.пользователи.i-i-s-weather-forecast-meteorologist-l.caption'),
            title: i18n.t('forms.application.sitemap.пользователи.i-i-s-weather-forecast-meteorologist-l.title'),
            children: null
          }, {
            link: 'i-i-s-weather-forecast-subscription-l',
            caption: i18n.t('forms.application.sitemap.пользователи.i-i-s-weather-forecast-subscription-l.caption'),
            title: i18n.t('forms.application.sitemap.пользователи.i-i-s-weather-forecast-subscription-l.title'),
            children: null
          }]
        }, {
          link: null,
          caption: i18n.t('forms.application.sitemap.справочники.caption'),
          title: i18n.t('forms.application.sitemap.справочники.title'),
          children: [{
            link: 'i-i-s-weather-forecast-region-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-weather-forecast-region-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-weather-forecast-region-l.title'),
            children: null
          }, {
            link: 'i-i-s-weather-forecast-area-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-weather-forecast-area-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-weather-forecast-area-l.title'),
            children: null
          }, {
            link: 'i-i-s-weather-forecast-overcast-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-weather-forecast-overcast-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-weather-forecast-overcast-l.title'),
            children: null
          }, {
            link: 'i-i-s-weather-forecast-precipitation-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-weather-forecast-precipitation-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-weather-forecast-precipitation-l.title'),
            children: null
          }, {
            link: 'i-i-s-weather-forecast-cataclysm-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-weather-forecast-cataclysm-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-weather-forecast-cataclysm-l.title'),
            children: null
          }]
        }
      ]
    };
  }),

  /**
    Locales supported by application.

    @property locales
    @type String[]
    @default ['ru', 'en']
  */
  locales: ['ru', 'en'],

  /**
    Handles changes in userSettingsService.isUserSettingsServiceEnabled.

    @method _userSettingsServiceChanged
    @private
  */
  _userSettingsServiceChanged: Ember.observer('userSettingsService.isUserSettingsServiceEnabled', function() {
    this.get('target.router').refresh();
  }),

  /**
    Initializes controller.
  */
  init() {
    this._super(...arguments);

    let i18n = this.get('i18n');
    if (Ember.isNone(i18n)) {
      return;
    }

    // If i18n.locale is long value like 'ru-RU', 'en-GB', ... this code will return short variant 'ru', 'en', etc.
    let shortCurrentLocale = this.get('i18n.locale').split('-')[0];
    let availableLocales = Ember.A(this.get('locales'));

    // Force current locale to be one of available,
    // if browser's current language is not supported by dummy application,
    // or if browser's current locale is long value like 'ru-RU', 'en-GB', etc.
    if (!availableLocales.contains(shortCurrentLocale)) {
      i18n.set('locale', 'en');
    } else {
      i18n.set('locale', shortCurrentLocale);
    }
  },

  /**
    Service that triggers objectlistview events.

    @property objectlistviewEventsService
    @type Service
  */
  objectlistviewEventsService: Ember.inject.service('objectlistview-events'),

  /**
    Service for managing the state of the application.

    @property appState
    @type AppStateService
  */
  appState: Ember.inject.service(),

  actions: {
    /**
      Call `updateWidthTrigger` for `objectlistviewEventsService`.

      @method actions.updateWidth
    */
    updateWidth() {
      this.get('objectlistviewEventsService').updateWidthTrigger();
    },

    /**
      Toggles application sitemap's side bar.

      @method actions.toggleSidebar
    */
    toggleSidebar() {
      let sidebar = Ember.$('.ui.sidebar.main.menu');
      sidebar.sidebar('toggle');

      if (Ember.$('.inverted.vertical.main.menu').hasClass('visible')) {
        Ember.$('.sidebar.icon.text-menu-show').removeClass('hidden');
        Ember.$('.sidebar.icon.text-menu-hide').addClass('hidden');
        Ember.$('.bgw-opacity').addClass('hidden');
        Ember.$('.full.height').css({ transition: 'width 0.45s ease-in-out 0s', width: '100%' });
      } else {
        Ember.$('.sidebar.icon.text-menu-show').addClass('hidden');
        Ember.$('.sidebar.icon.text-menu-hide').removeClass('hidden');
        Ember.$('.bgw-opacity').removeClass('hidden');
        Ember.$('.full.height').css({ transition: 'width 0.3s ease-in-out 0s', width: 'calc(100% - ' + sidebar.width() + 'px)' });
      }
    },

    /**
      Toggles application sitemap's side bar in mobile view.

      @method actions.toggleSidebarMobile
    */
    toggleSidebarMobile() {
      Ember.$('.ui.sidebar.main.menu').sidebar('toggle');

      if (Ember.$('.inverted.vertical.main.menu').hasClass('visible')) {
        Ember.$('.sidebar.icon.text-menu-show').removeClass('hidden');
        Ember.$('.sidebar.icon.text-menu-hide').addClass('hidden');
        Ember.$('.bgw-opacity').addClass('hidden');
      } else {
        Ember.$('.sidebar.icon.text-menu-show').addClass('hidden');
        Ember.$('.sidebar.icon.text-menu-hide').removeClass('hidden');
        Ember.$('.bgw-opacity').removeClass('hidden');
      }
    }
  }
});
