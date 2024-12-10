import logo from './logo.svg';
import './App.css';
import Btn from './component/Btn'
import Profile from './component/Profile';

function App() {
  const Profiles =[
    {name:"Basheer",
    img:"https://avatars.githubusercontent.com/u/182937907?v=4",
    decs:"I am persuing BCA",
    link:"https://github.com/Basheer107",
    btn:"github profile"
    },

    {name:"Mohammad bin te football",
      img:"https://avatars.githubusercontent.com/u/185525438?v=4",
      decs:"I like to play football",
      link:"https://github.com/gaghamohammad",
      btn:"github profile"
      },

      {name:"Saad bin te missed called",
        img:"https://avatars.githubusercontent.com/u/182938196?v=4",
        decs:"I am studying in BCA",
        link:"https://github.com/shk-Sam",
        btn:"github profile"
        },

        {name:"Nawaf",
          img:"https://avatars.githubusercontent.com/u/182943003?v=4",
          decs:"I am studying in 11th std",
          link:"https://github.com/Sknawaf05",
          btn:"github profile"
          },

          {name:"MR.SIR",
            img:"https://avatars.githubusercontent.com/u/185526098?v=4",
            decs:"I am teaching",
            link:"https://github.com/Vocabstudents",
            btn:"github profile"
            },

            {name:"Princes",
              img:"https://avatars.githubusercontent.com/u/111479652?v=4",
              decs:"I am studying in BCAIT",
              link:"https://github.com/pri810",
              btn:"github profile"
              },

              {name:"Tahseen",
                img:"https://avatars.githubusercontent.com/u/182941013?v=4",
                decs:"I am studying idk",
                link:"https://github.com/jiyashah26",
                btn:"github profile"
                },

                {name:"rumana",
                  img:"https://avatars.githubusercontent.com/u/185526264?v=4",
                  decs:"I am studying in 12th std",
                  link:"https://github.com/rumanamotiwala",
                  btn:"github profile"
                  },

                  {name:"Moin",
                    img:"https://avatars.githubusercontent.com/u/186063909?v=4",
                    decs:"I am studying in 7th std",
                    link:"https://github.com/moinuddin-4678",
                    btn:"github profile"
                    }
  ]
 
  return (
    <div className='container'>
      <h1>Profile hi sabki pahchan</h1>
     <div className='row'>
      {
         Profiles.map((profile)=>{
         return <Profile profile={profile}/>
        })
      }

     </div>
      
      
    </div>
    );
    // <div className='container'>
  //      <h1>Basic Game</h1>
  //     <div className='row'>
  //     <Profile name="Vocab" location="kausa"/>
  //     </div>
     
    
  //     {/* <Btn name="Sign up"/> */}
  //   </div>
  //   );
}

export default App;
