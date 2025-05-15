//Optimal solution
function SummaryRanges(nums) {
  if (!nums.length) return [];
  let res = [];
  function range(start) {
    if (start >= nums.length) return;
    let end = start;

    while (end + 1 < nums.length && nums[end] + 1 === nums[end + 1]) {
      end++;
    }

    if (start === end) {
      res.push(`${nums[start]}`);
    } else {
      res.push(`${nums[start]}->${nums[end]}`);
    }

    range(end + 1);
  }
  range(0);
  return res;
}

console.log(SummaryRanges([0, 1, 2, 4, 5, 7]));
//Time complexity = O(n);


