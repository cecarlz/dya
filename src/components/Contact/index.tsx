const Contact = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-primary mb-6 text-3xl font-bold">Contact Us</h2>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="focus:border-primary w-full rounded border border-gray-300 px-4 py-2 focus:outline-none"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="focus:border-primary w-full rounded border border-gray-300 px-4 py-2 focus:outline-none"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="focus:border-primary w-full rounded border border-gray-300 px-4 py-2 focus:outline-none"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-primary hover:bg-primary-dark rounded px-6 py-2 font-semibold text-white transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
