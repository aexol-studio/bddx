import type { NextApiRequest, NextApiResponse } from "next";
export default (req: NextApiRequest, res: NextApiResponse) => {
  const { code } = req.query;
  console.log(code);

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
            client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            code: code,
            redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI,
          }),
        }
      );
      const responseText = await responseToken.text();
      console.log(responseText);
      const params = new URLSearchParams(responseText);
      const accessToken = params.get("access_token");
      if (accessToken) {
        res.status(201).json({ accessToken });
      } else {
        res.status(201).json("Error");
      }
    }
    console.log(code);
  });
};
