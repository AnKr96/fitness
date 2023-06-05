import logo from './logo.svg';
import './App.css';

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1 className="text-3xl font-bold underline">Hello world!</h1>
//         <p>
//           <button
//             type="button"
//             onClick={() => setCount((currentCount) => currentCount + 1)}
//           >
//             count is: {count}
//           </button>
//         </p>
//         <p>
//           Edit <code>App.jsx</code> and save to test HMR updates.
//         </p>
//         <p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//           {'| '}
//           <a
//             className="App-link"
//             href="https://vitejs.dev/guide/features.html"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Vite Docs
//           </a>
//         </p>
//       </header>
//     </div>
//   );
// }

export default function App() {
  return (
    <div className="bg-bgdark height: 100%">
      <div className="mx-5 flex-col justify-center text-white">
        <h1 className="text-4xl font-bold">Hi Name!</h1>
        <div className="flex justify-center">
          <img className="w-9/12" src="./images/homescreen.svg" />
        </div>
        <div className="mt-11 flex justify-between items-end">
          <h2 className="text-3xl font-bold">Dein Workout heute:</h2>
          <p className="font-normal text-xs">Trainingsplan</p>
        </div>
        <div className="h-52 w-full bg-bggrey rounded-3xl">
          <a href={`/Trainingsprogrammdetails`}>
            <div className="h-full m-7 flex flex-col justify-end">
              <h3 className="text-lg font-bold leading-7">Tag 2</h3>
              <h3 className="text-2xl font-bold leading-9">
              Titel des Programms 
              </h3>
              <p className="mb-7 text-xs">26 Minuten - Beweglichkeit</p>
            </div>
          </a>
        </div>
      </div>
      <div>
        <p>Navbar</p>
      </div>
    </div>
 );

}
