import { ChevronDown, ChevronsUpDown } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuBadge,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu"

// Menu items.
const items = [
    {
        title: "Home",
        url: "#",
        icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.33333 9.54352V14.0001C3.33333 14.9336 3.33333 15.4006 3.51499 15.7571C3.67478 16.0707 3.92956 16.3255 4.24316 16.4853C4.59934 16.6667 5.06583 16.6667 5.99743 16.6667H14.0026C14.9342 16.6667 15.4 16.6667 15.7562 16.4853C16.0698 16.3255 16.3254 16.0707 16.4852 15.7571C16.6667 15.401 16.6667 14.9346 16.6667 14.003V9.54352C16.6667 9.09824 16.6663 8.87548 16.6121 8.66828C16.5642 8.48466 16.4854 8.31089 16.3788 8.15387C16.2585 7.97668 16.0913 7.82974 15.7562 7.53652L11.7562 4.03652C11.134 3.49212 10.8229 3.22005 10.4728 3.11652C10.1643 3.02529 9.83551 3.02529 9.52702 3.11652C9.17718 3.02529 8.84839 3.02529 8.5399 3.11652C8.18976 3.22005 7.87866 3.49212 7.25646 4.03652L3.25646 7.53652C2.92136 7.82974 2.75413 7.97668 2.63383 8.15387C2.52723 8.31089 2.44841 8.48466 2.40051 8.66828C2.34631 8.87548 2.33333 9.09824 2.33333 9.54352Z" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        ,
    },
    {
        title: "Chats",
        url: "#",
        number: 32,
        icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.25814 16.5015C7.35938 17.1366 8.63711 17.5 9.9997 17.5C14.1418 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 11.3626 2.86337 12.6403 3.49849 13.7416L3.50095 13.7458C3.56207 13.8518 3.59288 13.9052 3.60684 13.9557C3.62001 14.0033 3.62368 14.0462 3.62031 14.0955C3.61669 14.1484 3.59884 14.2034 3.56224 14.3132L2.92155 16.2352L2.92074 16.2377C2.78557 16.6433 2.71798 16.846 2.76615 16.9811C2.80816 17.0989 2.9014 17.1919 3.01921 17.2339C3.15401 17.282 3.35587 17.2147 3.75962 17.0801L3.76465 17.0783L5.68671 16.4376C5.79614 16.4011 5.85178 16.3826 5.90466 16.379C5.95396 16.3756 5.99648 16.3801 6.04411 16.3932C6.09474 16.4072 6.1482 16.4381 6.2547 16.4995L6.25814 16.5015Z" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>,
        items: [
            {
                title: 'Unassigned',
                number: 20
            },
            {
                title: 'Assigned to me',
                number: 12
            },
            {
                title: 'Unread',
                number: 32
            },
            {
                title: 'Trash',
                number: -1
            },
        ]
    },
    {
        title: "Central",
        url: "#",
        number: 32,
        icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        </svg>,

        items: [
            {
                title: 'Unassigned',
                number: 20
            },
            {
                title: 'Assigned to me',
                number: 12
            },
            {
                title: 'Unread',
                number: 32
            },
            {
                title: 'Trash',
                number: -1
            },
        ]
    },
    {
        title: "Test inbox",
        url: "#",
        number: 0,
        icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        </svg>,
    }
]

