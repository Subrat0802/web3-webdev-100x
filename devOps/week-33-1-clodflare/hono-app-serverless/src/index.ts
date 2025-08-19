import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';

const app = new Hono()

//jwt, headers, middleware, database(prisma)

app.post('/api/v1/signup', async (c) => {
  const body = await c.req.json();
  const prismaClient = new PrismaClient({
    //@ts-ignore
    datasourceUrl:c.env.DATABASE_URL
  }).$extends(withAccelerate());
  
  const response = await prismaClient.user.create({
    data:{
      name:body.name,
      email:body.email,
      password:body.password
    }
  })

  return c.json({
    message:"response, signup successfully",
    response: response
  })
})

app.post('/api/v1/signin', (c) => {
  return c.text('Hello Hono!')
})

app.use(async (c, next) => {
  if (c.req.header("Authorization")) {
    // Do validation
    await next()
  } else {
    return c.text("You dont have acces");
  }
})

app.post('/api/v1/todo', (c) => {
  return c.text('Hello Hono!')
})

app.get('/api/v1/todo', (c) => {
  return c.text('User is subrat')
})

export default app
