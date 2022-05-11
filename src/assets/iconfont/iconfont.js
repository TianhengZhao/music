import {createGlobalStyle} from'styled-components';

export const IconStyle = createGlobalStyle`
@font-face {
  font-family: "iconfont"; /* Project id 2842180 */
  src: url('iconfont.eot?t=1651316909132'); /* IE9 */
  src: url('iconfont.eot?t=1651316909132#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAucAAsAAAAAFSQAAAtPAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACFTgqZUJUMATYCJANMCygABCAFhGcHgTkb8xGjopyQppL9VQJPYLwaMtJitCg0KbPVVjWqmAD07+jVu95aPsIrqc95OHHCPR5HXEMp4f/7vT/Xvue+1im1WTSW7gSKYTxdCXoSZzJRn4xP9B+ev/l/ug1KayzfyOnXHew0iG0PAP8D1OVa5gnHv1qhniRUASu0nb1kDzfhJ2FrVbUrgXS7/VaCScJZgnH0AmkYhJJwnBTmk20lufPAyvSQmslPHKmo80m+yRdYqxirJ+5F/n6/X5WLiES7eCMUQmaYTonnCXLly8X9/Y+JJBohMj8kRHRVQtK4s6Fv2lpWxykdjxZDdjH538ZZ+bBG9BxZX8aLIJDa4Q9aH94+xbxjMmLBilor2B3VqwLFcJvBM14S60PpqRXpngHudGeBO/r9+tkLO3CCRN3peL9X4u+Z72Xonn4P7OUmuyHY3YEAGNioWJY+vuAPMJNsEEvDmnsfYEYPtELv+dDPwmfJs/xZx5F4lVeue9bynDy3LRbWBkpE9qwdO5gKYTASZuPKy6eXao5CDXstjJSpRGI5xwv2/3kjiuWw+1vXAj1wj4XQg2JRoocW1AduA0EGbg+KnztC0IA7gcJxZyhZcyIEBTgHghRcAkoR3AuCCrwcggi8EoIYfB0o4LsQC4fvUYEnvgzKJC6A7nnKEsAB4CdAsAmle6Y8oztzOjLmFyhmZkrM89Ib4AJzBCG0OH9+/uZVa5dJ69YVc1wZFw7PF4X5Uqn6SxzgSncGAutWbdkB4Lwwp1swSNIow4ZoDl+1lmWvBV7yFREfWokcFRQtQjOIv2/cI6oXnljzPanieiLZSb9JnhS5KQ2lmP/wX4ioWjiXEhQzFjWgbhH+dT7OkjTTeCEPZWgO5L8xaSoBCnH8+tt3+nn3txb5F2UKxWwqvbtu9fLmGx17qshYkG11C8B1KfJa8pFIIpvkgawA086BhCgd9ou+zsODgsHcmZQENBVa/9Ix4ZCwt8Ncu8oJz1PZ83SLb+IOwiHvLBHFhx6s8VugyoMWd9dBI8ocGYlKWgSLN61kmjlM4VD/3uGDslGZNpKW8/ccNKXItq8JL7c7MLaJpafazoVc0dJJmoEcJ+WORHAWEoOXjVhLXMFmaU7C4uEAPTflC+Ds510LgH3/KJBdHksjWxLvNpLMjPClO5ojztFuBpS5kw/lRefy9EEg6R4yZ3GOfWDbcOKl28knxaL8bYMk4yAfJ1L2lyibcLc7kHSCYtxVPos6mBG1B9xE70F1ra7VtbReFRYN91uB1yZVb32yfq6jKLGGNfewlJIS+/UgGa5mGqoZYVnF7JqyAB2rq4ZWO3oDtVfRxMuqBS8oH4W26aQdddAu3Clf5LLOV/Nd5Rltq8KVrSvru1GPAtEM/Q92paS5/MrdCM+SaTRzbakxoOrhHMVobRuX142xbI2Umq5n6UgNk6HD/pJ7UBpxKYY0OO8A6v6ZEXfGkavldtk5v3b9rOod9rZ76h//1JgysKtlUzO1LV3npk4Mk7n35CgkE+0622qOdVzoUNxDital+Uf8Ez5oz24XZHWycoGWGN6mP362rdFS0jusjbbMU0xBsVu+f5srG227WHlz/WrV4uV/+rjJjTavvGzu6CHfuS1jpi1pKbpKMVORLET853SBfaX4ajXZOl+1LKjffyA/BKoGHuUkrMr5tY3vZwHquniU6q3u3jZ04jj4exEq3CnEnpdaYtYEopiu3cG3RjcT8x4Dk+HnEnqGvQa2VwZfC4C3MKPtzHbA0/zu09tPZk+8p3tzcOGqMEmWIJXEy5MOAggFSg/sPaXxMgCTYtP83oQQXiCHG8QNnm9AKNCZ5+3fk+cWDGb419eZJMJE8++v6YqiX/ZAGfzzBv0GX0XGwCQYk2Vtk22kUewGN+jrf+Im4X7KK/0QrT9QQw9D45Hp+lg2lLJuGOp44w36LqovzV2f5KtENTpiIAzuJriXJk5Py5HEi2KiJbGSbMiwwgHaOIpqGIfXgDGbmBjwglMZlOOd5aXCVXMXH0gFNxsn5qZ20FBT34AaWejssGIm5+KT8cuW6/I3JvvA4bKEaWnZ4jhhdKQkRgrUF5/d24INJZ81h9t7QM5wy9jiimFsKFWOK4tNH5ymzWR/+V3aY4urv4w5W5yzB96jmzxnSS3BoXLA3PzVValrHCHBjJHqxj/R7IGzZ8lq0kujbhZlFpyLNze1BsUwZOiUvh20NuwL6UvHTNKsm2CHWoLF49K91dlZXj4fhs6SQ7F2X0Irilc6zaooCLW1xSZRnX/9+Rx1ZVN4U3g6Dq9+mIglYLN9vHKzvYOkDiZnXNATP0S1houR6Aws4VxdoDzB78dJG4DAX4hZ3moicHlu6mIJK1vNXUMMd1nDledQPSj0XVBw4qbTi+3Q7Bv0eT9xavzPfRd9+yRimyVdgFJT4UHwsMpM90qye+/jUel+KIBVVfo8XhZndJSbxc07C6BxdFQL83hnQzw5WTxwHQeP0e9tNyE6jUaHmL4hjzV6ncaEfDMieo1G75G/IU80Or3mzbc/eaGcnhnG3zhBS0KFgos4+4py0TaAd8zd7Qu8VIylNMlh6gHaIQktu39FBjFjXplFo16iHaBepvLEVDNV7JDeOqdtTrp96ekf4QBlhLqUOkIZHmW+DXkX/C7kLaOZYGDqmU3M5gfN/kcAiywNGmSGoULGx7CPsJvGIoQTWO56vRTG1OmdRGwhNwcBPa1ao6a0VGPUfnYgFOi2rR9p/xGaLw25QltpbpJun62bHi9MEu0B0Kib7ob0cEXQTYU/mYmBMSvvyLfo4YmTpux7DJCGuIeAYplPGdcqAQ5+iQQaSzJ02TNKSmasL1ua1eIfeBsOhmJF/5n8CwJBcPeRa77hBIiw1bN384/gFu3SLeseBMX3RLEDOUEpgZHqJv89oZmJ6Ql/o8Lji95JimmuuhAVi+NExBVwwuDA7lDwp5sUj5B9+L/x2Q1bLeveIMVv2Khq4/1lrYqRaYb73R/fsouRN2s/fL70ajz/t8+C9kcx52tf/Dhf54dTnXN4Gam/3+ehfMtiFfHl+g1bzm1j8X/bFb7CN1yoEwgF5+sG8K8K7fi/Wfa9dqV0OT8ZfstSevQZ7vv+tAeqFLdpymgyZTNgKjMZAR210dtV+ItZFoxoDXoN0jJq4HRFgolMqyR3+aRo+s0uhcUP5aGpIFgx6Rn8bBqDBSJ5ehELt+HT6Gn4pwl0Wx4WQVXY5T7QVrNjAfrv87ZptaQWdFCnFdydv2YIvp0Hjd3sgB2yIIEdfLh/9I9mQ5LgHk+yKnKNIwzkW6DMpE3BHgv+H9pSj7JjmLpqaNfSIPOy3voTudB8/+d24+W22/RTHf7H2W9f9e/JpzaRlJx0Zd+6F8RcVIHwr5a31c3ByjLSuRK6+uRV71Nne1TMuPil7IbKlYxDOwZDzYFUXwJ/ZiWt+8XrOrH6h6rrbOxExrGJzSFvt4YDmT0cih3i1LqwszOdGh2qBFjSr2GprcJO6Rc2tRPI293AgSHPcaj2F6cuY3a5zFKU3AbCRAqyK1TSmhz6RJa+U3FkDEG13xRiZdWwkcq9DY9kKKRxRDwV25RyyIPV8LC+GzFbcMHWJNOyTMntVjJ92BFLabW4FRCUnlEVUOwa10SyjHzm5P7z3pHCEUNBiL7zgriUF5YDBSm5AD0yIxqxIt3rnRS2GhZ5ObiTsKjXQPgWjPDGbIGacK1G5KlgyZhAc3Zk+kx6KVsWr9MjnzHuRlVftQtIJq9AoSLFSpQqU65CpSrVIshZRLlg1auYusqeTT8SBll2GT1PM3RJXbbW9QMaZXU/VqZgGjrG65u4Zc/hMVL3RAY9so0mk7raBuqnJchkKBoKFMwDuH03Q9n0GDNiIQA=') format('woff2'),
       url('iconfont.woff?t=1651316909132') format('woff'),
       url('iconfont.ttf?t=1651316909132') format('truetype'),
       url('iconfont.svg?t=1651316909132#iconfont') format('svg');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-list:before {
  content: "\\e600";
}

.icon-down:before {
  content: "\\e6b9";
}

.icon-search:before {
  content: "\\e62d";
}

.icon-last:before {
  content: "\\e78a";
}

.icon-next:before {
  content: "\\e7a5";
}

.icon-loop:before {
  content: "\\e609";
}

.icon-random:before {
  content: "\\e66b";
}

.icon-single:before {
  content: "\\e66d";
}

.icon-playList:before {
  content: "\\e60c";
}

.icon-pause:before {
  content: "\\e625";
}

.icon-play:before {
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
