import React, { useState, useEffect } from "react";

function UserGithub(props) {
  const [userData, setUserData] = useState(null);
  const [repoData, setRepoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userDataResponse, repoDataResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${props.username}`),
          fetch(`https://api.github.com/users/${props.username}/repos`),
        ]);
        const userData = await userDataResponse.json();
        const repoData = await repoDataResponse.json();
        setUserData(userData);
        setRepoData(repoData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [props.username]);

  return (
    <div>
      {userData && (
        <div>
          <img src={userData.avatar_url} alt="Profile" />
          <h1>{userData.name}</h1>
          <p>{userData.location}</p>
          <p>{userData.bio}</p>
        </div>
      )}

      {repoData.length > 0 && (
        <div>
          <h2>Repositories</h2>
          <ul>
            {repoData.map((repo) => (
              <li key={repo.id}>{repo.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default UserGithub;
