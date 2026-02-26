import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

const CreateFood = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [videoFile, setVideoFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [message, setMessage] = useState('')

  const fileRef = useRef()

  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0]
    if (file) {
      setVideoFile(file)
      setPreview(URL.createObjectURL(file))
    } else {
      setVideoFile(null)
      setPreview(null)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!videoFile || !title.trim()) {
      setMessage('Please provide a video file and a title.')
      return
    }

    setUploading(true)
    setMessage('')
    try {
      const fd = new FormData()
      fd.append('video', videoFile)
      fd.append('name', title)
      fd.append('discription', description)

      // POST to backend — update URL if your API differs
      const res = await axios.post('http://localhost:4000/add/food/', fd , {withCredentials:true})
        console.log(res.data);
        
      if (!res) {
        const text = await res.text()
        throw new Error(text || 'Upload failed')
      }

      setMessage('Upload successful')
      setTitle('')
      setDescription('')
      setVideoFile(null)
      setPreview(null)
      if (fileRef.current) fileRef.current.value = ''
    } catch (err) {
      setMessage(err.message || 'Upload error')
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto my-6 p-6">
      <h2 className="text-2xl font-semibold mb-4">Create food partner video</h2>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <label className="block text-sm font-medium text-gray-700">
          Video file (mp4, webm):
          <input
            ref={fileRef}
            type="file"
            accept="video/*"
            onChange={handleFileChange}
            className="mt-2 block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </label>

        {preview && (
          <div>
            <p className="text-sm text-gray-600 mb-2">Preview:</p>
            <video
              src={preview}
              controls
              className="w-full max-w-2xl rounded-md shadow-sm"
            />
          </div>
        )}

        <label className="block">
          <span className="text-sm font-medium text-gray-700">Video name</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter video title"
            className="mt-2 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-gray-700">Description</span>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Short description"
            rows={4}
            className="mt-2 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={uploading}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-60"
          >
            {uploading ? 'Uploading...' : 'Upload'}
          </button>
          <button
            type="button"
            onClick={() => {
              setTitle('')
              setDescription('')
              setVideoFile(null)
              setPreview(null)
              setMessage('')
              if (fileRef.current) fileRef.current.value = ''
            }}
            className="px-3 py-2 border rounded-md bg-white hover:bg-gray-50"
          >
            Reset
          </button>
        </div>

        {message && (
          <p className={message.includes('success') ? 'text-green-600' : 'text-red-600'}>{message}</p>
        )}
      </form>
    </div>
  )
}

export default CreateFood
