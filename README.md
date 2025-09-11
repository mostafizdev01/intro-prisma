Hello Prisma
This repository demonstrates Prisma ORM CRUD operations with PostgreSQL using TypeScript.
Here is a structured reference of all the main Prisma queries.

1. Create
const user = await prisma.user.create({
  data: {
    name: "Jhankar Mahbub",
    email: "jkr@ph.com",
    profilePhoto: "https://programing-hero.com/level2/jkr.png"
  }
});
Inserts a single user into the database and returns the created object.

2. Create Many
const users = await prisma.user.createMany({
  data: [
    { name: "Mir", email: "mir@ph.com" },
    { name: "Tanmoy", email: "tanmoy@ph.com" },
    { name: "Mizan", email: "mizan@ph.com" },
    { name: "Imun", email: "imun@ph.com" }
  ]
});
Inserts multiple users at once. Returns a count of inserted rows.

3. Find Many
const users = await prisma.user.findMany({
  where: { email: { contains: "ph.com", mode: "insensitive" } },
  orderBy: { name: "asc" }
});
Retrieves multiple users as an array. Supports filtering, ordering, and case-insensitive search.

4. Find Unique
const user = await prisma.user.findUnique({
  where: { id: 1 }
});
Retrieves a single user by a unique field (e.g., id or email). Returns null if not found.

5. Find Unique Or Throw
const user = await prisma.user.findUniqueOrThrow({
  where: { id: 6 }
});
Retrieves a single user by a unique field. Throws an error if the user does not exist.

6. Update
const updatedUser = await prisma.user.update({
  where: { id: 1 },
  data: { name: "Mezba Abedin", email: "mezba@gmail.com" }
});
Updates a single user and returns the updated object.

7. Update Many
const result = await prisma.user.updateMany({
  where: { id: { gt: 2 } },
  data: { profilePhoto: "https://programing-hero.com/level2/default-image.png" }
});
Updates multiple users matching the filter. Returns the count of updated rows.

8. Update Many and Return
  const updateProfilePhoto = await prisma.user.updateManyAndReturn({
    where: {
      id: {
        gt: 2
      }
    },
    data: {
      profilePhoto: "https://programing-hero.com/level2/default-image.png"
    }
  })
9. Delete
const deletedUser = await prisma.user.delete({
  where: { id: 1 }
});
Deletes a single user by unique field and returns the deleted object.

10. Delete Many
const result = await prisma.user.deleteMany({
  where: { id: { lt: 3 } }
});
Deletes multiple users matching the filter. Returns the count of deleted rows.

11. Order By
const users = await prisma.user.findMany({
  orderBy: { createdAt: "desc" }
});
Sorts the results based on a field in ascending (asc) or descending (desc) order.

12. Contains (with case-insensitive mode)
const users = await prisma.user.findMany({
  where: {
    name: { contains: "john", mode: "insensitive" }
  }
});
Performs a substring search in a string field with optional case-insensitivity.

This guide follows the exact order of Prisma queries used in the hello-prisma repository, making it easy to understand and practice CRUD operations with PostgreSQL.
