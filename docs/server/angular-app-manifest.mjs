
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Happiness/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Happiness"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 717, hash: '0545f1da8a0326bf70dc106fa620596951b022445d40032bebba2ae77b1cbbff', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1064, hash: '9e37653b66b64f7ed03f966a45c5555018f18c2ffdcacabb5a751fb3206235b3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 4491, hash: '0dc65e7ca7bc7b4cdaf6c3096da8bc27ebee6ecd98d01a8f877ac7f51bda5193', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-SHBSLV5A.css': {size: 41, hash: 'ZicQgwpsg7c', text: () => import('./assets-chunks/styles-SHBSLV5A_css.mjs').then(m => m.default)}
  },
};
