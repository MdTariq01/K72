import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import Footer from "../components/footer/Footer";
import person1 from '../assets/Images/AgencyPostImg/person1.jpg'
import person2 from '../assets/Images/AgencyPostImg/person2.jpg'
import person3 from '../assets/Images/AgencyPostImg/person3.jpg'
import person5 from '../assets/Images/AgencyPostImg/person5.jpg'

function Agence() {
  gsap.registerPlugin(ScrollTrigger)
  const ImgDivRef = useRef(null)
  const ImgRef = useRef(null)
  const overlayImageRef = useRef(null)
  const overlayImgRef = useRef(null) 

  const imageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
  ]
  const imageArray2 = [
     person1,
    person2,
    person3,
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    person5,
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg' ,
    'https://k72.ca/images/teamMembers/joel_640X960_3.jpg?w=640&h=960&s=7fcd2cb26f9ffb7cb96fda9c5e707496' ,
    'https://k72.ca/images/teamMembers/SebR_640X960.jpg?w=640&h=960&s=81dfdbd4b658503ba32862901a1ea3ca' ,
    'https://k72.ca/images/teamMembers/Isa_640X960.jpg?w=640&h=960&s=5849bb72bb04be156ba2ff4048eb65b8'
  ] 

  useGSAP(() => {
    gsap.to(ImgDivRef.current , {
      scrollTrigger : {
        trigger : ImgDivRef.current ,
        start: 'top 24.5%', 
        end: 'top -70%' ,
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex;
          if(elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length)
          } else {
            imageIndex = imageArray.length-1
          }
          ImgRef.current.src = imageArray[imageIndex  ]
        }
      }
    })

    gsap.to(overlayImageRef.current , {
      scrollTrigger : {
        trigger : overlayImageRef.current ,
        start: 'top 0%', 
        end: 'top -110%' ,
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex;
          if(elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length)
          } else {
            imageIndex = imageArray.length-1
          }
          if (overlayImgRef.current) {
            overlayImgRef.current.src = imageArray2[imageIndex]
          }
        }
      }
    })
    
    // Initialize overlay image as hidden (use autoAlpha so GSAP can animate)
    if (overlayImageRef.current) {
      gsap.set(overlayImageRef.current, { autoAlpha: 0 })
    }
    // initialize inner img src so it's ready to fade in
    if (overlayImgRef.current) {
      overlayImgRef.current.src = imageArray[0]
    }

    // Attach hover listeners to all person divs
    const attachHoverListeners = () => {
      const personDivs = document.querySelectorAll('.person')
      personDivs.forEach((person) => {
        const overlay = person.querySelector('.overlay')

        person.onmouseenter = () => {
          gsap.to(overlay, {
            height: '100%',
            duration: 0.2,
            ease: 'power2.out'
          })
        }

        person.onmouseleave = () => {
          gsap.to(overlay, {
            height: '0%',
            duration: 0.2,
            ease: 'power2.in'
          })
        }
      })
    }

    // Attach on initial mount
    attachHoverListeners()

    // HOVER IMAGE REVEAL
const persons = document.querySelectorAll(".person");

