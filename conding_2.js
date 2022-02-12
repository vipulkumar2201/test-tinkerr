const asdf = (num) => {
	const space = Math.floor(num/2);
  let vertical = ' '
  let horizontal = '*'
  for(i=0;i<space;i++) {
  	if(i === space -1) vertical = vertical + '*';
    else vertical = vertical + ' '
  }
  for(j=0;j<num;j++) {
    horizontal = horizontal + '*'
  }
  for(k=0;k<num;k++) {
    if(k===0 || k=== num-1) console.log(horizontal)
    else console.log(vertical)
  }
}
asdf(5)
