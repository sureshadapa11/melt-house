import DripEdge from "./DripEdge";
import Heading from "./Heading";

type MenuItem = {
  id: string;
  name: string;
  note: string;
  price: number;
  tag?: string;
  fill: string;
  ink: string;
  image: string;
};

export type MenuShelfData = {
  eyebrow: string;
  heading: string[];
  text: string;
  unit: string;
  items: MenuItem[];
};

export default function MenuShelf({ id, menu }: { id: string; menu: MenuShelfData }) {
  return (
    <section
      id={id}
      aria-label={menu.eyebrow}
      className="relative z-[1] pt-[clamp(110px,13vw,200px)] pb-[clamp(80px,10vw,150px)]"
      data-record-label={menu.eyebrow}
      data-record-time="1.5"
    >
      <DripEdge color="var(--bg)" layout={1} />
      <div className="container-x">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">{menu.eyebrow}</p>
            <Heading lines={menu.heading} className="mt-5 text-[clamp(48px,6vw,104px)]" />
          </div>
          <p className="max-w-[340px] text-[17px] leading-relaxed text-muted">{menu.text}</p>
        </div>

        <div data-reveal="stagger" className="mt-12 grid grid-cols-2 gap-x-3 gap-y-5 md:mt-16 lg:grid-cols-3 lg:gap-7">
          {menu.items.map((item) => (
            <article
              key={item.id}
              className="capsule group relative flex flex-col pt-[9%] transition-transform duration-500 hover:-translate-y-2"
              style={{ background: item.fill, color: item.ink }}
              data-cursor="Add"
            >
              <div className="relative mx-auto w-[70%]">
                <img
                  src={item.image}
                  alt={item.name}
                  width={1000}
                  height={1000}
                  loading="lazy"
                  className="aspect-square w-full object-contain object-bottom drop-shadow-[0_22px_18px_rgba(60,10,30,.2)] transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-2 group-hover:-rotate-6"
                />
              </div>
              <div className="flex flex-1 flex-col px-4 pt-4 pb-4 md:px-7 md:pt-6 md:pb-7">
                {item.tag && <span className="tag self-start !text-[#2b1233]">{item.tag}</span>}
                <h3 className="font-display mt-3 text-[clamp(22px,2.3vw,36px)]">{item.name}</h3>
                <p className="mt-2 hidden text-[15px] leading-snug opacity-85 md:block">{item.note}</p>
                <div className="mt-auto flex items-center justify-between gap-2 pt-4 md:pt-6">
                  <span className="rounded-full bg-white px-3 py-2 text-[14px] font-extrabold text-[#2b1233] md:px-4 md:text-[16px]">
                    <span className="tnum">£{item.price.toFixed(2)}</span>{" "}
                    <span className="hidden font-bold text-muted sm:inline">{menu.unit}</span>
                  </span>
                  <button
                    aria-label={`Add ${item.name}`}
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent text-[22px] leading-none font-bold text-white shadow-[0_4px_0_var(--accent-deep)] transition-transform hover:translate-y-[2px] md:h-12 md:w-12"
                  >
                    +
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
