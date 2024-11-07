"use client"

import MeetingTypeList from '@/components/MeetingTypeList';
import useGetCalls from "@/hooks/useGetCalls";

const Home = () => {
  const now = new Date();
  

  const { upcomingCalls } = useGetCalls();


  const upcomingCall = upcomingCalls
  .filter(call => call.state.startsAt && new Date(call.state.startsAt) > now)
  .sort((a, b) => new Date(a.state.startsAt!).getTime() - new Date(b.state.startsAt!).getTime())[0];

  

  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit'});
  const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now)
  
  const formattedDate = upcomingCall?.state?.startsAt
  ? new Date(upcomingCall.state.startsAt).toLocaleString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })
  : undefined;

  return (
   <section className="flex size-full flex-col gap-10 text-white">
    <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
      <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
        <div className="glassmorphism max-w-[270px] rounded py-2 text-left text-base">
          <h1 className="ml-3">Upcoming Meeting at : </h1>
          <h2 className="ml-3">{formattedDate} </h2>
        </div>
        
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
          <p className="text-lg  font-medium text-sky-1 lg:text-2xl">{date}</p>
        </div>
      </div>
    </div>
    <MeetingTypeList />
   </section>
  )
}

export default Home