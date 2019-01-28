//the ninth month is october because Date object months go from 0-11
var dateToday = new Date();
var myBirthday = new Date(2000,9,25);
var age = 0;

//if the date today is before october 25 then age starts at -1
//so we can add the difference of today's year and 2000 to it after to find age
if(dateToday.getMonth() <= 9 || (dateToday.getMonth() >= 9 && dateToday.getDate() < 25))
{
    --age;
}
else if (dateToday.getMonth() >= 9 && dateToday.getDate() >= 25)
{
    ++age;
}

age = (dateToday.getFullYear() - myBirthday.getFullYear()) + age;
document.getElementById("ageAutoUpdate").innerHTML = age;
                                                        

