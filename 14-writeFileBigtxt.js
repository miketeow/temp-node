const { writeFileSync } = require("fs");

for (i = 0; i < 100000; i++) {
  writeFileSync("./content/bigFile.txt", `Hello World ${i}\n`, { flag: "a" });
}
