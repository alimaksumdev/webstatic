export default function LinkButton({ link1 = "Mendaftar SMP", link2 = "Mendaftar SMA", href1 = "http://google.com", href2 = "http://google.com" }) {
  return (
    <>
      <div className="mx-1 columns-2 flex-col p-1">
        <div>
          <a href={href1} target="_blank" rel="noopener noreferrer" className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white hover:text-slate-100 no-underline font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400">{link1}</a>
        </div>
        <div>
        <a href={href2} target="_blank" rel="noopener noreferrer" className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white hover:text-slate-100 no-underline font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400">{link2}</a>
        </div>
      </div>
    </>
  );
}
