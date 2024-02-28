import { router } from "../trpc";
import { apiKeysAppRouter } from "./apiKeys";
import { bookmarksAppRouter } from "./bookmarks";
import { usersAppRouter } from "./users";
export const appRouter = router({
  bookmarks: bookmarksAppRouter,
  apiKeys: apiKeysAppRouter,
  users: usersAppRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;