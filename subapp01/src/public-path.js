/*
 * @Author: XiaoBing
 * @Date: 2023-12-07 09:52:21
 * @LastEditTime: 2023-12-07 09:55:12
 * @LastEditors: XiaoBing
 * @Description: 
 * @FilePath: \subapp01\src\public-path.js
 */
if(window.__MICRO_APP_ENVIRONMENT__){
    __webpack_public_path__ = window.__MICRO_APP_PUBLIC_PATH__
    console.log('__webpack_public_path__', __webpack_public_path__)
}