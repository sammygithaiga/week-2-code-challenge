
function Array(beggining, end) {
    if (beggining > end) {
      // Swap start and end if start is greater than end
      [beggining, end] = [end, beggining];
    }
  
    const array = [];
    for (let p = beggining; p <= end; p++) {
      array.push(p);
    }
  
    return array;
  }
  
  // Example usage:
  console.log(Array(4, 7)); 
  console.log(Array(-4, -7)); 