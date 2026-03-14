import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { RouterProvider } from "react-router"
import { appRouter } from "./router/app.router"






function App() {

const queryClient = new QueryClient()




  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={appRouter}/>
      

    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
