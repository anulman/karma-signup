import Component from '@ember/component';
import { inject as service } from '@ember/service';

const IMAGES = [{
  name: 'What is Karma Co-op?',
  url: 'assets/images/infographics/what-is-karma.png',
  thumbUrl: 'assets/images/infographics/thumbs/what-is-karma.png',
  alt: 'What is Karma Co-op?' // todo better alts
}, {
  name: 'Why Join Karma Co-op?',
  url: 'assets/images/infographics/why-join-karma.png',
  thumbUrl: 'assets/images/infographics/thumbs/why-join-karma.png',
  alt: 'Why join Karma Co-op?' // todo better alts
}, {
  name: 'How to Join Karma Co-op',
  url: 'assets/images/infographics/how-to-join.png',
  thumbUrl: 'assets/images/infographics/thumbs/how-to-join.png',
  alt: 'How to join Karma Co-op' // todo better alts
}];

export default Component.extend({
  metrics: service(),

  headerComponent: 'index/section-infographics/header',
  mainComponent: 'index/section-infographics/main',

  activeImage: null,
  images: null,

  init() {
    this._super(...arguments);
    this.images = IMAGES;
  },

  clickImage(image) {
    this.set('activeImage', image);
    this.get('metrics').trackEvent('Segment', {
      event: 'infographic',
      name
    });
  }
});
