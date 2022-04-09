import {createGlobalStyle} from 'styled-components';

export const IconStyle = createGlobalStyle`
@font-face {
  font-family: "iconfont"; /* Project id 2842180 */
  src: url('./iconfont.eot?t=1632881263938'); /* IE9 */
  src: url('./iconfont.eot?t=1632881263938#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAL4AAsAAAAABqwAAAKpAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACCcAqBKIEyATYCJAMICwYABCAFhGcHLxvtBRHVk1lkf0pOr9rU4adMhpEU9il1Ta84qsf0G5uiGsFlz8hYPVjZywRB+ce7h0+ykhUAbSYV3aVL0Qgl3IHPDS4IkkzmRYbNW88CHGbYgIvLZj0BAo4bQg+w3uZcmXIRaiRnnzz6QjIqXZon6T4fUhQDICXyzGEH7HYuZ27w+b93/BfQB77Hv1t70hoLH1geSB+wPSyLEu7koaegXutrADLiGQRgSbxcsri0rA7bse65CTxp7FEBWbUYGx7sxlyH0GiaNUdgiu7ViCOYgNwrB4ejz4tPlUBiorDrqrikjwfPWaBihHqV+froYxIwARQQDTSIuu5UBShEE6+wdGkCabdGwFuGETgRu7Yh1F9nV1oD4E3l96TwlLcqlABomAwpoHTUe0B5YL37Qk9dEbY+fTb7HxduuXTvVmhP14nVHwX2nt7v0m1yT2az9V/YerHHOee3nLuW6hL5W06FOdmDA1k5Szm+JK7PKXQK0OMWf9TJ/86DwovD3PyIwoSjb/2WWwrLSUstTl237ev96u2DxeQDgLE6o/qXv6Hif3Z3p540AK/zWxQw1mAeMD+ZS8CfM7SBRG2EQeomhc5JUqib0Vo6UTDYPkdvxpqd7jAnMMfpPj1meGVQmBNIaS4SJliRCFPMyYElUUoOW+FkChRCWwChthMI7J2HxJb7UNh7SGnuKUxw9Q6m2PsHSxoan2dFaIA7CBklj/aHq8uJXZNGYq80v4KRuviTpK40ikPbl7MXSiRTbKjveVRlZMkRz/IxCiFjkbyR03ZRLVPXcdNLWpcjHISMkkf7w9XlxAFZi993pfkVjIDUMyV1peJxaHuAuugTNHQnl9T3PKoyspBMxLOeRSFkLM2zNnLaLiMSZeocEqP6dn1j/LRjgCXYFtk4UxSCsRQAAAAAAA==') format('woff2'),
       url('./iconfont.woff?t=1632881263938') format('woff'),
       url('./iconfont.ttf?t=1632881263938') format('truetype'),
       url('./iconfont.svg?t=1632881263938#iconfont') format('svg');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-label::before {
  content: "\\e612";
}
`