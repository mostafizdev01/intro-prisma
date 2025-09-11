📚 Hello Prisma

This repository demonstrates Prisma ORM CRUD operations with PostgreSQL using TypeScript.
It provides a structured reference of all the main Prisma queries in one place.

🚀 Features

✅ Create single & multiple records

✅ Read data with filters, sorting, and unique lookups

✅ Update single & multiple records (with return support)

✅ Delete single & multiple records

✅ Advanced queries like contains, orderBy, and case-insensitive search

🛠️ Setup Instructions

Clone the repository

git clone https://github.com/your-username/hello-prisma.git
cd hello-prisma


Install dependencies

npm install


Configure PostgreSQL
Update your .env file:

DATABASE_URL="postgresql://user:password@localhost:5432/yourdbname"


Run Prisma migrations

npx prisma migrate dev --name init


Start the project

npm run dev

🔑 Prisma Query Reference
1. Create
const user = await prisma.user.create({
  data: {
    name: "Jhankar Mahbub",
    email: "jkr@ph.com",
    profilePhoto: "https://programing-hero.com/level2/jkr.png"
  }
});


➡️ Inserts a single user into the database and returns the created object.

2. Create Many
const users = await prisma.user.createMany({
  data: [
    { name: "Mir", email: "mir@ph.com" },
    { name: "Tanmoy", email: "tanmoy@ph.com" },
    { name: "Mizan", email: "mizan@ph.com" },
    { name: "Imun", email: "imun@ph.com" }
  ]
});


➡️ Inserts multiple users at once. Returns a count of inserted rows.

3. Find Many
const users = await prisma.user.findMany({
  where: { email: { contains: "ph.com", mode: "insensitive" } },
  orderBy: { name: "asc" }
});


➡️ Retrieves multiple users with filtering & sorting.

4. Find Unique
const user = await prisma.user.findUnique({
  where: { id: 1 }
});


➡️ Finds a user by unique field (id/email). Returns null if not found.

5. Find Unique Or Throw
const user = await prisma.user.findUniqueOrThrow({
  where: { id: 6 }
});


➡️ Similar to findUnique, but throws an error if not found.

6. Update
const updatedUser = await prisma.user.update({
  where: { id: 1 },
  data: { name: "Mezba Abedin", email: "mezba@gmail.com" }
});


➡️ Updates a single user & returns the updated object.

7. Update Many
const result = await prisma.user.updateMany({
  where: { id: { gt: 2 } },
  data: { profilePhoto: "https://programing-hero.com/level2/default-image.png" }
});


➡️ Updates multiple users. Returns a count of updated rows.

8. Update Many and Return
const updateProfilePhoto = await prisma.user.updateManyAndReturn({
  where: { id: { gt: 2 } },
  data: { profilePhoto: "https://programing-hero.com/level2/default-image.png" }
});


➡️ Updates multiple users and returns the updated records.

9. Delete
const deletedUser = await prisma.user.delete({
  where: { id: 1 }
});


➡️ Deletes a single user & returns the deleted object.

10. Delete Many
const result = await prisma.user.deleteMany({
  where: { id: { lt: 3 } }
});


➡️ Deletes multiple users. Returns a count of deleted rows.

11. Order By
const users = await prisma.user.findMany({
  orderBy: { createdAt: "desc" }
});


➡️ Sorts results by ascending (asc) or descending (desc) order.

12. Contains (Case-Insensitive)
const users = await prisma.user.findMany({
  where: { name: { contains: "john", mode: "insensitive" } }
});


➡️ Performs a substring search with case-insensitivity.

📌 Summary

This guide follows the exact order of Prisma queries used in the hello-prisma repository, making it beginner-friendly and easy to practice CRUD operations with PostgreSQL.

🤝 Contributing

Pull requests are welcome! Feel free to fork this repo and add more Prisma examples.
