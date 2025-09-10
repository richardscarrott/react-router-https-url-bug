import type { Route } from "./+types/home";

export function loader({ request }: Route.LoaderArgs) {
  return { name: "React Router", url: request.url };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="text-center p-4 flex flex-col items-center gap-6">
        <h1 className="text-2xl">Hello, {loaderData.name}</h1>
        <div className="text-2xl">
          URL: <span className="font-bold">{loaderData.url}</span>
        </div>
        {new URL(loaderData.url).hostname === "undefined" ? (
          <div className="px-4 py-3 bg-red-700 text-white text-3xl ">Fail</div>
        ) : (
          <div className="px-4 py-3 bg-green-700 text-white text-3xl">Pass</div>
        )}
      </div>
    </div>
  );
}
