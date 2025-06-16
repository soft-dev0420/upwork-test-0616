import { useState, useEffect } from 'react';
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from './ui/command';
import { Input } from '@/components/ui/input';
import { Button } from './ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger } from './ui/dropdown-menu';
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { Search } from 'lucide-react';

const HeadBar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    }
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-14 z-50 bg-black shadow">
      <div className="flex items-center h-full w-full">
        <div className="flex-1 flex items-center pl-4">
          <Button className="ml-[135px] w-[45px] h-[22px] rounded-[11px] border-0 bg-[#303030] text-[#B5B5B5] text-[12px] leading-[24px] tracking-normal">beta</Button>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="relative w-[540px]">
            <span className="absolute inset-y-0 left-0 flex items-center pl-[14px] pointer-events-none">
              <Search className="h-[18px] w-[18px] text-muted-foreground"/>
            </span>
            <Input
              type="search"
              placeholder="Search..."
              className="pl-[39px] pr-16 h-9 boder-[#404040] border rounded-[12px] w-[540px] text-[#B5B5B5]"
              onClick={() => setOpen(true)}
            />
            <span className="absolute inset-y-0 right-0 mr-[9px] flex items-center space-x-1 pointer-events-none">
              <kbd className="bg-[#404040] w-[22px] h-[22px] text-[#b3b3b3] rounded-[8px] text-xs flex items-center justify-center">⌘</kbd>
              <kbd className="bg-[#404040] w-[22px] h-[22px] text-[#b3b3b3] rounded-[8px] text-xs flex items-center justify-center">K</kbd>
            </span>
          </div>
        </div>

        <div className="flex-1 flex justify-end items-center pr-5">
          <Button className="bg-[#D98DF0] h-8 w-[123px] mr-4 p-0 text-black font-semibold rounded-2">
            Account plans
          </Button>
          <svg className="mr-[18px]" width="20" height="20" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5 14.1667V15C11.5 16.3808 10.3808 17.5 9.00004 17.5C7.61933 17.5 6.50004 16.3808 6.50004 15V14.1667M11.5 14.1667H6.50004M11.5 14.1667H14.4921C14.8109 14.1667 14.971 14.1667 15.1001 14.1232C15.3467 14.04 15.5396 13.8464 15.6228 13.5999C15.6665 13.4703 15.6665 13.3096 15.6665 12.9883C15.6665 12.8477 15.6663 12.7774 15.6553 12.7104C15.6345 12.5837 15.5854 12.4637 15.5105 12.3594C15.471 12.3043 15.4207 12.254 15.3216 12.1549L14.9969 11.8303C14.8922 11.7256 14.8334 11.5835 14.8334 11.4354V8.33337C14.8334 5.11171 12.2217 2.50003 9.00004 2.50004C5.77839 2.50005 3.16671 5.11172 3.16671 8.33337V11.4354C3.16671 11.5835 3.10774 11.7256 3.00301 11.8303L2.67843 12.1549C2.57902 12.2543 2.52924 12.3042 2.48962 12.3594C2.41475 12.4637 2.36516 12.5837 2.34437 12.7104C2.33337 12.7774 2.33337 12.8477 2.33337 12.9883C2.33337 13.3096 2.33337 13.4702 2.37708 13.5998C2.46025 13.8464 2.65404 14.04 2.90059 14.1232C3.02967 14.1667 3.18922 14.1667 3.508 14.1667H6.50004M14.0155 1.6781C15.1648 2.5442 16.0703 3.69318 16.6437 5.01316M3.98501 1.6781C2.83567 2.5442 1.93021 3.69318 1.35681 5.01316" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <Button className="text-white text-lg mr-[14px] p-0" variant="link">Support</Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-9 h-9 rounded-full">KC</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="start">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  Profile
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Billing
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Settings
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Keyboard shortcuts
                  <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>Email</DropdownMenuItem>
                      <DropdownMenuItem>Message</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>More...</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuItem>
                  New Team
                  <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>GitHub</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuItem disabled>API</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Log out
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      {/* Search Dialog */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  )
};

export default HeadBar;
