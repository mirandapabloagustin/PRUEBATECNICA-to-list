import { NextResponse } from 'next/server';

export function GET() {
    return NextResponse.json({message: 'Listando Tareas'});
}

export function POST() {
    return NextResponse.json({message: 'Creando Tarea'});
}