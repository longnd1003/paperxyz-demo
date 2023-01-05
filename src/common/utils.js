import { CLIENT_ID, CLIENT_SECRET } from "./constants";

const headers = new Headers({
  Authorization: `Bearer ${CLIENT_SECRET}`,
  "Content-Type": "application/json",
});

export const fetchUserToken = async (code) => {
  const resp = await fetch("https://paper.xyz/api/v1/oauth/token", {
    method: "POST",
    mode: "cors",
    headers: headers,
    body: JSON.stringify({
      code: code,
      clientId: CLIENT_ID,
    }),
  });

  if (resp.status === 200) {
    const { userToken } = await resp.json();
    return userToken;
  }

  throw new Error("Cannot fetch user token");
};

export const fetchUserDetails = async (userToken) => {
  const resp = await fetch("https://paper.xyz/api/v1/oauth/user-details", {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      userToken: userToken,
      clientId: CLIENT_ID,
    }),
  });

  if (resp.status === 200) {
    return await resp.json();
  }

  throw new Error("Cannot fetch user details");
};
