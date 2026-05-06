import { headers } from 'next/headers';

export default async function Home() {
  const headersList = headers();
  const poisonHeader = headersList.get('x-cache-poison') || 'none';
  return (
    <div>
      <h1>Cache Poisoning Lab V2</h1>
      <p>X-Cache-Poison: {poisonHeader}</p>
    </div>
  );
    }
