import { isPresent } from '@ember/utils';

const FACEBOOK_APP_ID = '580686912296349';

export default function share(platform) {
  switch (platform) {
    case 'facebook':
      return open('https://www.facebook.com/v2.12/dialog/share', {
        app_id: FACEBOOK_APP_ID,
        display: 'popup',
        href: 'https://karmacoop.org/wefc',
        quote: `I just signed up to trial shop at Karma Co-op. Come check it out with me!` // eslint-disable-line max-len
      });
  }
}

function open(url, queryParams) {
  let queryString;

  if (isPresent(queryParams)) {
    queryString = Object.keys(queryParams)
      .map((key) => {
        return `${key}=${encodeURIComponent(queryParams[key])}`;
      })
      .join('&');
  }

  url = [url, queryString]
    .compact()
    .join('?');

  window.open(url);
}
