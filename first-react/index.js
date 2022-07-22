// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <a className="navbar-brand" href="#">
//         Navbar
//       </a>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarSupportedContent"
//         aria-controls="navbarSupportedContent"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav mr-auto">
//           <li className="nav-item active">
//             <a className="nav-link" href="#">
//               Home <span className="sr-only">(current)</span>
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">
//               Link
//             </a>
//           </li>
//           <li className="nav-item dropdown">
//             <a
//               className="nav-link dropdown-toggle"
//               href="#"
//               id="navbarDropdown"
//               role="button"
//               data-toggle="dropdown"
//               aria-haspopup="true"
//               aria-expanded="false"
//             >
//               Dropdown
//             </a>
//             <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//               <a className="dropdown-item" href="#">
//                 Action
//               </a>
//               <a className="dropdown-item" href="#">
//                 Another action
//               </a>
//               <div className="dropdown-divider"></div>
//               <a className="dropdown-item" href="#">
//                 Something else here
//               </a>
//             </div>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link disabled" href="#">
//               Disabled
//             </a>
//           </li>
//         </ul>
//         <form className="form-inline my-2 my-lg-0">
//           <input
//             className="form-control mr-sm-2"
//             type="search"
//             placeholder="Search"
//             aria-label="Search"
//           />
//           <button
//             className="btn btn-outline-success my-2 my-sm-0"
//             type="submit"
//           >
//             Search
//           </button>
//         </form>
//       </div>
//     </nav>
//   );
// }

// function MainContent() {
//   return <h1 className='text-white mt-5 p-3  text-center display-1 bg-primary rounded-3' >I'am learning react!</h1>;
// }
// ReactDOM.render(
//   <div>
//     <Navbar />
//     <MainContent />
//   </div>,

//   document.getElementById("root")
// );

// **** Imperative way****
// const h1 = document.createElement("h1");
// h1.textContent = "this is imperative way to program";
// h1.className = "header text-center text-primary";
// document.getElementById("root").append(h1);

// const page = (
//   <div className="text-center ">
//     <h1 className="text-primary">This is JSX</h1>
//     <p>hello this is paragraph</p>
//   </div>
// );
// ReactDOM.render(page, document.getElementById("root"));

///////////////navbar///////////////
// const navbar = (
//   <nav className="navbar navbar-light navbar-expand ">
//     <div className="container-fluid shadow">
//       <h1 className="fw-bold text-primary">Sourabh</h1>

//       <div className="">
//         <ul className="text-capitalize navbar-nav">
//           <li className="nav-link">pricing</li>
//           <li className="nav-link">about</li>
//           <li className="nav-link">contact</li>
//         </ul>
//       </div>
//     </div>
//   </nav>
// );

// ReactDOM.render(navbar, document.getElementById("root"));

// const page = (
//   <div>
//     <h1>Title</h1>
//     <p>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis iusto
//       autem exercitationem quae doloremque delectus accusantium minus. Placeat,
//       eligendi repellendus.
//     </p>
//     <h2>subtitle</h2>
//     <button type="button" className="btn-primary">
//       click me
//     </button>
//   </div>
// );

// document.getElementById("root").append(JSON.stringify(page));

// const funFact = (
//   <div>
//     <img src="./react-brands.svg" alt="name" width="40px" className='m-3'/>
//     <h1 className="text-capitalize mt-4 mb-5 text-primary text-center fw-bold">fun fact about react</h1>
//     <ul >
//       <li>Was first released in 2013</li>
//       <li>Was originally created by Jordan Walke</li>
//       <li>Has well over 100k stars on Github</li>
//       <li>Is maintained by Facebook</li>
//       <li>Power thousands of enterprise apps,including mobile apps</li>
//     </ul>
//   </div>
// );

// ReactDOM.render(funFact, document.getElementById("root"));

// function Page() {
//   return (
//     <div className="m-5">
//       <h1 className="text-primary ">Why you like React!</h1>
//       <ol className="text-secondary">
//         <li>Was first released in 2013</li>
//         <li>Was originally created by Jordan Walke</li>
//         <li>Has well over 100k stars on Github</li>
//         <li>Is maintained by Facebook</li>
//         <li>Power thousands of enterprise apps,including mobile apps</li>
//       </ol>
//     </div>
//   );
// }

// ReactDOM.render(
//   <div>
//     <Page />
//     <Page />
//   </div>,
//   document.getElementById("root")
// );

import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
