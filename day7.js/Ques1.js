//Give an example of using a callback function to handle an asynchronous operation in JavaScript (Use any open api to make a call)

const func=  (print)=>{
    setTimeout(async ()=>{
        const res = await fetch("https://currency-exchange.p.rapidapi.com/listquotes", {
       headers: {
        "X-RapidAPI-Key": "5f4516e06cmshfd4c3e5f19ad444p1ce5fbjsna35db917957a",
        "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
        },
        });
        const data =  res.json();
        print(data);

    },1000)
    
}

func((data)=>{
    console.log(data);
})

/*output=[
  'SGD', 'MYR', 'EUR',
  'USD', 'AUD', 'JPY',
  'CNH', 'HKD', 'CAD',
  'INR', 'DKK', 'GBP',
  'RUB', 'NZD', 'MXN',
  'IDR', 'TWD', 'THB',
  'VND'
]
*/