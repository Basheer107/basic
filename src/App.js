import logo from './logo.svg';
import './App.css';

function App() {
  // algorithm means steps 
  // define a variable
  // use a variable 


  
  const heading ="profiles";
  const age ="18";
  const verified = true;

  // algorithm
  // return name

  // type 1
  // function printName(){
  //   console.log("Basheer");
  // }
  // printName()

  // type 2
  function getName(){
    const name = "Basheer";
    return name;
  }

  // type 3
  function printPassedName(name){
    console.log(name);
  }
  // printPassedName(Basheer);

  // type 4

  function add(a,b){
    const result = a + b;
    return result;
  }

  // for (initilization ; condition ; increment/decrement){
  //   statement
  // }

  // ternary operator
  // syntax (condition) ? statement1 : statement2

  // map
  // numbers

  const numbers = [1,2,3,4,5];
  numbers.map((i) => {
    // console.log(i)
  });

  // string
  const names = ["saad","basheer","prince","nawaf"];
  names.map((name) => {
    // console.log(name)
  })

  // objects
  const profiles = [
    {name: "saad",
      age: 19
    },
    {name: "basheer",
      age:99
    },
    {name: "prince",
      age:35
    },
    {name: "nawaf",
      age:25

    },
  ];
  profiles.map((profile)=>{
    console.log(profile.name,profile.age)
  })

  function getName(){
    const name = "Basheer";
    return name;
  }
  
  return (
    <div className="App">
    <p>Name: {getName ()}</p>
    <p>Result: {add(10,10)}</p>
    <p>verified: {(verified ==true) ? "yes" : "no"}</p>
    </div>
    );
}

export default App;