import Component from '@ember/component';

const SLIDES = {
  people: [{
    url: 'assets/images/slides/green/slide-1.png',
    alt: 'Better alt'
  }, {
    url: 'assets/images/slides/green/slide-2.png',
    alt: 'Better alt'
  }, {
    url: 'assets/images/slides/green/slide-3.png',
    alt: 'Better alt'
  }],
  benefits: [{
    url: 'assets/images/slides/yellow/slide-1.png',
    alt: 'Better alt'
  }, {
    url: 'assets/images/slides/yellow/slide-2.png',
    alt: 'Better alt'
  }, {
    url: 'assets/images/slides/yellow/slide-3.png',
    alt: 'Better alt'
  }]
};

export default Component.extend({
  classNameBindings: ['didSubmit:did-submit'],

  headerComponent: 'index/section-community/header',
  mainComponent: 'index/section-community/main',
  sliderComponent: 'bs-carousel',

  didSubmit: false,
  slides: null, // is object

  share() {},
  focusForm() {},

  init() {
    this._super(...arguments);
    this.slides = SLIDES;
  },

  onClick(trigger) {
    if (this.get('didSubmit')) {
      return this.get('share')({
        platform: 'facebook',
        source: `old_discover:${trigger}`
      });
    } else {
      return this.get('focusForm')(trigger);
    }
  }
});
