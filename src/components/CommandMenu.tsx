<Command.Group heading="Navigation" className="text-neutral-500 px-2 py-1 uppercase text-[10px] font-mono">
  <Command.Item
    onSelect={() => {
      window.open(PORTFOLIO_DATA.projects[0].liveUrl, "_blank");
      setOpen(false);
    }}
    className="flex items-center justify-between px-3 py-2 rounded-md text-neutral-300 hover:bg-neutral-800 hover:text-white cursor-pointer"
  >
    <span>HomeoAI Live App</span>
    <span className="font-mono text-[10px] text-emerald-400">800+ Doctors Live</span>
  </Command.Item>
  <Command.Item
    onSelect={() => {
      document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }}
    className="flex items-center justify-between px-3 py-2 rounded-md text-neutral-300 hover:bg-neutral-800 hover:text-white cursor-pointer"
  >
    <span>Work History</span>
    <span className="font-mono text-[10px] text-neutral-500">HomeoAI · DevRev · UserExperior</span>
  </Command.Item>
  <Command.Item
    onSelect={() => {
      document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }}
    className="flex items-center justify-between px-3 py-2 rounded-md text-neutral-300 hover:bg-neutral-800 hover:text-white cursor-pointer"
  >
    <span>Technical Expertise</span>
    <span className="font-mono text-[10px] text-neutral-500">pgvector · RAG · Systems</span>
  </Command.Item>
</Command.Group>
