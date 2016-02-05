(function(window, undefined) {
  var dictionary = {
    "cf6d666c-ddc4-4a85-a820-d242ccab6ce9": "Cast",
    "1f1ddf36-7a8e-4450-9ca0-52c2238e3ea7": "Discussion",
    "7c8750f8-7f4c-462d-92ea-d67090748d98": "Shop",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Home Page",
    "4f5b287e-ecee-470e-bfcc-a16088ce5d14": "Games",
    "87db3cf7-6bd4-40c3-b29c-45680fb11462": "960 grid - 16 columns",
    "e5f958a4-53ae-426e-8c05-2f7d8e00b762": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);