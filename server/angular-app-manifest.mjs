
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://Miguel4lopez.github.io/Happiness/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Happiness"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 747, hash: '5c225e7d6aace4cd00bbc8673dcd969fd9e86203644426c6694ef18a2a28719c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1094, hash: '3fd94bdedecb2dcd898ae9dfcec8989462002ec12eb0d0f0d7ed6cf74d592bb8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 4521, hash: '844b1043ba9e3040e54e598945061049c0037083d50c924bf6152b7ff57d091f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-SHBSLV5A.css': {size: 41, hash: 'ZicQgwpsg7c', text: () => import('./assets-chunks/styles-SHBSLV5A_css.mjs').then(m => m.default)}
  },
};
