export const Introduction = () => {
  return (
    <section className="h-screen px-20 text-[#dfdad5] py-28 flex flex-col justify-between">
      <h1
        className="text-8xl font-semibold underline"
        style={{ fontFamily: "Playfair Display" }}
      >
        Introduction.
      </h1>
      <div>
        <h1 className="text-9xl font-semibold">Ngurah Arya Pratama</h1>
        <h2 className="text-3xl pt-8">
          - Fullstack Developer | Mobile Developer -
        </h2>
        <p className="text-xl pt-8">
          <span className="font-bold">Hi there!</span>👋 My name is Arya,
          I&apos;m a System Information student at Universitas BSI with a strong
          interest in mobile and web application development. I have gained
          valuable experience and received positive feedback in mobile app
          development, and I am also keen to expand my skills in fullstack
          development.
        </p>
        <div className="flex gap-10">
          <button
            className="border-[1px] rounded-md text-xl text-[#1a1a1a] font-semibold bg-[#dfdad5] px-4 py-2 mt-14"
            style={{ fontFamily: "Playfair Display" }}
          >
            DOWNLOAD CV
          </button>
          <button
            className="border-[1px] rounded-md text-xl border-[#dfdad5] font-semibold px-4 py-2 mt-14"
            style={{ fontFamily: "Playfair Display" }}
          >
            CONTACT ME
          </button>
        </div>
      </div>
    </section>
  );
};
