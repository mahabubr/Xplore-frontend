import "./Home.css";

const HomeViews = () => {
  return (
    <div className="mt-32 mb-20">
      <section className="w-4/5 mx-auto flex justify-between items-center">
        <div className="w-1/5 mr-auto">
          <h2 className="text-3xl font-light">Open Views</h2>
          <div className="h-1 bg-gray-300 w-10 mt-2"></div>
        </div>
        <div className="w-1/2">
          <p className="text-sm text-gray-500 font-normal my-4 leading-loose">
            Traveling opens up a world of possibilities, from experiencing
            diverse cultures to savoring exotic cuisines. It&apos;s a journey
            that enriches the soul and broadens one&apos;s perspective, leaving
            indelible memories in its wake.
          </p>
        </div>
        <div className="flex justify-center w-1/5 ml-auto">
          <div>
            <button className="bg-white text-gray-500 border border-gray-400 py-4 px-4 text-xs font-semibold flex justify-center items-center mr-3">
              <i data-feather="arrow-left" className="h-4"></i>
            </button>
          </div>
          <div>
            <button className="bg-blue-600 py-4 px-4 text-xs border border-blue-600 font-semibold text-white flex justify-center items-center shadow-xl">
              <i data-feather="arrow-right" className="h-4"></i>
            </button>
          </div>
        </div>{" "}
      </section>
      <section className="flex justify-between slideshow px-6 mt-4">
        <div className="card relative">
          <img
            src="https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&q=80&w=1560&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="absolute overlay-text w-full flex flex-col items-center">
            <p className="text-white text-xl tracking-tight">Waterfall</p>
            <p className="text-xs text-gray-500 font-semibold uppercase mt-1">
              43 Adventures
            </p>
          </div>
        </div>
        <div className="card relative">
          <img
            src="https://images.unsplash.com/photo-1504150558240-0b4fd8946624?auto=format&fit=crop&q=80&w=1528&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="absolute overlay-text w-full flex flex-col items-center">
            <p className="text-white text-xl tracking-tight">Waterfall</p>
            <p className="text-xs text-gray-500 font-semibold uppercase mt-1">
              43 Adventures
            </p>
          </div>
        </div>
        <div className="card relative">
          <img
            src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=80&w=1587&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="absolute overlay-text w-full flex flex-col items-center">
            <p className="text-white text-xl tracking-tight">Waterfall</p>
            <p className="text-xs text-gray-500 font-semibold uppercase mt-1">
              43 Adventures
            </p>
          </div>
        </div>
        <div className="card relative ">
          <img
            src="https://plus.unsplash.com/premium_photo-1664361480872-6416aab14696?auto=format&fit=crop&q=80&w=1587&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="absolute overlay-text w-full flex flex-col items-center">
            <p className="text-white text-xl tracking-tight">Waterfall</p>
            <p className="text-xs text-gray-500 font-semibold uppercase mt-1">
              43 Adventures
            </p>
          </div>
        </div>
      </section>
      <section className="mt-60">
        <div className="flex mx-auto justify-center">
          <div className="h-1 w-10 bg-gray-400 mr-4"></div>
          <div className="h-1 w-10 bg-gray-400 mr-4"></div>
          <div className="h-1 w-10 bg-blue-600 mr-4"></div>
          <div className="h-1 w-10 bg-gray-400 mr-4"></div>
          <div className="h-1 w-10 bg-gray-400"></div>
        </div>
      </section>
    </div>
  );
};

export default HomeViews;
