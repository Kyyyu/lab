import { headers } from 'next/headers';

export default async function Home() {
  const headersList = headers();
  const poisonHeader = headersList.get('x-cache-poison') || 'none';
  const userAgent = headersList.get('user-agent') || 'unknown';

  // Data ini akan disimpan di cache tanpa memvary header x-cache-poison
  return (
    <div style={{ padding: 20 }}>
      <h1>Cache Poisoning Lab</h1>
      <div style={{ border: '1px solid red', padding: 10, marginTop: 20 }}>
        <h2>⚠️ Konten Rentan ⚠️</h2>
        <p><strong>Nilai Header X-Cache-Poison:</strong> {poisonHeader}</p>
        <p><strong>User-Agent:</strong> {userAgent}</p>
        <p>Jika header <code>X-Cache-Poison: &lt;script&gt;alert(1)&lt;/script&gt;</code> dikirim, maka konten ini akan disimpan di CDN Vercel dan diberikan ke pengguna lain tanpa header tersebut.</p>
      </div>
    </div>
  );
  }
