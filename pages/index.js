
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to EPCC</h1>
      <p className="text-lg">Explore our student programs and register easily online.</p>
      <a href="/register" className="mt-6 text-blue-600 underline">Register Now</a>
    </div>
  );
}
