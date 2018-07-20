import Component from '@ember/component';
import { not } from '@ember/object/computed';
import { isPresent } from '@ember/utils';
import { schedule } from '@ember/runloop';
import { inject as service } from '@ember/service';

export default Component.extend({
  tagName: 'form',
  noValidate: true,
  attributeBindings: ['noValidate'],

  isMobile: service(),
  metrics: service(),

  didSubmit: false,
  canReset: true,
  didReset: false,
  shouldFocusInput: not('isMobile.any'),

  share() {},
  onSubmit() {},

  headerComponent: 'form-signup/header',
  mainComponent: 'form-signup/main',
  footerComponent: 'form-signup/footer',

  didInsertElement() {
    if (this.get('shouldFocusInput')) {
      schedule('afterRender', this, focusInput, this.element);
    }
  },

  keydown(event) {
    switch (event.key) {
      case 'Enter': this.submit(event);
    }
  },

  submit(event) {
    event.preventDefault();

    if (this.get('onSubmit')(event) !== false) {
      this.set('didReset', false);
    }
  }
});

function focusInput(element) {
  let input = element.querySelector('input');

  if (isPresent(input)) {
    let { top, bottom } = input.getBoundingClientRect();
    let { scrollY, innerHeight } = window;

    if (top > 0 && bottom < scrollY + innerHeight) {
      input.focus();
    }
  }
}
