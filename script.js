function daysOfAYear(n)
{
	if((n%400==0)||((n%100!=0)&&(n%4==0)))
	{
		return 366;
	}
	return 365;
	
}
let value1 = prompt("enter the year.");
let a=daysOfAYear(value1);
 alert(a);

