export const useUser = () =>
  useState<{ name: string; email?: string; role: string } | null>(
    "user",
    () => null
  );
