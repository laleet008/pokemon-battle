import Image from 'next/image';
import heroImage from '../public/assets/hero.svg';

export default function Home() {
  return (
    <section className="py-8 grid grid-cols-2 justify-between items-center w-full mt-12">
      <div className="flex flex-col gap-8 items-start">
        <h2 className="text-secondary-color text-4xl font-semibold">
          Welcome to <br />{' '}
          <span className="text-6xl font-bold">Battle Pokemon</span>
        </h2>
        <p className="text-text-secondary max-w-lg">
          Battle Pokemon is a fun and engaging way to battle between pokemons,
          whether for casual play or move serious competition between the
          pokemons.
        </p>
        <button
          type="button"
          className="py-3 px-6 rounded-full text-lg border border-[#9ACDFF] text-[#9ACDFF]"
        >
          Start Battle
        </button>
      </div>
      <div className="flex justify-end">
        <Image
          src={heroImage}
          alt="hero-image"
          height={300}
          width={500}
          style={{ animation: 'bounce 1s infinite' }}
          className=" "
        />
      </div>
    </section>
  );
}
