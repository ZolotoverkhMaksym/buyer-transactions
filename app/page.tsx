import Image from 'next/image'
import styles from './page.module.scss'
import { PrismaClient } from '@prisma/client'
import Link from 'next/link'

const prisma = new PrismaClient()

async function main() {
  const users = await prisma.user.findMany();
  console.log(users)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

export default function Home() {
  return (
    <main>
      <Link href="/login">login</Link>
    </main>
  )
}
