// import "./App.css";
// import { useState } from "react";
// import axios from "axios";

// function App() {
//   const [data, setData] = useState(null);

//   async function getPets() {
//     try {
//       const pets = await axios.get("http://localhost:4000/api/v1/pets", {
//         headers: {
//           "Content-Type": "application/json",
//         },
//         withCredentials: true,
//       });

//       setData(pets.data.data.pets.map((pet, index) => <div key={index}>{pet.name}</div>));

//       // setData(pets.data);
//     } catch (err) {
//       console.log(err.response.data);

//       setData(err.response.data.message)
//     }
//   }

//   async function loginPets() {
//     try {
//       await axios.post(
//         "http://localhost:4000/api/v1/pets/login",
//         {
//           email: "theo@example.com",
//           password: "teddytheo",
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           withCredentials: true,
//         }
//       );

//       // setData(pets.data.pets)

//       // console.log(JSON.parse(pets.request.response).token);
//     } catch (err) {
//       console.log(err.response.data);
//     }
//   }

//   async function toSignout() {
//     try {
//       await axios.get("http://localhost:4000/api/v1/pets/logout", {
//         headers: {
//           "Content-Type": "application/json",
//         },
//         withCredentials: true,
//       });

//       setData(null)
//     } catch (err) {
//       console.log(err.response.data);
//     }
//   }

//   // console.log(data.data.pets)

//   return (
//     <div className="App">
//       <button onClick={loginPets}>CLICK TO LOGIN</button>
//       <button onClick={getPets}>CLICK TO GET USERS</button>
//       <button onClick={toSignout}>CLICK TO SIGN OUT</button>
//       {data ? data : "Loading..."}
//     </div>
//   );
// }

// export default App;
