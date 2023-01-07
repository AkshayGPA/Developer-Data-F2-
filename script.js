/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  //Write your code here
  const newArr = arr.map(myFunction);
	
	function myFunction(obj){
		if(obj.profession === "developer"){  //strict comparison
			console.log(obj);
		}
	}
  
}

function PrintDeveloperbyForEach() {
  //Write your code here
  const newArr = arr.forEach(myFunction);
	
	function myFunction(obj){
		if(obj.profession === "developer"){  //strict comparison
			console.log(obj);
		}
	}

}

function addData() {
  //Write your code here
  let temp = {id:4,name:"susan",age:"20",profession:"intern"};
  arr.push(temp);
  console.log(arr);
}

// addData();

function removeAdmin() {
  //Write your code here
  
	let z = arr.filter(function(v){//callback function
	
	  if(v.profession !== "admin"){//filtering criteria
		return v;
	  }
	})
	console.log(z);
}

function concatenateArray() {
  //Write your code here

  let arr2 = [
    { id: 4, name: "Swapnil Chaudari", age: "18", profession: "developer" },
    { id: 5, name: "jack", age: "20", profession: "developer" },
    { id: 6, name: "karen", age: "19", profession: "admin" },
  ];

  // arr.concat(arr2);
  let arr3 = arr.concat(arr2);
  console.log(arr3);
}
