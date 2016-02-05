(function(window, undefined) {
  var dictionary = {
    "7c8750f8-7f4c-462d-92ea-d67090748d98": "Shop",
    "9a334326-6d99-4385-a8d1-420b809fc011": "Rick Grimes",
    "cf6d666c-ddc4-4a85-a820-d242ccab6ce9": "Cast",
    "4f5b287e-ecee-470e-bfcc-a16088ce5d14": "Games",
    "76ec98cd-3a2a-4b24-96a6-2f7e9aa82f29": "Relationship (Rick & Glenn)",
    "7e6a8122-15c7-4755-9322-f387eb6e2486": "Glenn's Hat",
    "e79c3a7f-4060-4434-b7a7-132708203c29": "Wardrobe",
    "3eb7edb0-40f3-48ca-b4f5-8b3c9fb78005": "Props",
    "257cb659-1c4f-43cc-b201-5562c8672377": "Episode 1",
    "080e0e28-b76c-4374-826e-c20facd168b6": "Weapons",
    "7fb59c99-e9a2-4b55-b599-a339069e412e": "Glenn Rhee",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Home Page",
    "1f1ddf36-7a8e-4450-9ca0-52c2238e3ea7": "Discussion",
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