'use client';

import { trpc } from '@/utils/trpc';

export default function PingComponent() {
  const { data, isLoading, error } = trpc.task.getAll.useQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <p>Ping result: {data}</p>;
}
