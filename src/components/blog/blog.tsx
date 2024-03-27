import { Resource, component$, useResource$ } from "@builder.io/qwik"
import { useLocation } from "@builder.io/qwik-city"

export interface BlogProps {}

export const Blog = component$<BlogProps>(() => {
  const randomAPIresult = useResource$<{
    userId: number
    id: number
    title: string
    completed: boolean
  }>(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const data = await response.json()

    return data
  })
  const location = useLocation()

  return (
    <>
      <h1>TODOS:</h1>
      <Resource
        value={randomAPIresult}
        onPending={() => <p>Loading...</p>}
        onResolved={(todo) => (
          <ul class="border-2 border-red-500">
            <h1 class="text-3xl font-bold">TODOS at path: {location.url.pathname}</h1>
            <li>{todo.id}</li>
            <li>{todo.title}</li>
            <li>{todo.completed}</li>
          </ul>
        )}
      />
    </>
  )
})
