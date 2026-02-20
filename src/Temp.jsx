import React, { useEffect, useState } from "react";

function Temp() {
  const [user, setUser] = useState([]);

  useEffect(async () => {
    const Response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(Response);
    const JResponse = await Response.json();
    console.log(JResponse);
    setUser(JResponse);
    // .then(response => console.log("This", typeof response)) // Parses the response body as JSON
    // .then(data => console.log(data)) // Handles the parsed data
    // .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (
    <div>
      {user.map((user) => {
        return (
          <>
            <p>{user.id}| {user.name} | {user.email} | {user.phone} </p>
          </>
        );
      })}
    </div>
  );
}

export default Temp;
