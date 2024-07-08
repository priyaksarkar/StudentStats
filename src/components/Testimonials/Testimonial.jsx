import React, {useRef} from 'react'
import './Testimonial.css'
// import user_1 from '../src/assets/kartik.png'
// import user_2 from '../src/assets/lisha.jpg'



const Testimonial = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = () => {
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = () => {
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='testimonials'>
        <img src='../src/assets/icons8-forward-72.png' alt="" className='next-btn' onClick=
        {slideForward}/>
        <img src='../src/assets/icons8-back-72.png' alt="" className='back-btn' onClick=
        {slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src="../src/assets/kartik.png" alt="" />
                            <div>
                                <h3>Kartik Gupta</h3>
                                <span>India, Chandigarh</span>
                            </div>
                        </div>
                        <p>Worked on backend side of StudentStats. Hosting the site, 
                        managing the databases, and proper system monitoring 
                        was achieved through using MySQL and using HEIDI SQL.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src="../src/assets/priyak.png" alt="" />
                            <div>
                                <h3>Priyak Sarkar</h3>
                                <span>India, West Bengal</span>
                            </div>
                        </div>
                        <p>Worked on frontend side of StudentStats. Hosted the main home
                        page. Managing proper layout, and easily readable content and most
                        importantly a clean look towards StudentStats. Used CSS, ReactJs and HTML.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src="../src/assets/lisha.jpg" alt="" />
                            <div>
                                <h3>Lisha S.</h3>
                                <span>India, Bengaluru</span>
                            </div>
                        </div>
                        <p>Worked on backend side of StudentStats. Hosting the site, 
                        managing the databases, and proper system monitoring 
                        was achieved through using MySQL and using HEIDI SQL.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}


export default Testimonial