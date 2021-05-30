import { withIronSession } from "next-iron-session";

const valid_email = process.env.VALID_EMAIL;
const valid_password = process.env.VALID_PASSWORD;

export default withIronSession(
  async (req, res) => {
    if (req.method === "POST") {
      const { email, password } = req.body;

      if (email === valid_email && password === valid_password) {
        req.session.set("user", { email });
        await req.session.save();
        return res.status(201).send("");
      }

      return res.status(403).send("lol");
    }

    return res.status(404).send("again");
  },
  {
    cookieName: "MYSITECOOKIE",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production" ? true : false,
    },
    password: process.env.APPLICATION_SECRET,
  }
);