persons.forEach((person, index) => {

  const overlay = person.querySelector(".overlay");
  const imgUrl = imageArray2[index % imageArray2.length]; // choose image per person

  // MOUSE ENTER
  person.addEventListener("mouseenter", () => {
    overlayImgRef.current.src = imgUrl;

    gsap.to(overlayImageRef.current, {
      autoAlpha: 1,          
      duration: 0.3,
      ease: "power2.out"
    });

    gsap.to(overlay, {
      height: "100%",
      duration: 0.2,
      ease: "power2.out"
    });
  });

  // MOUSE LEAVE
  person.addEventListener("mouseleave", () => {
    gsap.to(overlayImageRef.current, {
      autoAlpha: 0,          // fade out + hidden
      duration: 0.3,
      ease: "power2.in"
    });

    gsap.to(overlay, {
      height: "0%",
      duration: 0.2,
      ease: "power2.in"
    });
  });

});


  })
  return (
    <div className="text-black">
      <div className="section-1">
      <div ref={ImgDivRef} className="lg:h-[20vw] h-[30vw] lg:rounded-4xl rounded-xl absolute lg:top-48 -top-10 left-[29.5vw] overflow-hidden">
        <img ref={ImgRef} className="h-full w-full object-cover" src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="" />
      </div>
      <div className="lg:mt-[52vh] mt-[28vh] relative font-[font2]">
      <div className="lg:text-[20vw] text-[18vw] lg:leading-[35vh] leading-[8vh] text-center ">SEVEN7Y <br /> TWO</div>
      <div className="lg:pl-[44%] p-2 lg:mt-5 my-20">
        <p className="lg:text-5xl text-xl font-[font2] lg:leading-[6.5vh] leading-[3.5vh]">&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; We're inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
      </div>
      </div>
      </div>

      <div className="section-2 h-full w-full py-[10vw]">
        <div className="relative">
         <div className="person">
              <div className="cursor-pointer text-black flex relative justify-between border-t-2 overflow-hidden">
                <p className="lg:pt-2 pt-1.5 lg:pl-2 pl-1.5 z-40 font-[font2] lg:text-[1.13vw] text-[2.5vw]">Account executive</p>
                <h2 className="lg:p-5 p-3 pr-1 z-40 font-[font2] uppercase lg:text-[3vw] text-[4vw] leading-[2.5vw]">Sophie Auger</h2>
                <div className="overlay h-0 w-full absolute top-0 left-0 bg-[#D3FD50] z-0 origin-top"></div>
              </div>
         </div>

          <div className="person">
                <div className="cursor-pointer text-black flex relative justify-between border-t-2 overflow-hidden">
                  <p className="lg:pt-2 pt-1.5 lg:pl-2 pl-1.5 z-40 font-[font2] lg:text-[1.13vw] text-[2.5vw]">Business Lead</p>
                  <h2 className="lg:p-5 p-3 pr-1 z-40 font-[font2] uppercase lg:text-[3vw] text-[4vw] leading-[2.5vw]">Carl Godbout</h2>
                  <div className="overlay h-0 w-full absolute top-0 left-0 bg-[#D3FD50] z-0 origin-top"></div>
                </div>
          </div>

          <div className="person">
                <div className="cursor-pointer text-black flex relative justify-between border-t-2 overflow-hidden">
                  <p className="lg:pt-2 pt-1.5 lg:pl-2 pl-1.5 z-40 font-[font2] lg:text-[1.13vw] text-[2.5vw]">Account Executive</p>
                  <h2 className="lg:p-5 p-3 pr-1 z-40 font-[font2] uppercase lg:text-[3vw] text-[4vw] leading-[2.5vw]">Sophie Auger</h2>
                  <div className="overlay h-0 w-full absolute top-0 left-0 bg-[#D3FD50] z-0 origin-top"></div>
                </div>
          </div>

          <div className="person">
                  <div className="cursor-pointer text-black flex relative justify-between border-t-2 overflow-hidden">
                    <p className="lg:pt-2 pt-1.5 lg:pl-2 pl-1.5 z-40 font-[font2] lg:text-[1.13vw] text-[2.5vw]">Account Manager</p>
                    <h2 className="lg:p-5 p-3 pr-1 z-40 font-[font2] uppercase lg:text-[3vw] text-[4vw] leading-[2.5vw]">Stephanie Brunelle</h2>
                    <div className="overlay h-0 w-full absolute top-0 left-0 bg-[#D3FD50] z-0 origin-top"></div>
                  </div>
          </div>

          <div className="person">
                  <div className="cursor-pointer text-black flex relative justify-between border-t-2 overflow-hidden">
                    <p className="lg:pt-2 pt-1.5 lg:pl-2 pl-1.5 z-40 font-[font2] lg:text-[1.13vw] text-[2.5vw]">EVP & Managing Director</p>
                    <h2 className="lg:p-5 p-3 pr-1 z-40 font-[font2] uppercase lg:text-[3vw] text-[4vw] leading-[2.5vw]">Pierre-Luc Paiement</h2>
                    <div className="overlay h-0 w-full absolute top-0 left-0 bg-[#D3FD50] z-0 origin-top"></div>
                  </div>
          </div>

            <div className="person">
                    <div className="cursor-pointer text-black flex relative justify-between border-t-2 overflow-hidden">
                      <p className="lg:pt-2 pt-1.5 lg:pl-2 pl-1.5 z-40 font-[font2] lg:text-[1.13vw] text-[2.5vw]">Art Director</p>
                      <h2 className="lg:p-5 p-3 pr-1 z-40 font-[font2] uppercase lg:text-[3vw] text-[4vw] leading-[2.5vw]">Mélanie Laviolette</h2>
                      <div className="overlay h-0 w-full absolute top-0 left-0 bg-[#D3FD50] z-0 origin-top"></div>
                    </div>
            </div>

            <div className="person">
                    <div className="cursor-pointer text-black flex relative justify-between border-t-2 overflow-hidden">
                      <p className="lg:pt-2 pt-1.5 lg:pl-2 pl-1.5 z-40 font-[font2] lg:text-[1.13vw] text-[2.5vw]">Director of Strategy</p>
                      <h2 className="lg:p-5 p-3 pr-1 z-40 font-[font2] uppercase lg:text-[3vw] text-[4vw] leading-[2.5vw]">Michèle Riendeau</h2>
                      <div className="overlay h-0 w-full absolute top-0 left-0 bg-[#D3FD50] z-0 origin-top"></div>
                    </div>
            </div>

            <div className="person">
                    <div className="cursor-pointer text-black flex relative justify-between border-t-2 overflow-hidden">
                      <p className="lg:pt-2 pt-1.5 lg:pl-2 pl-1.5 z-40 font-[font2] lg:text-[1.13vw] text-[2.5vw]">Strategist</p>
                      <h2 className="lg:p-5 p-3 pr-1 z-40 font-[font2] uppercase lg:text-[3vw] text-[4vw] leading-[2.5vw]">Béatrice Roussin</h2>
                      <div className="overlay h-0 w-full absolute top-0 left-0 bg-[#D3FD50] z-0 origin-top"></div>
                    </div>
            </div>

            <div className="person">
                    <div className="cursor-pointer text-black flex relative justify-between border-t-2 overflow-hidden">
                      <p className="lg:pt-2 pt-1.5 lg:pl-2 pl-1.5 z-40 font-[font2] lg:text-[1.13vw] text-[2.5vw]">Art Director</p>
                      <h2 className="lg:p-5 p-3 pr-1 z-40 font-[font2] uppercase lg:text-[3vw] text-[4vw] leading-[2.5vw]">Philippe Perreault</h2>
                      <div className="overlay h-0 w-full absolute top-0 left-0 bg-[#D3FD50] z-0 origin-top"></div>
                    </div>
            </div>

            <div className="person">
                      <div className="cursor-pointer text-black flex relative justify-between border-t-2 overflow-hidden">
                        <p className="lg:pt-2 pt-1.5 lg:pl-2 pl-1.5 z-40 font-[font2] lg:text-[1.13vw] text-[2.5vw]">Account Manager</p>
                        <h2 className="lg:p-5 p-3 pr-1 z-40 font-[font2] uppercase lg:text-[3vw] text-[4vw] leading-[2.5vw]">Lou Gravel-Jean</h2>
                        <div className="overlay h-0 w-full absolute top-0 left-0 bg-[#D3FD50] z-0 origin-top"></div>
                      </div>
            </div>

            <div className="person">
                      <div className="cursor-pointer text-black flex relative justify-between border-t-2 overflow-hidden">
                        <p className="lg:pt-2 pt-1.5 lg:pl-2 pl-1.5 z-40 font-[font2] lg:text-[1.13vw] text-[2.5vw]">Account Manager</p>
                        <h2 className="lg:p-5 p-3 pr-1 z-40 font-[font2] uppercase lg:text-[3vw] text-[4vw] leading-[2.5vw]">Lawrence Meunier</h2>
                        <div className="overlay h-0 w-full absolute top-0 left-0 bg-[#D3FD50] z-0 origin-top"></div>
                      </div>
            </div>

            <div className="person">
                        <div className="cursor-pointer text-black flex relative justify-between border-t-2 overflow-hidden">
                          <p className="lg:pt-2 pt-1.5 lg:pl-2 pl-1.5 z-40 font-[font2] lg:text-[1.13vw] text-[2.5vw]">Senior Director</p>
                          <h2 className="lg:p-5 p-3 pr-1 z-40 font-[font2] uppercase lg:text-[3vw] text-[4vw] leading-[2.5vw]">Isabelle Beauchemin</h2>
                        <div className="overlay h-0 w-full absolute top-0 left-0 bg-[#D3FD50] z-0 origin-top"></div>
              </div>

        </div>

            <div className="person">
                    <div className="cursor-pointer text-black flex relative justify-between border-t-2 overflow-hidden">
                      <p className="lg:pt-2 pt-1.5 lg:pl-2 pl-1.5 z-40 font-[font2] lg:text-[1.13vw] text-[2.5vw]">Graphic Designer</p>
                      <h2 className="lg:p-5 p-3 pr-1 z-40 font-[font2] uppercase lg:text-[3vw] text-[4vw] leading-[2.5vw]">Oliver Duclos</h2>
                      <div className="overlay h-0 w-full absolute top-0 left-0 bg-[#D3FD50] z-0 origin-top"></div>
                    </div>
            </div>

            <div className="person">
              <div className="cursor-pointer text-black flex relative justify-between border-t-2 overflow-hidden">
                <p className="lg:pt-2 pt-1.5 lg:pl-2 pl-1.5 z-40 font-[font2] lg:text-[1.13vw] text-[2.5vw]">Associate Creative Director</p>
                <h2 className="lg:p-5 p-3 pr-1 z-40 font-[font2] uppercase lg:text-[3vw] text-[4vw] leading-[2.5vw]">Joël Letarte</h2>
                <div className="overlay h-0 w-full absolute top-0 left-0 bg-[#D3FD50] z-0 origin-top"></div>
              </div>
            </div>

            <div className="person">
              <div className="cursor-pointer text-black flex relative justify-between border-t-2 overflow-hidden">
                <p className="lg:pt-2 pt-1.5 lg:pl-2 pl-1.5 z-40 font-[font2] lg:text-[1.13vw] text-[2.5vw]">Creative Director</p>
                <h2 className="lg:p-5 p-3 pr-1 z-40 font-[font2] uppercase lg:text-[3vw] text-[4vw] leading-[2.5vw]">Chantal Gobeil</h2>
                <div className="overlay h-0 w-full absolute top-0 left-0 bg-[#D3FD50] z-0 origin-top"></div>
              </div>
            </div>

              <div className="person pb-20">
                <div className="cursor-pointer text-black flex relative justify-between border-y-2 overflow-hidden">
                  <p className="lg:pt-2 pt-1.5 lg:pl-2 pl-1.5 z-40 font-[font2] lg:text-[1.13vw] text-[2.5vw]">Art Director</p>
                  <h2 className="lg:p-5 p-3 pr-1 z-40 font-[font2] uppercase lg:text-[3vw] text-[4vw] leading-[2.5vw]">Alex Sauvageau</h2>
                  <div className="overlay h-0 w-full absolute top-0 left-0 bg-[#D3FD50] z-0 origin-top"></div>
                </div>
              </div>


          <div>
            <div ref={overlayImageRef} className="lg:h-[30vw] h-[30vw] lg:rounded-4xl rounded-xl absolute lg:top-3 top-10 left-[29.5vw] overflow-hidden">
        <img ref={overlayImgRef} className="h-full w-full object-cover" src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="" />
      </div>
          </div>

        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Agence;
