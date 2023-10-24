'use client';
import {useCompletion} from 'ai/react'

export default function Home() {
  const {completion, 
    input, 
    stop, 
    isLoading, 
    handleInputChange, 
    handleSubmit} = useCompletion({api: '/api/completion'})

  return (
    <div className="h-screen bg-gray-900 text-white p-10 rounded-lg shadow-lg space-y-4">
    <form onSubmit={handleSubmit} className="space-y-2">
      <input 
        type="text" 
        value={input} 
        onChange={handleInputChange} 
        placeholder='Ask a question' 
        className="w-full px-4 py-2 bg-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
      />
      <div className="p-3 flex space-x-2">
        <button 
          onClick={stop} 
          className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition duration-300 ease-in-out"
        >
          Stop
        </button>
        <button 
          disabled={isLoading} 
          type='submit' 
          className={`px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition duration-300 ease-in-out ${isLoading ? 'opacity-50' : 'opacity-100'}`}
        >
          {isLoading ? 'Loading..' : 'Send'}
        </button>
      </div>
    </form>
    <output className="text-lg">
      AI Result: <span className="font-bold">{completion}</span>
    </output>
  </div>  
  )
}
