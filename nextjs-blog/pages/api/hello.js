// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = (req, res) => {
  res.status(200);
  res.json({ userName: "John pollas" });
};

export default handler;
