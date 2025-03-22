 {/*The big video container*/}
        <div className="w-full relative px-4 overflow-hidden h-[260 ] md:h-[400px]">

        <video src={props.post_value} autoPlay muted ref={videoElem} className="flex justify-center rounded-md overflow-hidden top-0 w-auto left-0 z-[-1] absolute h-full object-fill"></video>

        {/* The main video container */}
        <div className="w-full h-full rounded-md bg-[linear-gradient(rgba(23,23,24,0.49),transparent,rgba(23,23,24,0.49))]">

        {/* The top cont */}
        <div className="w-full flex justify-between py-2 px-3">
        {isMuted?<BiVolumeFull className='w-5 h-5 text-white' onClick={()=>toggleMute()}/>:<BiVolumeMute className='w-5 h-5 text-white' onClick={()=>toggleMute()}/>}
        <BiDotsVerticalRounded className='w-6 h-6 text-white'/>
        </div>

        {/* The player trigger */}
        <div className="w-full h-[80%] flex items-center justify-center">
        {playing?<BiPauseCircle className='w-10 h-10 text-white' onClick={()=>togglePlay()}/>:<BiPlayCircle className='w-10 h-10 text-white' onClick={()=>togglePlay()}/>}
        </div>
        
        </div>

        </div>