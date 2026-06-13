const fs = require("fs");

fs.readFile("./service.csv", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  const tab = data.split("\n");

  console.table(
    tab.map((item) => {
      return item.split(",");
    }),
  );
});

// let dat = "sumit,BTech,cyber security";

// fs.appendFile("./service.csv", dat, (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
// });
