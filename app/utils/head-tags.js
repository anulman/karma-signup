export default function headTags() {
  return [{
    type: 'title',
    tagId: 'title',
    content: 'Join us at Karma Co-op'
    // todo do we have an app id?
  // }, {
    // type: 'meta',
    // tagId: 'meta-fb-app_id',
    // attrs: {
      // property: 'fb:app_id',
      // content: ''
    // }
  }, {
    type: 'meta',
    tagId: 'meta-twitter-card',
    attrs: {
      name: 'twitter:card',
      content: 'summary_large_image'
    }
    // todo what is our twitter?
  // }, {
    // type: 'meta',
    // tagid: 'meta-twitter-site',
    // attrs: {
      // name: 'twitter:site',
      // content: '@'
    // }
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
    // todo what is share img?
  // }, {
    // type: 'meta',
    // tagid: 'meta-og-image',
    // attrs: {
      // property: 'og:image',
      // content: ''
    // }
    // todo do we have share img alt?
  // }, {
    // type: 'meta',
    // tagid: 'meta-og-image-alt',
    // attrs: {
      // property: 'og:image:alt',
      // content: ''
    // }
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
