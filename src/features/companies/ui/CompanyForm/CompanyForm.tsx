"use client";

import { useTransition } from "react";
import { Button } from "@/shared/ui/Button/Button";
import { createCompany } from "../../actions";

export function CompanyForm() {
  const [isPending, startTransition] = useTransition();

  return (
    <form
      action={async (formData) => {
        startTransition(async () => {
          await createCompany(formData);
        });
      }}
      className="space-y-4"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Company Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 block w-full rounded-md border p-2"
        />
      </div>

      <div>
        <label htmlFor="regNumber" className="block text-sm font-medium">
          Registration Number
        </label>
        <input
          type="text"
          id="regNumber"
          name="regNumber"
          required
          className="mt-1 block w-full rounded-md border p-2"
        />
      </div>

      <div>
        <label htmlFor="vatNumber" className="block text-sm font-medium">
          VAT Number (optional)
        </label>
        <input
          type="text"
          id="vatNumber"
          name="vatNumber"
          className="mt-1 block w-full rounded-md border p-2"
        />
      </div>

      <Button type="submit" disabled={isPending}>
        {isPending ? "Creating..." : "Create Company"}
      </Button>
    </form>
  );
}
