// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import "./style.css";

// const UserList = () => {
//   const [data, setData] = useState([]);
//   const [item, setItem] = useState([]);
//   const [input, setInput] = useState("");

//   useEffect(() => {
//     async function abc() {
//       const response = await axios.get(
//         "https://jsonplaceholder.typicode.com/todos/?&_limit=5"
//       );
//       setData(response.data);
//     }
//     abc();
//   }, []);

//   const asc = (id) => {
//     const sort = data.sort((a, b) => a.id - b.id);
//     setData([...sort]);
//   };
//   const dsc = (id) => {
//     const sort = data.sort((a, b) => b.id - a.id);
//     setData([...sort]);
//   };
//   const show = async (id) => {
//     const response = await axios.get(
//       `https://jsonplaceholder.typicode.com/users/${id}`
//     );

//     setItem([...item, response.data]);
//   };

//   const handelChange = (e) => {
//     setInput(e.target.value);
//   };

//   return (
//     <div>
//       <input className="input" onChange={handelChange}></input>
//       <button className="btn" onClick={asc}>
//         ASC
//       </button>
//       <button className="btn" onClick={dsc}>
//         DSC
//       </button>
//       {item.map((el, index) => {
//         return (
//           <div key={index} className="detail">
//             <table className="detail-table">
//               <thead>
//                 <tr>
//                   <th>User Id</th>
//                   <th>Name</th>
//                   <th>Username</th>
//                   <th>Email</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="table-data">{el.id}</td>
//                   <td className="table-data">{el.name}</td>
//                   <td className="table-data"> {el.username} </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         );
//       })}

//       {data
//         .filter((value) => {
//           if (
//             value.title.includes(input) ||
//             value.id.toString().includes(input)
//           ) {
//             return value;
//           }
//         })
//         .map((el, index) => {
//           return (
//             <div key={index} className="App">
//               <table>
//                 <thead>
//                   <tr>
//                     <th>ToDo Id</th>
//                     <th>Title</th>
//                     <th>Show Detail</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td className="table-data">{el.id}</td>
//                     <td className="table-data">{el.title}</td>
//                     <td className="table-data">{el.status}</td>

//                     <td className="table-data">
//                       <button onClick={() => show(el.id)}>View Detail</button>
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           );
//         })}
//     </div>
//   );
// };

// export default UserList;

import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const UserList = () => {
  const [input, setInput] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    const abc = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos/?&_limit=5np"
        );
        setData(response.data);
        // console.log(response.data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    abc();
  }, []);
  const Asc = (id) => {
    const sort = data.sort((a, b) => a.id - b.id);
    setData([...sort]);
  };
  const Dsc = (id) => {
    const sort = data.sort((a, b) => b.id - a.id);
    setData([...sort]);
  };

  const view = async (id) => {
    const response =await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    
    console.log(response.data)
  };
  return (
    <div>
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></input>
      <button onClick={Asc}>Asc</button>
      <button onClick={Dsc}>Dsc</button>

      {data.map((el, id) => {
        return (
          <div key={id}>
            <table>
              <thead>
                <tr>
                  <td>{el.id}</td>
                  <td>{el.title}</td>
                  <button onClick={()=>view(id)}>view Detail</button>
                </tr>
              </thead>
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
