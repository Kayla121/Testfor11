
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to MaraTalk</h1>
      <p className="text-lg">Connect with trusted lawyers for online or paid consultations.</p>
      <div className="mt-8">
        <a href="/lawyer/sample-lawyer" className="underline text-blue-400">View Lawyer Profile</a>
      </div>
    </div>
  );
}
