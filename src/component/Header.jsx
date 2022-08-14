import Link from "next/link";

export const Header = () => {
  return (
    <header className="p-4 mb-8 bg-teal-400">
      <Link href="/">
        <a className="no-underline">
          <h1 className="text-white">TODO</h1>
        </a>
      </Link>
      <nav>
        <Link href="/">
          <a className="no-underline text-white hover:text-gray-500">Home</a>
        </Link>
        <Link href="/completed">
          <a className="no-underline text-white hover:text-gray-500 ml-4">
            完了済一覧
          </a>
        </Link>
      </nav>
    </header>
  );
};
