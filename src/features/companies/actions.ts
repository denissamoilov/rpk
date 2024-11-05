"use server";

import { prisma } from "@/shared/lib/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const createCompanySchema = z.object({
  name: z.string().min(1),
  regNumber: z.string().min(1),
  vatNumber: z.string().optional(),
});

export async function createCompany(formData: FormData) {
  const data = createCompanySchema.parse({
    name: formData.get("name"),
    regNumber: formData.get("regNumber"),
    vatNumber: formData.get("vatNumber"),
  });

  try {
    await prisma.company.create({
      data: {
        ...data,
        userId: "user-id", // You'll get this from the session
      },
    });
    revalidatePath("/companies");
    return { success: true };
  } catch (error) {
    return { error: error ?? "Failed to create company" };
  }
}
