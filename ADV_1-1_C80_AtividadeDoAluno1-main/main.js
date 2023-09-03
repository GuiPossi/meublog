nameOfTheStudentArray =[]

function submit()
{

var displayStudentArray =[];

for (var j = 1;  j <= 4; j++)
{
  var nameOfTheStudent = document.getElementById("nameOfTheStudent"+j).value;
console.log(nameOfTheStudent);
nameOfTheStudentArray.push(nameOfTheStudent)
}

console.log(nameOfTheStudentArray);

var lenghfnameOfStudentArra = nameOfTheStudentArray.lengh;
console.log(lenghfnameOfStudentArray)

for (var k = 0; k <lenghfnameOfStudentArray; j++)
{   
    displayStudentArray.push("<h4>NAME - " + nameOfTheStudentArray[k] + "</h4>");
    console.log(displayStudentArray)
}

console.log(displayStudentArray)
document.getElementById("displayNameWithCommas").innerHTML = displayStudentArray

var removeCommas  =  displayStudentArray.join("")                                                 
console.log(removeCommas)
document.getElementById("displayNameWithCommas").innerHTML = displayStudentArray

document.getElementById("displayNameWithCommas").style.display = "nome"
document.getElementById("displayNameWithCommas").style.display = "inline-blok"
}

function sorting()
{
    nameOfTheStudentArray.sort();
    console.log(nameOfTheStudentArray);

    var displayStudentArraySorting = [];

var lenghtOfnameOfStudentsArray = nameOfTheStudentArray.lenght;
console.log(lenghtOfNameOfStudentsArray);

for (var k = 0; k < lenghtfnameOfStudentsArray; k++)
{
    displayStudentArraySorting.push("<h4>NAME - " + nameOfTheStudentArray[k] + "</h4>");
    console.log(displayStudentArraySorting);
}
var removeCommas = displayStudentArraySorting.join(" ");
console.log(removeCommas);

document.getElementById("displayNameWithoutCommas").innerHTML = removeCommas;
}

