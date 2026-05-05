import { NextResponse } from 'next/server';

export async function GET(request) {
  const poison = request.headers.get('x-api-poison') || 'clean';
  // Cache tanpa vary header
  const response = NextResponse.json({
    message: `Data from API - poisoned value: ${poison}`,
    timestamp: Date.now()
  });
  response.headers.set('Cache-Control', 'public, max-age=300, s-maxage=300');
  response.headers.set('CDN-Cache-Control', 'public, max-age=300');
  // Tidak ada Vary: x-api-poison → celah
  return response;
}
