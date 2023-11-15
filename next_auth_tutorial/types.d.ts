export type User =
  | {
      email?: string | null;
      name?: string | null;
      image?: string | null;
    }
  | undefined;
