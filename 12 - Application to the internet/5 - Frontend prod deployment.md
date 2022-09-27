# Production version of the frontend

So far, we have been running React code in application development mode, where the application is configured to give visual error messages, automatically update the changes made to the code in the browser, etc.

- When the application is taken to production, it must be made into a production build , i.e. a version optimized for production.

- Applications made using create-react-app can be made into a production version with the command `npm run build` .

- NOTE: at the time of writing this (20.1.2022) there is a small bug in create-react-apps, and if the command causes an error message `TypeError: MiniCssExtractPlugin is not a constructor` , the fix for the problem can be found here , i.e. add to the file package.json

```json
{
  // ...
  "resolutions": {
    "mini-css-extract-plugin": "2.4.5"
  }
}
```

- and run the commands
```
rm -rf package-lock.json
rm -rf node_modules
npm cache clean --force
npm install
```

- The command `npm run build` should work again.

- As a result of the command, a static directory is created in the `build` directory (which already contains the application's only html file index.html ) , under which a minified version of the application's JavaScript code is generated. Although the application code is written in several files, all JavaScript is generated in one file. 

- The same file also contains the code for all the dependencies needed by the application's code.

- Minified code is not pleasant to read. The beginning of the code looks like this:

```js
!function(e){function r(r){for(var n,f,i=r[0],l=r[1],a=r[2],c=0,s=[];c<i.length;c++)f=i[c],o[f]&&s.push(o[f][0]),o[f]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(p&&p(r);s.length;)s.shift()();return u.push.apply(u,a||[]),t()}function t(){for(var e,r=0;r<u.length;r++){for(var t=u[r],n=!0,i=1;i<t.length;i++){var l=t[i];0!==o[l]&&(n=!1)}n&&(u.splice(r--,1),e=f(f.s=t[0]))}return e}var n={},o={2:0},u=[];function f(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,f),t.l=!0,t.exports}f.m=e,f.c=n,f.d=function(e,r,t){f.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},f.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})
```
