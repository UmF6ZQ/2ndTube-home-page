import {
  ChevronDown,
  ChevronUp,
  Clapperboard,
  Home,
  Library,
  MonitorPlay,
} from "lucide-react";
import { Children, ElementType, useState } from "react";
import { Button, buttonStyles } from "../components/Button";
import { twMerge } from "tailwind-merge";

export function Sidebar() {
  return (
    <div>
      <aside className="sticky top-0 overflow-y-auto scrollbar-hidden flex flex-col ml-1 lg:hidden">
        <SmallSidebarItem Icon={Home} title="Home" url="/" />
        <SmallSidebarItem Icon={MonitorPlay} title="Shorts" url="/shorts" />
        <SmallSidebarItem
          Icon={Clapperboard}
          title="Subscription"
          url="/subscription"
        />
        <SmallSidebarItem Icon={Library} title="Library" url="library" />
      </aside>
      <aside className="w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pd-4 flex-col gap-2 px-2">
        <LargeSidebarSection visibleItemCount={1}>
          <LargeSidebarItem isActive Icon={Home} title="Home" url="/" />
          <LargeSidebarItem isActive Icon={Home} title="Home" url="/" />
          <LargeSidebarItem isActive Icon={Home} title="Home" url="/" />
          <LargeSidebarItem isActive Icon={Home} title="Home" url="/" />
        </LargeSidebarSection>
      </aside>
    </div>
  );
}

type SmallSidebarItemProps = {
  Icon: ElementType;
  title: string;
  url: string;
};

function SmallSidebarItem({ Icon, title, url }: SmallSidebarItemProps) {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        "py-3 px-0 flex flex-col items-center rounded-lg gap-2"
      )}
    >
      <Icon className="w-5 h-5 " />
      <div className="text-sm">{title}</div>
    </a>
  );
}
type LargeSidebarSectionProps = {
  children: React.ReactNode;
  title?: string;
  visibleItemCount?: number;
};

function LargeSidebarSection({
  children,
  title,
  visibleItemCount = Number.POSITIVE_INFINITY,
}: LargeSidebarSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const childrenArray = Children.toArray(children).flat();
  const showExpandButton = childrenArray.length > visibleItemCount;
  const visibleChildren = isExpanded
    ? childrenArray
    : childrenArray.slice(0, visibleItemCount);
  const ButtonIcon = isExpanded ? ChevronUp : ChevronDown;
  return (
    <>
      {title && <div className="ml-4 mt-2 text-lg mb-1">{title}</div>}
      {visibleChildren}
      {showExpandButton && (
        <Button
          onClick={() => setIsExpanded((e) => !e)}
          variant={"ghost"}
          className="w-full flex items-center rounded-lg gap-4 p-3"
        >
          <ButtonIcon className="w-6 h-6"></ButtonIcon>
          <div className="text-sm pl-3">
            {isExpanded ? "Show Less" : "Show More"}
          </div>
        </Button>
      )}
    </>
  );
}
type LargeSidebarItemProps = {
  Icon: ElementType;
  title: string;
  url: string;
  isActive?: boolean;
};
function LargeSidebarItem({
  Icon,
  title,
  url,
  isActive,
}: LargeSidebarItemProps) {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        `w-full flex items-center rounded-lg gap-4 p-3  ${
          isActive ? "font-bold bg-neutral-100 hover:bg-secondary" : undefined
        }`
      )}
    >
      <Icon className="w-6 h-6"></Icon>
      <div className={`pl-3 whitespace-nowrap overflow-hidden text-ellipsis`}>
        {title}
      </div>
    </a>
  );
}
