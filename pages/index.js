import { useRouter } from "next/router"

export default function Home() {
  const router = useRouter()
  const navigateToLogin = () => {
    router.push('/dashboard')
  }
  return (
    <div className="min-h-screen bg-[#F5F6F9] flex items-center justify-center px-3 md:px-0">
      <div className="bg-white max-w-md mx-auto rounded-md px-4 py-6">
        <div className="w-full h-48 bg-gray-200"></div>
        <div className="text-left mt-6">
          <h1 className="text-3xl font-bold text-dark">Selamat Datang !</h1>
          <p className="font-normal mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="mt-4">
          <div className="mb-3">
            <label htmlFor="name" className="block mb-1 text-dark">Nama</label>
            <input type="text" className="bg-gray-100 border border-gray-300 text-dark text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Admin" />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-1 text-dark">Password</label>
            <input type="password" className="bg-gray-100 border border-gray-300 text-dark text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Password" />
          </div>
          <button onClick={navigateToLogin} type="submit" className="bg-primary p-3.5 w-full text-white font-bold rounded-md">Login</button>
        </div>
      </div>
    </div>
  )
}
