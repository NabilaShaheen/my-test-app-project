// app/api/masjids/[id]/route.js
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function PUT(request, { params }) {
    const { id } = params;
    try {
        const { name } = await request.json();
        if (!name) {
            return NextResponse.json({ error: 'Name is required' }, { status: 400 });
        }

        const res = await sql`UPDATE masjid SET name = ${name} WHERE mid = ${id} RETURNING *`;
        if (res.count === 0) {
            return NextResponse.json({ error: 'Masjid not found' }, { status: 404 });
        }
        
        return NextResponse.json(res[0]);
    } catch (error) {
        console.error('Error updating masjid:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    const { id } = params;
    try {
        const res = await sql`DELETE FROM masjid WHERE mid = ${id}`;
        if (res.count === 0) {
            return NextResponse.json({ error: 'Masjid not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Masjid deleted' });
    } catch (error) {
        console.error('Error deleting masjid:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
