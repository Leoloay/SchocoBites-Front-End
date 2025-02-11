const ContactUs = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-10">
          Contact Us
        </h2>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-2xl font-extrabold text-gray-800 text-center mb-10">
          Have a Question or Special Inquiry? Send us a message here!
        </p>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form>
            <label className="block text-sm font-medium text-gray-900">
              Email
            </label>
            <input
              className="block w-full rounded-md px-3 py-1.5 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:border-indigo-600 sm:text-sm"
              type="text"
              placeholder="email"
              // value={email}
              // onChange={(event) => setUsername(event.target.value)}
            />
            <label className="block text-sm font-medium text-gray-900">
              Name
            </label>
            <input
              className="block w-full rounded-md px-3 py-1.5 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:border-indigo-600 sm:text-sm"
              type="text"
              placeholder="Name"
              // value={email}
              // onChange={(event) => setUsername(event.target.value)}
            />
            <label className="block text-sm font-medium text-gray-900">
              Phone
            </label>
            <input
              className="block w-full rounded-md px-3 py-1.5 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:border-indigo-600 sm:text-sm"
              type="text"
              placeholder="Phone"
              // value={Phone}
              // onChange={(event) => setUsername(event.target.value)}
            />
            <label className="block text-sm font-medium text-gray-900">
              Message
            </label>
            <input
              className="block w-full rounded-md px-3 py-1.5 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:border-indigo-600 sm:text-sm"
              type="text"
              placeholder="message"
              //value={message}
              // onChange={(event) => setUsername(event.target.value)}
            />
            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
              <button
                type="submit"
                className="w-full rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-indigo-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
