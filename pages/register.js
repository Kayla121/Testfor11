
import { useRouter } from 'next/router';

export default function Register() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/success');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-white">
      <h1 className="text-3xl font-bold mb-6">Student Registration</h1>
      <form className="w-full max-w-md space-y-4" onSubmit={handleSubmit}>
        <input className="w-full border p-2" type="text" placeholder="Name" required />
        <input className="w-full border p-2" type="email" placeholder="Email" required />
        <select className="w-full border p-2" required>
          <option value="">Select a course</option>
          <option>Academic Writing</option>
          <option>IELTS Preparation</option>
          <option>Business English</option>
        </select>
        <button className="w-full bg-blue-600 text-white py-2 rounded" type="submit">
          Pay & Register
        </button>
      </form>
    </div>
  );
}
