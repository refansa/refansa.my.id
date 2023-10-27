import { NextResponse } from 'next/server'
import data from '../../data/projectList.json'

export async function GET() {
  return NextResponse.json(data)
}
