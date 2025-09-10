import type { Route } from './+types/home';

export function loader({ request }: Route.LoaderArgs) {
  return { name: 'React Router', url: request.url };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div className="text-center p-4">
      <h1 className="text-2xl">Hello, {loaderData.name}</h1>
      URL: <p>{loaderData.url}</p>
      <a
        className="block mt-2 text-blue-500 underline hover:text-blue-600"
        href="https://reactrouter.com/docs"
      >
        React Router Docs
      </a>
    </div>
  );
}
