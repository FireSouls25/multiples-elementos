export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow bg-gray-100 p-4 lg:p-8">
        <main className="grid grid-cols-1 grid-cols-4 gap-8 max-w-screen-xl mx-auto">
          <section className="col-span-3 grid grid-cols-1 gap-8">
            <article className="bg-white rounded-2xl shadow-md p-6 flex flex-col flex-row items-center">
              <figure className="w-full lg:w-1/3 h-auto mb-6 lg:mb-0 lg:mr-6">
                <img
                  src="/lamp.webp"
                  alt="Modern Lamp"
                  className="w-full h-full object-cover rounded-xl"
                />
              </figure>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Green plants are going to Extinct about 500 times faster than
                  they should, Study finds
                </h2>
                <p className="text-gray-500 text-sm mb-6">
                  If you are the sort of person who just can not keep a plant
                  alive, you are not alone according to a new study published
                  June 10 in the journal Nature..
                </p>
                <footer className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <figure className="w-10 h-10 mr-3">
                      <img
                        src="/alexander-avatar.webp"
                        alt="Alexander Parkinson"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </figure>
                    <div>
                      <address className="font-semibold text-gray-800 not-italic">
                        Alexander Parkinson
                      </address>
                      <time dateTime="2019-06-20" className="text-gray-400">
                        Jun 20, 2019
                      </time>
                    </div>
                  </div>
                  <button
                    aria-label="Share this article"
                    className="text-gray-400 hover:text-blue-600"
                  >
                    <img
                      src="/share-icon.svg"
                      alt="Share"
                      className="w-5 h-5"
                    />
                  </button>
                </footer>
              </div>
            </article>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <article className="bg-white rounded-2xl shadow-md p-6 flex flex-col">
                <figure className="w-full h-48 mb-6">
                  <img
                    src="/coffee.webp"
                    alt="A cup of coffee"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </figure>
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex-grow">
                  How to make the perfect morning coffee, according to the
                  Science
                </h2>
                <footer className="flex items-center text-sm">
                  <figure className="w-10 h-10 mr-3">
                    <img
                      src="/tara-avatar.webp"
                      alt="Author: Tara Gibson"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </figure>
                  <div>
                    <address className="font-semibold text-gray-800 not-italic">
                      Tara Gibson
                    </address>
                    <time dateTime="2019-07-13" className="text-gray-400">
                      Jul 13, 2019
                    </time>
                  </div>
                </footer>
              </article>

              <div className="flex flex-col gap-8">
                <section className="bg-white rounded-2xl shadow-md p-6">
                  <form className="flex items-center bg-gray-100 rounded-lg mb-4">
                    <input
                      type="search"
                      placeholder="Search for articles"
                      className="flex-1 p-3 bg-transparent focus:outline-none text-gray-700"
                    />
                    <button
                      type="submit"
                      aria-label="Search"
                      className="bg-blue-600 text-white p-3 rounded-lg m-1 hover:bg-blue-700"
                    >
                      <img
                        src="/search-icon.svg"
                        alt="Search Icon"
                        className="w-6 h-6"
                      />
                    </button>
                  </form>
                  <nav aria-label="Article Tags">
                    <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                      <li>
                        <a
                          href="#"
                          className="text-gray-500 font-semibold hover:text-blue-600"
                        >
                          #Politics
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-500 font-semibold hover:text-blue-600"
                        >
                          #Science
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-500 font-semibold hover:text-blue-600"
                        >
                          #Movies
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-500 font-semibold hover:text-blue-600"
                        >
                          #Technology
                        </a>
                      </li>
                    </ul>
                  </nav>
                </section>

                <article className="bg-white rounded-2xl shadow-md p-6 flex flex-col lg:flex-row items-center text-center lg:text-left">
                  <figure className="w-28 h-28 mb-4 lg:mb-0 lg:mr-6 flex-shrink-0">
                    <img
                      src="/alex-avatar.webp"
                      alt="Alex Morrison"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </figure>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800">
                      Alex Morrison
                    </h3>
                    <p className="text-sm text-gray-400 mb-4">
                      Senior Journalist
                    </p>
                    <div className="flex justify-center lg:justify-start gap-6 text-center mb-4">
                      <div>
                        <p className="font-bold text-lg text-gray-800">34</p>
                        <p className="text-xs text-gray-400">Articles</p>
                      </div>
                      <div>
                        <p className="font-bold text-lg text-gray-800">980</p>
                        <p className="text-xs text-gray-400">Followers</p>
                      </div>
                      <div>
                        <p className="font-bold text-lg text-gray-800">8.9</p>
                        <p className="text-xs text-gray-400">Rating</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg font-semibold hover:bg-gray-300">
                        Chat
                      </button>
                      <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700">
                        Follow
                      </button>
                    </div>
                  </div>
                </article>
              </div>
            </section>
          </section>

          <aside className="flex flex-col gap-8">
            <nav className="bg-white rounded-2xl shadow-md p-6">
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="flex items-center text-gray-600 font-semibold hover:text-blue-600"
                  >
                    <img
                      src="/global.svg"
                      alt="Global"
                      className="w-6 h-6 mr-4"
                    />
                    Global
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-gray-600 font-semibold hover:text-blue-600"
                  >
                    <img
                      src="/business.svg"
                      alt="Business"
                      className="w-6 h-6 mr-4"
                    />
                    Business
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-gray-600 font-semibold hover:text-blue-600"
                  >
                    <img
                      src="/entertainment.svg"
                      alt="Entertainment"
                      className="w-6 h-6 mr-4"
                    />
                    Entertainment
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-blue-600 font-semibold bg-blue-100 rounded-lg p-2 -ml-2"
                  >
                    <img
                      src="/sports.svg"
                      alt="Sports"
                      className="w-6 h-6 mr-3"
                    />
                    Sports
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-gray-600 font-semibold hover:text-blue-600"
                  >
                    <img
                      src="/health.svg"
                      alt="Health"
                      className="w-6 h-6 mr-4"
                    />
                    Health
                  </a>
                </li>
              </ul>
            </nav>

            <article className="bg-white rounded-2xl shadow-md p-4 flex items-center">
              <figure className="w-20 h-20 mr-4 flex-shrink-0">
                <img
                  src="/building.webp"
                  alt="Building"
                  className="w-full h-full object-cover rounded-lg"
                />
              </figure>
              <div>
                <h3 className="font-bold text-gray-800">
                  An Inspiring Short Film
                </h3>
                <p className="text-sm text-gray-400 flex items-center">
                  <img
                    src="/eye-icon.svg"
                    alt="Views"
                    className="w-4 h-4 mr-2"
                  />
                  80,989
                </p>
              </div>
            </article>

            <nav
              aria-label="Pagination"
              className="flex justify-center items-center gap-4"
            >
              <button
                aria-label="Previous"
                className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:bg-gray-200 text-2xl"
              >
                &lt;
              </button>
              <button
                aria-label="Next"
                className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:bg-gray-200 text-2xl"
              >
                &gt;
              </button>
            </nav>

            <nav
              aria-label="User Tags"
              className="bg-white rounded-2xl shadow-md p-6"
            >
              <ul className="flex flex-wrap gap-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300"
                  >
                    Donald Trump
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300"
                  >
                    USA
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300"
                  >
                    Politics
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700"
                  >
                    2020
                  </a>
                </li>
              </ul>
            </nav>
          </aside>
        </main>
      </div>
      <footer className="bg-black p-4">
        <div className="max-w-screen-xl mx-auto"></div>
      </footer>
    </div>
  );
}
