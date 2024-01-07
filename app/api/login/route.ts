import { PrismaClient } from '@prisma/client'
import { Credentials }  from './credentials';
import { User } from './user';
const prisma = new PrismaClient();

export async function POST(req: Request, res: Response) {
  const credentials: Credentials = await req.json()
  if (!!credentials && !!credentials.login && !!credentials.password) {
    const user: User | null = await prisma.user.findFirst({
      where: {
        login: credentials.login,
      }
    });
    if (credentials.password === user?.password) {
      return Response.json({message: 'Hello'});
    } else {
      return Response.json({message: 'Password isn\'t correct'});
    }
  } else {
    return Response.json({message: 'Error'});
  }

}