import { getUser } from "../../lib/dataSource";

export default async function handler(req, res) {
  console.log("Before json.parse");
  let params = JSON.parse(req.body);
  console.log(params);
  const result = await getUser(params.email, params.password);
  return res.status(200).json({ data: result });
}
