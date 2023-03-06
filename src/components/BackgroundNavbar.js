export default function BackgroundNavbar(){
  return(
    <>
      <div
        className='hidden md:block absolute top-0 -z-10 bg-background-main bg-no-repeat bg-center bg-auto w-full h-screen'/>
      {/*Bg-Nav_Mob*/}
      <div
        className='inline md:hidden absolute -top-56 -z-10 bg-background-nav bg-no-repeat bg-center bg-auto w-full h-screen'/>
    </>
  )
}