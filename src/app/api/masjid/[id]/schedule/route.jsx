// app/api/masjids/[id]/schedule/route.js
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

// Get Prayer Time
export async function GET(request, { params }) {
    const { id } = params; // Extract masjid id from params

    try {
        if (!id) {
            return NextResponse.json({ error: 'Masjid ID is required' }, { status: 400 });
        }

        const res = await sql`
            SELECT * FROM prayer_times WHERE mid = ${id} ORDER BY create_at ASC LIMIT 1;
            `;
        if (res.rowCount === 0) {
            return NextResponse.json({ error: 'Prayer times not found' }, { status: 404 });
        }
        
        return NextResponse.json(res.rows);
    } catch (error) {
        console.error('Error fetching prayer times:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// Add Prayer Time
export async function POST(request, { params }) {
    const { id } = params; // Extract masjid id from params

    try {
        const { fajr, dhuhr, asr, magrib, isha } = await request.json();
        if (!fajr || !dhuhr || !asr || !magrib || !isha) {
            return NextResponse.json({ error: 'All prayer times are required' }, { status: 400 });
        }

        const res = await sql`
            INSERT INTO prayer_times (fajr, dhuhr, asr, magrib, isha, mid) 
            VALUES (${fajr}, ${dhuhr}, ${asr}, ${magrib}, ${isha}, ${id}) 
            RETURNING *;
        `;
        return NextResponse.json(res.rows[0], { status: 201 });
    } catch (error) {
        console.error('Error adding prayer times:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// Update Prayer Time
export async function PUT(request, { params }) {
    const { id } = params; // Extract masjid id from params

    try {
        const { fajr, dhuhr, asr, magrib, isha } = await request.json();
        if (!fajr || !dhuhr || !asr || !magrib || !isha) {
            return NextResponse.json({ error: 'All prayer times are required' }, { status: 400 });
        }

        const res = await sql`
            UPDATE prayer_times
            SET fajr = ${fajr}, dhuhr = ${dhuhr}, asr = ${asr}, magrib = ${magrib}, isha = ${isha}
            WHERE mid = ${id}
            RETURNING *;
        `;
        if (res.rowCount === 0) {
            return NextResponse.json({ error: 'Prayer times not found' }, { status: 404 });
        }

        return NextResponse.json(res.rows[0]);
    } catch (error) {
        console.error('Error updating prayer times:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
