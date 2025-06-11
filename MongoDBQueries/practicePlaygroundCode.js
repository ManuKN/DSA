//use inventory
db.inventory.insertMany([
  { item: "journal", category: "stationery", price: 10, createdAt: new Date("2023-12-01"), instock: [ { warehouse: "A", qty: 5 }, { warehouse: "C", qty: 15 } ] },
  { item: "notebook", category: "stationery", price: 5, createdAt: new Date("2023-12-02"), instock: [ { warehouse: "C", qty: 5 } ] },
  { item: "paper", category: "office", price: 20, createdAt: new Date("2024-01-01"), instock: [ { warehouse: "A", qty: 60 }, { warehouse: "B", qty: 15 } ] },
  { item: "planner", category: "stationery", price: 25, createdAt: new Date("2024-02-15"), instock: [ { warehouse: "A", qty: 40 }, { warehouse: "B", qty: 5 } ] },
  { item: "postcard", category: "gift", price: 2, createdAt: new Date("2024-03-01"), instock: [ { warehouse: "B", qty: 15 }, { warehouse: "C", qty: 35 } ] }
]);

  
// db.inventory.find();

//List all items and total quantity across all warehouses
// db.inventory.aggregate([
//   {$unwind : "$instock"},
//   {$group:{
//     _id:"$item",
//     totalQuality:{$sum : "$instock.qty"}
//   }}
//   ])

//  Find total quantity per warehouse
// db.inventory.aggregate([
//   {$unwind : "$instock"},
//   {$group : {
//     _id:"$instock.warehouse",
//     totalQut:{$sum : "$instock.qty"}
//   }}
//   ])
  
  // get average price for each category

  // db.inventory.aggregate([
  //   {$group:{
  //     _id:"$category",
  //     avgPrice:{$avg : "$price"}
  //   }}
  //   ])

// Filter only items with price >= 10 and show name + price
// db.inventory.aggregate([
//   {$match : {price : {$gte : 10}}},
//   {
//     $project: {
//       _id: 0,
//       item: 1,
//       price: 1
//     }}
//   ])