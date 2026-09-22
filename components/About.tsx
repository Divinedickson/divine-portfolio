export default function About() {
  return (
    <section id="about" className="border-y border-slate-200 bg-white py-18 sm:py-24">
      <div className="container-wide">
        <p className="eyebrow mb-4">Background & interests</p>
        <h2 className="section-heading">About Me<span className="text-blue-600">.</span></h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
          <article className="surface rounded-xl p-6 sm:p-8">
            <div className="flex items-center gap-4"><span aria-hidden="true" className="grid size-12 place-items-center rounded-lg bg-blue-600 font-extrabold text-white">DD</span><div><h3 className="text-lg font-bold">Divine Dickson-Uwakwe</h3><p className="text-sm font-semibold text-blue-700">Computer Science student</p></div></div>
            <p className="mt-6 max-w-2xl leading-7 text-slate-600">I work across software engineering, artificial intelligence, machine learning, full-stack development, and research. I’m interested in building useful systems and understanding how people and models learn from data.</p>
          </article>
          <article className="rounded-xl border border-blue-100 bg-[#f2f5ff] p-6 sm:p-8">
            <p className="eyebrow mb-5">Education</p>
            <h3 className="text-xl font-bold tracking-tight">B.S. Computer Science</h3>
            <p className="mt-2 font-semibold text-blue-700">William Paterson University</p>
            <p className="mt-5 leading-7 text-slate-600">A foundation in computing that informs my software projects and research.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
