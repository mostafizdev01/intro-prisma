# 📚 Hello Prisma  

This repository demonstrates **Prisma ORM CRUD operations** with **PostgreSQL** using **TypeScript**.  
It provides a structured reference of all the main Prisma queries in one place.  

---

## 🚀 Features
- ✅ **Create** single & multiple records  
- ✅ **Read** data with filters, sorting, and unique lookups  
- ✅ **Update** single & multiple records (with return support)  
- ✅ **Delete** single & multiple records  
- ✅ **Advanced queries** like `contains`, `orderBy`, and case-insensitive search  

---

## 🛠️ Setup Instructions  

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/hello-prisma.git
   cd hello-prisma
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Configure PostgreSQL**  
   Update your `.env` file:  
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/yourdbname"
   ```

4. **Run Prisma migrations**  
   ```bash
   npx prisma migrate dev --name init
   ```

5. **Start the project**  
   ```bash
   npm run dev
   ```

---

## 🔑 Prisma Query Reference  

### 1. **Create**
```ts
const user = await prisma.user.create({
  data: {
    name: "Jhankar Mahbub",
    email: "jkr@ph.com",
    profilePhoto: "https://programing-hero.com/level2/jkr.png"
  }
});
```

### 2. **Create Many**
```ts
const users = await prisma.user.createMany({
  data: [
    { name: "Mir", email: "mir@ph.com" },
    { name: "Tanmoy", email: "tanmoy@ph.com" },
    { name: "Mizan", email: "mizan@ph.com" },
    { name: "Imun", email: "imun@ph.com" }
  ]
});
```

### 3. **Find Many**
```ts
const users = await prisma.user.findMany({
  where: { email: { contains: "ph.com", mode: "insensitive" } },
  orderBy: { name: "asc" }
});
```

### 4. **Find Unique**
```ts
const user = await prisma.user.findUnique({
  where: { id: 1 }
});
```

### 5. **Find Unique Or Throw**
```ts
const user = await prisma.user.findUniqueOrThrow({
  where: { id: 6 }
});
```

### 6. **Update**
```ts
const updatedUser = await prisma.user.update({
  where: { id: 1 },
  data: { name: "Mezba Abedin", email: "mezba@gmail.com" }
});
```

### 7. **Update Many**
```ts
const result = await prisma.user.updateMany({
  where: { id: { gt: 2 } },
  data: { profilePhoto: "https://programing-hero.com/level2/default-image.png" }
});
```

### 8. **Update Many and Return**
```ts
const updateProfilePhoto = await prisma.user.updateManyAndReturn({
  where: { id: { gt: 2 } },
  data: { profilePhoto: "https://programing-hero.com/level2/default-image.png" }
});
```

### 9. **Delete**
```ts
const deletedUser = await prisma.user.delete({
  where: { id: 1 }
});
```

### 10. **Delete Many**
```ts
const result = await prisma.user.deleteMany({
  where: { id: { lt: 3 } }
});
```

### 11. **Order By**
```ts
const users = await prisma.user.findMany({
  orderBy: { createdAt: "desc" }
});
```

### 12. **Contains (Case-Insensitive)**
```ts
const users = await prisma.user.findMany({
  where: { name: { contains: "john", mode: "insensitive" } }
});
```

---

## 📌 Summary  
This guide follows the **exact order of Prisma queries** used in the `hello-prisma` repository, making it beginner-friendly and easy to practice CRUD operations with PostgreSQL.  

---

## 🤝 Contributing  
Pull requests are welcome! Feel free to fork this repo and add more Prisma examples.  


---

✨ Happy Coding with **Prisma + PostgreSQL + TypeScript**! 🚀  
