import prisma from "@/lib/db"


const page = async () => {
  const post = await prisma.post.findMany();

  return (
    <div>
      {JSON.stringify(post)}
    </div>
  )
}

export default page