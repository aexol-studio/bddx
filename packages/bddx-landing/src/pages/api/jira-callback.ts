import type { NextApiRequest, NextApiResponse } from "next";
export default (req: NextApiRequest, res: NextApiResponse) => {
  const { code } = req.query;
  return new Promise(async () => {
    if (code) {
      res.setHeader("Access-Control-Allow-Origin", "*");
      const responseToken = await fetch(
        "https://auth.atlassian.com/oauth/token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            grant_type: "authorization_code",
            client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            code: code,
            redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI,
          }),
        }
      );
      const responseJSON = await responseToken.json();

      const { access_token } = responseJSON;
      console.log(access_token);
      if (access_token) {
        res.status(201).json({ access_token });
      } else {
        res.status(201).json("Error");
      }
    }
  });
};
