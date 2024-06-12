import React from 'react';
import PageHeader from '../component/PageHeader';
import PageFooter from '../component/PageFooter';

export default function Home(){
    return(
        <>
            <PageHeader/>
                <main>
                    <section>
                        <div class="inner">
                            <h2>메인 영역1</h2>
                        </div>
                    </section>       
                    <section>
                        <div class="inner">
                            <h2>메인 영역2</h2>
                        </div>
                    </section>       
                    <section>
                        <div class="inner">
                            <h2>메인 영역3</h2>
                        </div>
                    </section>       
                    <section>
                        <div class="inner">
                            <h2>메인 영역4</h2>
                        </div>
                    </section>       
                    <section>
                        <div class="inner">
                            <h2>메인 영역5</h2>
                        </div>
                    </section>       
                    <section>
                        <div class="inner">
                            <h2>메인 영역6</h2>
                        </div>
                    </section>   
                </main>    
            <PageFooter/>
        </>
    )
}