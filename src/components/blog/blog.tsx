import { Resource, component$, useResource$ } from "@builder.io/qwik"
import { useLocation } from "@builder.io/qwik-city"
import TestingMarkdown, {
  TestComponent,
} from "../testing-markdown/testing-markdown.mdx"

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
  const markdown = useResource$<string>(async () => {
    const response = await fetch(
      "https://raw.githack.com/NathanYik/nvim/master/README.md",
    )
    const data = await response.text()

    console.log("DATA", data)
    console.log(TestingMarkdown.toString())

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
            <h1 class="text-3xl font-bold">
              TODOS at path: {location.url.pathname}
            </h1>
            <li>{todo.id}</li>
            <li>{todo.title}</li>
            <li>{todo.completed}</li>
            <p>**blog**</p>
          </ul>
        )}
      />
      <Resource
        value={markdown}
        onPending={() => <p>Loading...</p>}
        onResolved={(text) => (
          <>
            <h1>Plain markdown content: {text}</h1>
            <TestingMarkdown
              components={{
                MarkDown() {
                  return <TestComponent test="test" />
                },
              }}
              content={text}
            />
            <TestComponent test={text}>
              <h1>I'm here!!</h1>
            </TestComponent>
          </>
        )}
      />
    </>
  )
})
