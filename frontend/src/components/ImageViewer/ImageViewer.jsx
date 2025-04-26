import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {showImageViewer} from "../../features/modelSlice"

const ImageViewer = () => {

    const shower = useSelector((state)=>state.models.show_image_viewer);

    const image_url = useSelector((state)=>state.posts.current_post_image);

    const dispatch = useDispatch()

  return (
    <div className={`w-full h-screen ${shower?`block`:`hidden`} bg-[#000000f8] fixed top-0 z-[200]`}>

        <div className="w-full flex justify-between items-center h-[60px] px-6">
            <div>
                <h3 className="text-white">Image Viewer</h3>
            </div>
            <div>
                <h3 className="text-white cursor-pointer" onClick={()=>dispatch(showImageViewer(false))}>CLOSE</h3>
            </div>
        </div>
        {/* end of the top bar */}

        {/* the image container */}
        <div className="w-full flex items-center justify-center h-[80%]">
        <img src={image_url} className="w-full md:w-[40%] max-h-[380px] object-cover"/>
        </div>
      
    </div>
  )
}

export default ImageViewer;
