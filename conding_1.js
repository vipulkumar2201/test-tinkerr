const smallestRadius = (plants, sprinklers) => {
	plants = plants.sort((a, b) => a - b);
  sprinklers = sprinklers.sort((a, b) => a - b);
	nearestPlants = (pos) => {
  	let left = 0; 
    let right = 0;
  	for(k=0;k<plants.length;k++) {
    const diff = pos - plants[k];
			if(diff < 0) {
      	if(diff < left) left = diff;
      } else {
        if(diff > right) right = diff;
      }
  }
  return [left, right];
  }
  const nearestData = [];
	for(let i=0; i< sprinklers.length; i++) {
  	nearestData.push(nearestPlants(sprinklers[i]));
  };
}
