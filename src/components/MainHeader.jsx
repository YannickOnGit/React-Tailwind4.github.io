import Icon from "./Icon"; // Import the Icon component
import LogoMark from './LogoMark'

const MainHeader = () => {
  return (
    <>
      <header className="bg-sky-950 text-white h-12 flex flex-row w-full" aria-label="Main navigation">
        <div className="flex-none content-center">
          <a href="#" className="px-6 flex flex-row w-56" aria-label="Go to homepage">
            <LogoMark width="20" />
            <h1 className="pl-2 text-xs font-semibold content-center">
              Cloud Orchestrator 4.0
            </h1>
          </a>
        </div>

        <nav className="grow h-full mx-6 content-end" aria-label="Primary navigation">
          <ul className="flex flex-row space-x-3 content-center h-full text-sm">
            <li className="content-center">
              <a href="#" aria-label="Home">
                <Icon name="home" size={18} color="none" strokeColor="" className="stroke-white" />
              </a>
            </li>
            <li className="content-center">
              <Icon name="chevron-right" size={20} color="none" strokeColor="" className="stroke-gray-500" />
            </li>
            <li className="content-center text-sm">
              <p aria-label="Current Page">
                <span>Menu Item 1</span>
              </p>
            </li>
            <li className="content-center">
              <Icon name="chevron-right" size={20} color="none" strokeColor="" className="stroke-gray-500" />
            </li>
            <li className="content-center text-sm">
              <p aria-label="Current Page">
                <span>Menu Item 2</span>
              </p>
            </li>
            <li className="content-center">
              <Icon name="chevron-right" size={20} color="none" strokeColor="" className="stroke-gray-500" />
            </li>
            <li className="content-center text-sm">
              <p aria-label="Current Page">
                <span>Menu Item 3</span>
              </p>
            </li>
          </ul>
        </nav>

        <div className="flex-none content-center">
          <button className="border-transparent mr-6 text-sm" aria-label="User profile">
            <img
              className="mr-2 logo-spin inline-block size-6 rounded-full ring-2"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="User profile picture"
            />
            Karoline Leavitt
          </button>
        </div>
      </header>
    </>
  );
};

export default MainHeader;
