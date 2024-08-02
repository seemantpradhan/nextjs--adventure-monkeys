If you do not want to migrate your database and prefer to keep your existing database structure, you can still use Prisma to access your existing tables. Here’s how you can proceed:

1. Install and Configure Prisma
Install Prisma CLI and Prisma Client:

```npm install @prisma/client```
```npx prisma init```


2. Configure Prisma Schema
Update your prisma/schema.prisma to reflect your existing database tables. If you already have a database, you can introspect it to generate the Prisma schema:

```npx prisma db pull```
This command will introspect your existing database and create the corresponding Prisma schema.

3. Verify the Generated Schema
After running the introspect command, your prisma/schema.prisma should reflect your existing database structure. Ensure it includes the User model and any other models you have.

```npx prisma generate```

4. Set Up Prisma Client
Create a file to set up Prisma Client (lib/prisma.ts):

// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default prisma;


5. Create API Route with App Router
Create your API route in the new App Router structure:

// src/app/api/users/route.ts
```
import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching users' }, { status: 500 });
  }
}
```