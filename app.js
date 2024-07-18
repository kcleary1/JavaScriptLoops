console.log("Hello World!\n==========\n");


console.log("EXERCISE 1:\n==========\n");

for (let number = 1; number <= 100; number++)
{
  if (number % 2 > 0)
  {
    console.log(number)
  }
  else 
  {

  }
}


console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i <= 100; i++)
{

    let output = "";
    
    if (i % 3 == 0 && i % 5 == 0)
    {
        output ="FIZZBUZZ";
    }
    else if (i % 5 == 0)
    {
        output = "BUZZ";
    }
    else if (i % 3 == 0)
    {
        ouput = "FIZZ";
    }

    console.log(`${i} ${output}`);

    i++;


}

console.log("EXERCISE 3:\n==========\n");
let i = 1;

while (i <= 100)
{
   if (i % 2 != 0)
   {
    console.log(i);
   }
    
   i++;
}
console.log("------------------");
let x = 1;

do
{
    if (x % 2 != 0)
        {
         console.log(x);
        }
        x++;

} while (x <=100);
console.log("------------------");
let y = 1
while (y <= 100)
{
    let output = "";
    
    if (y % 3 == 0 && y % 5 == 0)
    {
        output ="FIZZBUZZ";
    }
    else if (y % 5 == 0)
    {
        output = "BUZZ";
    }
    else if (y % 3 == 0)
    {
        ouput = "FIZZ";
    }

    console.log(`${y} ${output}`);

    y++;
}
console.log("------------------");
let z = 1;
do
{     
    let output = "";
    
    if (z % 3 == 0 && z % 5 == 0)
    {
        output ="FIZZBUZZ";
    }
    else if (z % 5 == 0)
    {
        output = "BUZZ";
    }
    else if (z % 3 == 0)
    {
        ouput = "FIZZ";
    }

    console.log(`${z} ${output}`);

    z++;
}while(z <=100);

console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500));
let n = Math.round(Math.random() * (500-100) + 100);

for (let i = 1; i <= n; i++)
{
    if (i == value)
    {
    console.log(`Found ${value}!`);
    break;
    }

    if (i == n)
    {
    console.log(`Did not find ${value} within 1-${n}.`);
    }  
}      
console.log("EXERCISE 5:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let f = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let i = start; i <= f; i++)
    {
    
        let output = ``;
        
        if (i % fizzDivisor == 0 && i % buzzDivisor == 0)
        {
            output =`FIZZBUZZ, because ${i} is divisible by ${fizzDivisor} and ${buzzDivisor}`;
        }
        else if (i % buzzDivisor == 0)
        {
            output = `BUZZ, because ${i} is divisible by ${buzzDivisor}`;
        }
        else if (i % fizzDivisor == 0)
        {
            output = `FIZZ, because ${i} is divisible by ${fizzDivisor}`;
        }
    
        console.log(`${output}`);
    
        i++;
    
    
    }