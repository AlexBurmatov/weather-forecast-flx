import Ember from 'ember';

export let OfflineSerializer = Ember.Mixin.create({
  getAttrs: function () {
    let parentAttrs = this._super();
    let attrs = {
      precipitation: { serialize: 'id', deserialize: 'records' },
      area: { serialize: 'id', deserialize: 'records' },
      overcast: { serialize: 'id', deserialize: 'records' },
      editor: { serialize: 'id', deserialize: 'records' },
      possibleCataclysm: { serialize: 'ids', deserialize: 'records' }
    };

    return Ember.$.extend(true, {}, parentAttrs, attrs);
  },
  init: function () {
    this.set('attrs', this.getAttrs());
    this._super(...arguments);
  }
});
