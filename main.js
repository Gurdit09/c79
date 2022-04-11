namw_of_the_student_array = [];

function submit()
{


    var name_1 = document.getElementById("name_of_the_student_1").value;
    var name_2 = document.getElementById("name_of_the_student_2").value;
    var name_3 = document.getElementById("name_of_the_student_3").value;
    var name_4 = document.getElementById("name_of_the_student_4").value;

    namw_of_the_student_array.push(name_1);
    namw_of_the_student_array.push(name_2);
    namw_of_the_student_array.push(name_3);
    namw_of_the_student_array.push(name_4);

    console.log(namw_of_the_student_array);

    document.getElementById("display_name").innerHTML = namw_of_the_student_array;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";

}

function sorting()
{
namw_of_the_student_array.sort();
console.log(namw_of_the_student_array);
document.getElementById("display_name").innerHTML = namw_of_the_student_array;

}