module.exports = function(collection) {
  let tagCount = new Map();
  collection.getAll().forEach(function(item) {
    if( "tags" in item.data ) {
      let tags = item.data.tags;

      tags = tags.filter(function(item) {
        switch(item) {
          // this list should match the `filter` list in tags.njk
          case "all":
          case "nav":
          case "post":
          case "posts":
            return false;
        }

        return true;
      });

      for (const tag of tags) {
        if (tagCount.set(tag, (tagCount.get(tag) || 0) + 1));
      }
    }
  });
  
  //console.log("Tagset counts: " + [...tagCount.entries()]);
  return tagCount;
};
