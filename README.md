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

## ToDo
look at this regex for removing comments from json:
https://www.regextester.com/94245

\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$


## Sample JSON Structure for an entity 
```JSON
{
  "title": "SIG COPY General",
  "keywords": [
    "SIG",
    "SharePoint",
    "SPFx",
    "SIG General"
  ],
  "profilePic": "https://developer.microsoft.com/en-us/office/blogs/wp-content/uploads/2019/03/sig-21st-video-900x360.png",
  "blog": [
    {
      "title": "Blog",
      "order": 1,
      "url": "https://developer.microsoft.com/en-us/sharepoint/blogs/",
      "codeType": "TBD"
    }
  ],
  "twitter": {
    "title": "Twitter @SharePoint",
    "order": 1,
    "url": "https://twitter.com/sharepoint",
    "codeType": "TBD"
  },
  "facebook": {
    "title": "",
    "order": 1,
    "url": "",
    "codeType": "TBD"
  },
  "linkedIn": {
    "title": "",
    "order": 1,
    "url": "",
    "codeType": "TBD"
  },
  "github": {
    "title": "",
    "order": 1,
    "url": "",
    "codeType": "TBD"
  },
  "webSites": [
    {
      "title": "",
      "order": 1,
      "url": "",
      "codeType": "TBD"
    }
  ],
  "youtube": {
    "title": "YouTube",
    "user": "",
    "order": 0,
    "items": [
      {
        "title": "",
        "objectType": "Video",
        "objectID": "",
        "objectUrl": ""
      },
      {
        "title": "",
        "objectType": "Channel",
        "objectID": "",
        "objectUrl": ""
      },
      {
        "title": "",
        "objectType": "Playlist",
        "objectID": "",
        "objectUrl": ""
      }
    ]
  },
  "titleKey": "SIGGeneral",
  "navigation": [
    {
      "name": "Blog",
      "key": "SIGGeneral||||blog||||Blog",
      "url": "https://developer.microsoft.com/en-us/sharepoint/blogs/",
      "mediaSource": "blog",
      "objectType": "blog"
    },
    {
      "name": "Twitter @SharePoint",
      "key": "SIGGeneral||||twitter||||Twitter@SharePoint",
      "url": "https://twitter.com/sharepoint",
      "mediaSource": "twitter",
      "objectType": "user",
      "objectID": "sharepoint"
    },
    {
      "name": "General Dev playlist",
      "key": "SIGGeneral||||youtube||||GeneralDev playlist",
      "url": "https://www.youtube.com/playlist?list=PLR9nK3mnD-OURfm5Ypu-wK52cxBv_gXCA",
      "mediaSource": "youtube",
      "objectType": "Playlist",
      "objectID": "PLR9nK3mnD-OURfm5Ypu-wK52cxBv_gXCA"
    },
    {
      "name": "Share Me",
      "key": "SIGGeneral||||showDebug||||SIGGeneral",
      "url": "xxxxx",
      "mediaSource": "debug",
      "objectID": "the Cat Jumped over the Moon!",
      "objectType": "JSON"
    }
  ]
}

```