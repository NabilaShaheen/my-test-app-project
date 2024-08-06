// app/api/masjids/route.js
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const res = await sql`SELECT * FROM masjid`;
        return NextResponse.json(res.rows);
    } catch (error) {
        console.error('Error fetching masjids:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
