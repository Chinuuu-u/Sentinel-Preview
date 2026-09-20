import Eyebrow from "./Eyebrow";

export default function SectionHead({ eyebrow, title, children }) {
  return (
    <div className="reveal mb-12 max-w-[760px]">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 text-4xl font-extrabold leading-[1.02] tracking-[-.045em] sm:text-5xl md:text-[58px]">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-[var(--muted)] md:text-[17px]">
        {children}
      </p>
    </div>
  );
}
