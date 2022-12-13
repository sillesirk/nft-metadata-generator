const fs = require("fs");
const fs_extra = require("fs-extra");
const metadata_count = 10 //Replace with your value
let count = 0


fs_extra.emptyDirSync("./genericJson")

while (count < metadata_count)  {

  let count_increment = count + 1  
  let result = count_increment.toString().padStart(3, '0') //Put 2 forward slashes just after count_increment to remove leading zeros

  let jstring = fs.readFileSync("./attributes.json", "utf-8")
  let traits = JSON.parse(jstring)
  const metas = {
    "721": {
      "POLICY_ID": {
        [result]:{ 
          "name":  `Replace with Your collection name #${count_increment}`,
    "description": "Replace with Your collection description",
    "image": `ipfs://your_cid/${count_increment}.png`, //You can replace this dynamic URL with a single image URL. EX: 'ipfs://your_cid/image.png'
    "edition": count_increment, //Any of these
		"Website": "https://yourwebsite.io",
    "Twitter": "https://twitter.com/yourhandle",
    //"attributes": traits[count] //You can remove the forward slashes to include attributes'
      }
    }
  },
  "version": "1.0"
  };

  fs.writeFileSync(
    `genericJson/${result+'.json'}`,
    JSON.stringify(metas, null, 2)
  );

  console.log(`${count_increment+'.json'} Created!`);
  count++;
};
