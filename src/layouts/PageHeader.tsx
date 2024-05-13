import { Menu, Bell, Upload, User, Search, Mic, ArrowLeft } from "lucide-react";
import logo from "../assets/logo.png";
import { Button } from "../components/Button";
import { useState } from "react";
import { useSidebarContext } from "../contexts/SidebarContext";

export function PageHeader() {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);
  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <PageHeaderFirstSection hidden={showFullWidthSearch} />
      <form
        className={`flex-grow gap-4 justify-center ${
          showFullWidthSearch ? "flex" : "hidden sm:flex"
        }`}
      >
        {showFullWidthSearch && (
          <Button
            onClick={() => setShowFullWidthSearch(false)}
            variant={"ghost"}
            size={"icon"}
            className="flex-shrink-0"
          >
            <ArrowLeft />
          </Button>
        )}
        <div className="flex flex-grow max-w-[600px]">
          <input
            type="search"
            placeholder="Search"
            className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary focus:border-blue-500 py-1 px-4 outline-none text-lg w-full ml-8"
          ></input>
          <Button
            className="rounded-r-full py-2 px-4 border-secondary-border border border-l-0 flex"
            title="Search"
          >
            <Search></Search>
          </Button>
        </div>
        <Button
          type="button"
          size={"icon"}
          className="flex-shrink-0"
          title="Search with your voice"
        >
          <Mic />
        </Button>
      </form>

      <div
        className={`shrink-0 md:gap-2 ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}
      >
        <Button
          onClick={() => setShowFullWidthSearch(true)}
          variant={"ghost"}
          size={"icon"}
          className="sm:hidden"
          aria-label="Search"
          title="Search"
        >
          <Search />
        </Button>
        <Button
          variant={"ghost"}
          size={"icon"}
          className="sm:hidden"
          title="Search with your voice"
        >
          <Mic />
        </Button>
        <Button variant={"ghost"} size={"icon"} title="Create">
          <Upload />
        </Button>
        <Button variant={"ghost"} size={"icon"} title="Notifications">
          <Bell />
        </Button>
        <Button variant={"ghost"} size={"icon"}>
          <User />
        </Button>
      </div>
    </div>
  );
}
type PageHeaderFirstSectionProps = { hidden?: boolean };
export function PageHeaderFirstSection({
  hidden = false,
}: PageHeaderFirstSectionProps) {
  const { toggle } = useSidebarContext();

  return (
    <div
      className={`gap-4 items-center flex-shrink-0 ${
        hidden ? "hidden" : "flex"
      }`}
    >
      <Button onClick={toggle} variant="ghost" size="icon">
        <Menu />
      </Button>
      <a href="/">
        <img
          src={logo}
          className="h-6"
          alt="2ndTube Home"
          title="2ndTube Home"
        ></img>
      </a>
    </div>
  );
}
