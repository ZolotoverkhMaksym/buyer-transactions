import { PrismaClient } from '@prisma/client'
import Login  from './login';
const prisma = new PrismaClient();

export async function POST(request: Request) {
  const login: Login = await request.json()
 console.log(login);
  const data = await prisma.user.findFirst()
 
  return Response.json("hello")
}