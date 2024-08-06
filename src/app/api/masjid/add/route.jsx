// app/api/masjids/add/route.js
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { name } = await request.json();
        if (!name) {
            return NextResponse.json({ error: 'Name is required' }, { status: 400 });
        }

        const res = await sql`INSERT INTO masjid (name) VALUES (${name}) RETURNING *`;
        return NextResponse.json(res.rows[0], { status: 201 });
    } catch (error) {
        console.error('Error adding masjid:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
