import { NextResponse } from 'next/server';

export function GET() {
    return NextResponse.json({message: 'Obteniendo Tarea'});
}

export function DELETE() {
    return NextResponse.json({message: 'Eliminando Tarea'});
}

export function PUT() {
    return NextResponse.json({message: 'Actualizando Tarea'});
}