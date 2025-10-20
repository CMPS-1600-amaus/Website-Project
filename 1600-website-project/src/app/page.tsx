"use client";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  async function onSubmit(e: React.FormEvent) {
    // TO DO: Milestone 2
  }
  return (
    <main>
      <div className='relative w-screen min-h-screen'>
        <div className="container mx-auto py-6 w-3xl">
          <div className='bg-slate-200 dark:bg-zinc-800 rounded-lg px-6 py-8 ring shadow-lg ring-gray-900/5 w-'>
            <div className="flex flex-1 justify-center items-center">
              <h1 className="text-lg text-center">Welcome to your sign in page</h1>
            </div>
            <div className="w-full m-w-xs mt-15 dark:bg-zinc-700 rounded-lg bg-slate-300">
              <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={onSubmit}>
                <div className="mb-4">
                  <label className="block dark:text-slate-100 text-gray-700 text-sm font-bold mb-2 rounded-lg" htmlFor="username">
                    Email
                  </label>
                  <input className="shadow appearance-none bg-white rounded w-full py-2 px-3 text-gray-700 dark:text-slate-100 leading-tighy focus:outline-none focus:shadow-outline dark:bg-zinc-800" id="username" type="text" placeholder="frankiesoltero@email.com" value={email} onChange={e => setEmail(e.target.value)} required />
                </div>
                <div className="mb-6">
                  <label className="block dark:text-slate-100 text-gray-700 text-sm font-bold mb-2 rounded-lg" htmlFor="password">
                    Password
                  </label>
                  <input className="shadow bg-white appearance-none rounded w-full py-2 px-3 text-gray-700 dark:text-slate-100 leading-tighy focus:outline-none focus:shadow-outline dark:bg-zinc-800" id="password" type="password" placeholder="*********" value={password} onChange={e => setPassword(e.target.value)} required />
                </div>
                <div className=" flex items-center justify-between">
                  <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Sign In
                  </button>
                  <Link href={'/create-user'} className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Create User
                  </Link>
                </div>
              </form>
            </div>
          </div>
          <div className="px-32 py-8">
            {error && <p className="text-red-600 mt-5 font-medium text-xl tracking-tight content-center">{error}</p>}
          </div>
        </div>
      </div>
    </main >
  )
}
