import { prismaCLient } from "db/client";


const prismaClient = prismaCLient;

export default async function Home() {
  const user = await prismaClient.user.findMany();
  return (
    <div >
      {JSON.stringify(user)}
    </div>
  );
}
