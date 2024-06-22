import React from 'react';
import PageHeader from '../component/Header';
import PageFooter from '../component/Footer';
import useStore from '../store/store';

export default function Home(){
  const isAsideVisible = useStore((state) => state.isAsideVisible);

    return(
        <>
            <PageHeader/>
              {isAsideVisible && <div className="asideDim"></div>}
                <main>
                    <section>
                        <div class="inner">
                            <ul className="">
                                <li>
                                    <a href="">
                                        <video src=""></video>
                                        <div className="title">
                                            <div className="profile_img"><img src="" alt="" /></div>
                                            <div className="info">
                                                <p>
                                                    <p></p>
                                                    <p></p>
                                                </p>
                                                <p className='channel_name'>멍플리 </p>
                                                <p className='view-details'></p>
                                            </div>
                                        </div>
                                        
                                    </a>

                                </li>
                            </ul>
                        </div>
                    </section>       
                </main>    
            <PageFooter/>
        </>
    )
}