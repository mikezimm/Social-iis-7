//Utils Concept from:  https://stackoverflow.com/questions/32790311/how-to-structure-utility-class


export default class Utils {

  public static fixURLs(oldURL,pageContext) {
    let newURL = oldURL;
    if (!oldURL || newURL.length === 0) {
      newURL = pageContext.web.absoluteUrl;
    }
    newURL += newURL.endsWith("/") ? "" : "/";
    return newURL;
  }


  public static parseMe(str, parser, leftOrRight) {
    // Usage:
    // parseMe(theseProps[getProp],"/",'left')
    // parseMe(theseProps[getProp],"/",'right');

    let splitCol = str.split(parser);
    if (leftOrRight.toLowerCase() === 'left') {
      return splitCol[0];
    } else if (leftOrRight.toLowerCase() === 'right') {
      return splitCol[1] ? splitCol[1] : "";
    }
  }


}