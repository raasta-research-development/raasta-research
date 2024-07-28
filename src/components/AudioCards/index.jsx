import Image from "next/image";

export default function AudioCards() {
  return (
    <>
      <main className="grid place-items-center min-h-screen bg-white">
        <div>
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="bg-[#c9d08c] shadow-lg rounded p-3">
                <div className="group relative">
                  <Image
                    className="w-full h-48 object-cover rounded"
                    src={`/cards.jpg`}
                    alt=""
                    width={500}
                    height={300}
                    layout="responsive"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white text-xs text-center px-4 mb-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Excepturi atque repellat eaque ab, nam, sequi neque
                      accusamus nisi cupiditate debitis incidunt perferendis
                      odit eum tempore fugit corrupti, facilis itaque quaerat.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatum magnam labore sunt, cum architecto, maiores
                      culpa optio voluptatibus, at officiis nobis vel dicta.
                      Autem dolor dolores fugit, illo quod accusantium. Lorem
                      ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div className="flex justify-evenly w-full">
                      <button className="hover:scale-110 text-white transition">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-heart"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg>
                      </button>
                      <button className="hover:scale-110 text-white transition">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          fill="currentColor"
                          className="bi bi-play-circle-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                        </svg>
                      </button>
                      <button className="hover:scale-110 text-white transition">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-three-dots"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-black text-lg font-semibold">
                    {index % 3 === 0
                      ? "Epoch"
                      : index % 3 === 1
                      ? "Awake"
                      : "Dive"}
                  </h3>
                  <p className="text-gray-400 font-semibold">Tycho</p>
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}