export function AppSidebar() {
    return (
        <Sidebar className="border-none m-0">
            <SidebarHeader className="m-3 p-0 mt-4 mr-2">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <div className="flex bg-white rounded-[12px] h-16 items-center">
                            <div className="w-9 h-9 ml-2 rounded-full flex items-center justify-center text-xs bg-[#D98DF0]">LI</div>
                            <div className="flex flex-col ml-3">
                                <p className="text-sm text-black font-semibold">Lorem ipsum</p>
                                <p className="text-xs text-[#B5B5B5] text-left">Pro plan</p>
                            </div>
                            <ChevronsUpDown className="opacity-50 ml-auto mr-[6px]" />
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent side="right" align="start">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarHeader>
            <SidebarContent className="ml-1">
                <SidebarGroup>
                    <SidebarGroupContent className="gap-0">
                        <SidebarMenu className="gap-0">
                            {items.map((item, index) => (
                                <Collapsible key={item.title} defaultOpen={index === 2} className="group/collapsible">
                                    <SidebarMenuItem>
                                        <CollapsibleTrigger asChild>
                                            <SidebarMenuButton className="rounded-[12px] bg-white h-[42px] flex text-sm items-center">
                                                {item.icon}
                                                {item.title}
                                                {
                                                    (item.number!==undefined && item?.number>=0) && <SidebarMenuBadge className="bg-[#D98DF0] text-xs mr-8 w-[26px] h-[22px] rounded-full font-semibold">{item.number}</SidebarMenuBadge>
                                                }
                                                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                                            </SidebarMenuButton>
                                        </CollapsibleTrigger>
                                        <CollapsibleContent className="bg-red rounded-12 gap-0">
                                            {item?.items && (
                                                <SidebarMenuSub>
                                                    {item.items.map((subitem) => (
                                                        <SidebarMenuSubItem key={subitem.title}>
                                                            <SidebarMenuSubButton className="rounded-[12px] h-[42px] flex">
                                                                {subitem.number >= 0 && <SidebarMenuBadge className="bg-[#D3D3D3] text-xs mr-2 w-[26px] h-[22px] rounded-full font-semibold">{subitem.number}</SidebarMenuBadge>}
                                                                {subitem.title}
                                                            </SidebarMenuSubButton>
                                                        </SidebarMenuSubItem>
                                                    ))}
                                                </SidebarMenuSub>
                                            )}
                                        </CollapsibleContent>
                                    </SidebarMenuItem>
                                </Collapsible>
                            ))}
                            <SidebarMenuItem>
                                <SidebarMenuButton className="rounded-[12px] h-[42px] flex items-center text-[#B5B5B5]">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 10H10M10 10H15M10 10V15M10 10V5" stroke="#B5B5B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    Add New Box
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton className="rounded-[12px] bg-white h-[42px] flex items-center">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 11.25L12.5 13.75M12.5 6.25L7.5 8.75M15 17.5C13.6193 17.5 12.5 16.3807 12.5 15C12.5 13.6193 13.6193 12.5 15 12.5C16.3807 12.5 17.5 13.6193 17.5 15C17.5 16.3807 16.3807 17.5 15 17.5ZM5 12.5C3.61929 12.5 2.5 11.3807 2.5 10C2.5 8.61929 3.61929 7.5 5 7.5C6.38071 7.5 7.5 8.61929 7.5 10C7.5 11.3807 6.38071 12.5 5 12.5ZM15 7.5C13.6193 7.5 12.5 6.38071 12.5 5C12.5 3.61929 13.6193 2.5 15 2.5C16.3807 2.5 17.5 3.61929 17.5 5C17.5 6.38071 16.3807 7.5 15 7.5Z" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    Automation
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <Collapsible className="group/collapsible">
                                <SidebarMenuItem>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton className="rounded-[12px] bg-white h-[42px] flex items-center">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.5 16.6667C17.5 15.2153 16.1087 13.9806 14.1667 13.523M12.5 16.6667C12.5 14.8258 10.2614 13.3334 7.5 13.3334C4.73858 13.3334 2.5 14.8258 2.5 16.6667M12.5 10.8334C14.3409 10.8334 15.8333 9.34103 15.8333 7.50008C15.8333 5.65913 14.3409 4.16675 12.5 4.16675M7.5 10.8334C5.65905 10.8334 4.16667 9.34103 4.16667 7.50008C4.16667 5.65913 5.65905 4.16675 7.5 4.16675C9.34095 4.16675 10.8333 5.65913 10.8333 7.50008C10.8333 9.34103 9.34095 10.8334 7.5 10.8334Z" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            Contacts
                                            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                </SidebarMenuItem>
                            </Collapsible>
                            <Collapsible className="group/collapsible">
                                <SidebarMenuItem>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton className="rounded-[12px] bg-white h-[42px] flex items-center">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.5898 11.4104L12.6283 7.37191M16.7594 4.90731L13.3505 15.9861C13.0451 16.979 12.8922 17.4757 12.6287 17.6403C12.4002 17.7831 12.1172 17.807 11.8683 17.7037C11.5813 17.5846 11.3483 17.1195 10.8836 16.1901L8.72449 11.8718C8.65074 11.7243 8.61383 11.6509 8.56457 11.587C8.52086 11.5303 8.47042 11.4792 8.41371 11.4355C8.35126 11.3873 8.27905 11.3512 8.13814 11.2808L3.80994 9.1167C2.88051 8.65199 2.41576 8.41942 2.29667 8.13241C2.19339 7.8835 2.21694 7.60027 2.35974 7.37173C2.5244 7.1082 3.02103 6.9551 4.0142 6.64951L15.093 3.24064C15.8738 3.0004 16.2644 2.88037 16.5281 2.97719C16.7578 3.06152 16.9389 3.24245 17.0233 3.47217C17.12 3.73577 16.9999 4.12614 16.7599 4.90616L16.7594 4.90731Z" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            Campaigns
                                            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                </SidebarMenuItem>
                            </Collapsible>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="m-3 p-0 mt-4 mr-2 mb-[25px]">
                <SidebarGroup className="gap-0 m-0 p-0">
                    <SidebarMenu className="gap-0 p-0">
                        <SidebarMenuItem className="rounded-[12px] bg-white h-[42px] flex items-center">
                            <SidebarMenuButton>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.6666 5.83333H14.8739C14.4593 5.83333 14.1667 5.41459 14.1667 5C14.1667 3.61929 13.0474 2.5 11.6667 2.5C10.286 2.5 9.16667 3.61929 9.16667 5C9.16667 5.41459 8.87404 5.83333 8.45945 5.83333H6.66667C6.20643 5.83333 5.83333 6.20643 5.83333 6.66667V8.45945C5.83333 8.87404 5.41459 9.16667 5 9.16667C3.61929 9.16667 2.5 10.286 2.5 11.6667C2.5 13.0474 3.61929 14.1667 5 14.1667C5.41459 14.1667 5.83333 14.4593 5.83333 14.8739V16.6667C5.83333 17.1269 6.20643 17.5 6.66667 17.5L16.6667 17.5C17.1269 17.5 17.5 17.1269 17.5 16.6666V14.8739C17.5 14.4593 17.0813 14.1667 16.6667 14.1667C15.286 14.1667 14.1667 13.0474 14.1667 11.6667C14.1667 10.286 15.286 9.16667 16.6667 9.16667C17.0813 9.16667 17.5 8.87404 17.5 8.45945L17.5 6.66667C17.5 6.20643 17.1269 5.83333 16.6666 5.83333Z" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Integrations
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem className="rounded-[12px] bg-white h-[42px] flex items-center">
                            <SidebarMenuButton>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.9583 7.43577L16.6531 7.266C16.6057 7.23964 16.5824 7.22641 16.5595 7.2127C16.332 7.07638 16.1401 6.88803 16.0002 6.66269C15.9861 6.64002 15.9728 6.61624 15.9457 6.56925C15.9186 6.52231 15.9048 6.49853 15.8922 6.47499C15.7666 6.24055 15.6987 5.97929 15.6947 5.71338C15.6943 5.68665 15.6943 5.65934 15.6953 5.60504L15.7012 5.25065C15.7108 4.68355 15.7156 4.39911 15.6359 4.14385C15.5651 3.91711 15.4466 3.70827 15.2885 3.53104C15.1097 3.33071 14.8623 3.18779 14.3669 2.9023L13.9554 2.66517C13.4613 2.38048 13.2142 2.23809 12.9519 2.18381C12.7199 2.13578 12.4804 2.13801 12.2492 2.18991C11.9883 2.24849 11.7443 2.39459 11.2566 2.68663L11.2538 2.68796L10.9589 2.86451C10.9123 2.89242 10.8887 2.9065 10.8653 2.91949C10.6334 3.04842 10.3746 3.11971 10.1094 3.12822C10.0826 3.12908 10.0555 3.12908 10.0011 3.12908C9.94706 3.12908 9.91871 3.12908 9.89204 3.12822C9.62627 3.11968 9.36685 3.04799 9.13459 2.91853C9.11118 2.90548 9.08803 2.8913 9.04131 2.86325L8.74458 2.68511C8.25352 2.3903 8.00762 2.24268 7.74523 2.18381C7.51309 2.13172 7.27281 2.13028 7.03992 2.17892C6.77696 2.23385 6.5298 2.3773 6.03549 2.66419L6.03329 2.66517L5.6269 2.90103L5.6224 2.90378C5.13254 3.1881 4.88701 3.3306 4.70975 3.53012C4.55245 3.70717 4.43487 3.91568 4.3645 4.14181C4.28495 4.39743 4.28919 4.68247 4.29878 5.25225L4.30473 5.60613C4.30563 5.65972 4.3072 5.68635 4.30681 5.71271C4.30286 5.97916 4.23405 6.24095 4.10812 6.4758C4.09567 6.49902 4.08225 6.52225 4.05545 6.56864C4.02863 6.61507 4.01565 6.63816 4.00174 6.66056C3.86114 6.8871 3.66845 7.07655 3.43944 7.2131C3.41679 7.22661 3.39292 7.2396 3.34601 7.26559L3.04471 7.43257C2.5434 7.71037 2.29281 7.8494 2.11046 8.04725C1.94915 8.22227 1.82729 8.42987 1.75291 8.65597C1.66882 8.91156 1.66889 9.19815 1.6702 9.77129L1.67126 10.2397C1.67255 10.809 1.67433 11.0935 1.7586 11.3474C1.83316 11.5719 1.95412 11.7783 2.11453 11.9523C2.29585 12.1489 2.54395 12.2871 3.04145 12.5639L3.34007 12.73C3.39089 12.7582 3.41646 12.7722 3.44097 12.787C3.6679 12.9236 3.85908 13.1125 3.99848 13.3378C4.01354 13.3621 4.028 13.3874 4.05691 13.4379C4.08547 13.4878 4.10007 13.5127 4.11328 13.5377C4.23551 13.7691 4.30095 14.0262 4.30541 14.2879C4.30589 14.3162 4.30548 14.3448 4.30451 14.4022L4.29878 14.7418C4.28912 15.3136 4.28492 15.5998 4.36494 15.8561C4.43572 16.0828 4.55403 16.2916 4.71219 16.4689C4.89096 16.6692 5.13879 16.8121 5.63423 17.0975L6.04565 17.3346C6.53969 17.6193 6.78662 17.7615 7.04891 17.8158C7.28095 17.8638 7.52054 17.862 7.75174 17.8101C8.01305 17.7514 8.2579 17.6048 8.74702 17.3119L9.04187 17.1354C9.08852 17.1075 9.11214 17.0934 9.13551 17.0805C9.36741 16.9515 9.62603 16.8799 9.89123 16.8713C9.91795 16.8705 9.94514 16.8705 9.9995 16.8705C10.054 16.8705 10.0812 16.8705 10.1079 16.8714C10.3737 16.8799 10.6339 16.9518 10.8662 17.0813C10.8866 17.0927 10.9071 17.105 10.943 17.1266L11.2565 17.3147C11.7476 17.6096 11.993 17.7568 12.2554 17.8157C12.4875 17.8677 12.728 17.8699 12.9609 17.8212C13.2238 17.7663 13.4714 17.6226 13.9655 17.3358L14.378 17.0964C14.8682 16.8119 15.1139 16.6693 15.2913 16.4697C15.4486 16.2926 15.5663 16.0842 15.6367 15.8581C15.7156 15.6043 15.7109 15.3215 15.7014 14.7599L15.6953 14.3937C15.6944 14.3401 15.6943 14.3134 15.6946 14.2871C15.6986 14.0206 15.7663 13.7587 15.8922 13.5238C15.9046 13.5006 15.9182 13.4772 15.9449 13.431C15.9717 13.3845 15.9856 13.3614 15.9995 13.339C16.1401 13.1125 16.333 12.9228 16.562 12.7863C16.5843 12.7729 16.6074 12.7602 16.6532 12.7348L16.6547 12.7341L16.956 12.5671C17.4573 12.2893 17.7084 12.1501 17.8908 11.9523C18.0521 11.7773 18.1738 11.5699 18.2482 11.3438C18.3317 11.0898 18.3311 10.8048 18.3298 10.2384L18.3287 9.7599C18.3274 9.19059 18.3267 8.90616 18.2425 8.65231C18.1679 8.42773 18.0463 8.22134 17.8859 8.04737C17.7047 7.85092 17.4563 7.71271 16.9597 7.43648L16.9583 7.43577Z" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.66694 9.99997C6.66694 11.8409 8.15933 13.3333 10.0003 13.3333C11.8412 13.3333 13.3336 11.8409 13.3336 9.99997C13.3336 8.15902 11.8412 6.66664 10.0003 6.66664C8.15933 6.66664 6.66694 8.15902 6.66694 9.99997Z" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                                Settings
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarFooter>
        </Sidebar>
    )
}