import Ember from 'ember';

export let Serializer = Ember.Mixin.create({
  getAttrs: function () {
    let parentAttrs = this._super();
    let attrs = {
      precipitation: { serialize: 'odata-id', deserialize: 'records' },
      area: { serialize: 'odata-id', deserialize: 'records' },
      overcast: { serialize: 'odata-id', deserialize: 'records' },
      editor: { serialize: 'odata-id', deserialize: 'records' },
      possibleCataclysm: { serialize: false, deserialize: 'records' }
    };

    return Ember.$.extend(true, {}, parentAttrs, attrs);
  },
  init: function () {
    this.set('attrs', this.getAttrs());
    this._super(...arguments);
  }
});
