export default function headTags() {
  return [{
    type: 'title',
    tagId: 'title',
    content: 'Join us at Karma Co-op'
  }, {
    type: 'meta',
    tagId: 'meta-fb-app_id',
    attrs: {
      property: 'fb:app_id',
      content: '580686912296349'
    }
  }, {
    type: 'meta',
    tagId: 'meta-twitter-card',
    attrs: {
      name: 'twitter:card',
      content: 'summary_large_image'
    }
  }, {
    type: 'meta',
    tagid: 'meta-twitter-site',
    attrs: {
      name: 'twitter:site',
      content: '@KarmaCoop'
    }
  }, {
    type: 'meta',
    tagid: 'meta-og-url',
    attrs: {
      property: 'og:url',
      content: 'https://karmacoop.org'
    }
  }, {
    type: 'meta',
    tagid: 'meta-og-title',
    attrs: {
      property: 'og:title',
      content: 'Join us at Karma Co-op'
    }
  }, {
    type: 'meta',
    tagid: 'meta-og-type',
    attrs: {
      property: 'og:type',
      content: 'website'
    }
  }, {
    type: 'meta',
    tagid: 'meta-og-image',
    attrs: {
      property: 'og:image',
      content: 'https://karmacoop.org/shopcoop/assets/images/trial-card.png'
    }
  }, {
    type: 'meta',
    tagid: 'meta-og-image-alt',
    attrs: {
      property: 'og:image:alt',
      content: 'Karma Co-op Trial Shop Card'
    }
    // todo what is share tagline?
  // }, {
    // type: 'meta',
    // tagid: 'meta-og-description',
    // attrs: {
      // property: 'og:description',
      // content: ''
    // }
    // todo what is share tagline?
  // }, {
    // type: 'meta',
    // tagid: 'meta-description',
    // attrs: {
      // name: 'description',
      // content: ''
    // }
  }];
}
