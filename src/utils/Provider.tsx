'use client';

import { trpc } from '@/utils/trpc';
import { httpBatchLink } from '@trpc/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import superjson from 'superjson';

export default function TRPCProvider({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  const trpcClient = trpc.createClient({
    links: [
      httpBatchLink({
        url: '/api/trpc',
        transformer: superjson, // ✅ Move transformer here
      }),
    ],
  });

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </trpc.Provider>
  );
}
