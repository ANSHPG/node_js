const role = (val) => val
.map((elem) => elem+1)
.map((elem) => elem**2)
.filter((elem) => elem>15)
arr = [1,3,6 ,7]
console.log(role(arr));
