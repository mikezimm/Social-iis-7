## socialiis-7

This is where you include your WebPart documentation.

### Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

### Build options

gulp clean - TODO
gulp test - TODO
gulp serve - TODO
gulp bundle - TODO
gulp package-solution - TODO

### Build Sequence
```bash
npm install @pnp/sp @pnp/graph --save
npm install @pnp/spfx-controls-react --save --save-exact
npm install --save @pnp/polyfill-ie11
npm install @pnp/spfx-property-controls
npm install --save office-ui-fabric-react

NEW INSTALL Required:
npm install axios --save  (For Youtube component)

NEW INSTALL Required:  2020-01-13
npm install on-el-resize  (For Facebook component)



```
