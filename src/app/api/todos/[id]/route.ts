// http://localhost:3000/api/todos/199

import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";

export async function GET(request: Request) {
    const id = request.url.slice(request.url.lastIndexOf('/') + 1)
    
	const res = await fetch(`${DATA_SOURCE_URL}/${id}`);

	const todo: Todo = await res.json(); //single todo

    if(!todo.id) return NextResponse.json({ "message": "Todo not found"})

	return NextResponse.json(todo);
}
