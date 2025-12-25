import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

async function main() {
  if(!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD) {
    throw new Error("Admin email or password not set in environment variables.");
  }

  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;
  const hashedPassword = await bcrypt.hash(adminPassword, 10);

  const existingAdmin = await prisma.user.findUnique({
    where: { email: adminEmail },
  });

  if (existingAdmin) {
    console.log("✅ Admin already exists.");
    return;
  }

  const admin = await prisma.user.create({
    data: {
      name: "Admin",
      email: adminEmail,
      password: hashedPassword,
    },
  });

  console.log("🎉 Admin user created:", admin.email);
}

main()
  .catch((err) => {
    console.error("❌ Failed to seed admin:", err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
