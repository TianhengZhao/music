import {createGlobalStyle} from'styled-components';

export const IconStyle = createGlobalStyle`
@font-face {
  font-family: "iconfont"; /* Project id 2842180 */
  src: url('iconfont.eot?t=1650504363564'); /* IE9 */
  src: url('iconfont.eot?t=1650504363564#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
       url('iconfont.woff?t=1650504363564') format('woff'),
       url('iconfont.ttf?t=1650504363564') format('truetype'),
       url('iconfont.svg?t=1650504363564#iconfont') format('svg');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-bofang:before {
  content: "\\e606";
}

.icon-comment:before {
  content: "\\e6ad";
}

.icon-more:before {
  content: "\\e613";
}

.icon-listen:before {
  content: "\\e602";
}

.icon-like:before {
  content: "\\e635";
}

.icon-collect:before {
  content: "\\e603";
}

.icon-back:before {
  content: "\\e60b";
}

.icon-label:before {
  content: "\\e612";
}
`
