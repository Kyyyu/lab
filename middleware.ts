import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Tanggepin response yang bakal dikirim ke client
  const response = NextResponse.next();

  // PAKSA HEADER CACHE-CONTROL, IGNORE APA YANG DIBUAT OLEH NEXT.JS
  response.headers.set('Cache-Control', 'public, max-age=3600, s-maxage=3600');
  
  // OPSIONAL: Tambahin header buat ngetes
  response.headers.set('X-Lab-Red', 'ACTIVE');

  return response;
}
