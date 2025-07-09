import { router } from '@/app/server/trpc/trpc';
import { taskRouter } from '@/app/server/trpc/routers/task';

export const appRouter = router({
  task: taskRouter,
});

export type AppRouter = typeof appRouter;
