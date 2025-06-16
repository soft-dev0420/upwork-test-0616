import { Button } from "./ui/button";

const Dashboard = () => {
  return (
    <div>
      <div className="flex items-center justify-center mt-14 w-[calc(100vw-240px)] h-16 bg-white border-b border-[#F5F5F5]">
        <div className="mr-[11px] truncate max-w-[120px] text-sl text-semibold">Lorem ipsum</div>
        <div className="mr-[11px] text-sm text-[#B5B5B5]">(12)</div>
        <div className="mr-[615px] truncate max-w-[180px]  text-sm">Lorem ipsum dolar sit amet</div>
        <Button className="w-[138px] h-[38px] bg-black text-white text-sm font-semibold rounded-2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 10H10M10 10H15M10 10V15M10 10V5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          Lorem ipsum
        </Button>
      </div>
      <div className="flex items-center justify-center">
        <div className="mt-[49px] h-[411px] w-[1080px] bg-[#D9D9D9] rounded-[12px]"></div>
      </div>
    </div>

  )
};

export default Dashboard;