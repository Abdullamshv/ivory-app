export function Footer() {
  return (
    <footer className="w-full bg-gray-50 dark:bg-zinc-950 border-t border-gray-200 dark:border-zinc-800 p-6 mt-auto">
      <div className="max-w-7xl mx-auto text-center text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} IVORY Consultancy. All rights reserved.
      </div>
    </footer>
  );
}
