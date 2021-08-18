const medalsReverse = [
  ['Country', 'Ukraine', 'Canada', 'USA', 'Germany',],
  ['Hokey', 1, 10, 6, 4],
  ['Football', 5, 2, 1, 3],
  ['Volleyball', 3, 4, 2, 8],
  
];

for (let i = 0; i < medalsReverse[0].length; i += 1) {
   let lineTxt = "";
   for (let y = 0;y < medalsReverse.length; y += 1){
      lineTxt += String(medalsReverse[y][i]).padStart(12 , " ")
     
   }
   console.log(lineTxt);
}
