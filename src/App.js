import './App.css';
import React, {useState} from 'react';
import {FaArrowLeft, FaBriefcase, FaCogs, FaGraduationCap, FaUser, FaArrowRight, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {RxDotFilled} from 'react-icons/rx';

/*

  Content:


    - Blurbs
    - Slideshow images
    - UxV Control
    - Website icon

  Sidebar:
    - Social Links (at bottom of sidebar)
      - Gmail
      - Linkedin
      - Facebook

  Main tabs:
    - Include links to github repos (if available)
    - Add UxV controller project
    - Look into slideshow scrolling
    - Design expand/close assets




    Do I want to go for a sidebar design or a top-down


    - I feel sidebar can better show off certain things


    - LHS has my name, my profession and a photo with 3 parts of "About", "Experience" and "Projects" with contact information below

    - RHS has the information
      - A blurb containing my bio
      - My experience and Education

    - top-bar could be good

    - Design the CSS for the general topic element

    Also need to include the job title and date range

    About:

    Hi, I'm currently a student at the University of Warwick etc. etc. (Just basically stuff from CV)
*/


const eduBlurb = (<div>Achieved a First Class in all years of study at the university so far. Currently studying 23/24 for my Integrated Masters degree in Computer Science </div>)
const eduTags =["Java", "C", "Python", "SQL", "C++", "Haskell"]
const eduSlides = [
  "./images/SamJak.png",
  "./images/warwick.png",
  "./images/lorax.png"
]

const loraxBlurb = (<div>Worked as a intern developer across two summers for a collective 6 months of industry experience. 
                    Was able to work directly with the CTO to learn the proprietary software and implement live changes to both the front-end and back-end of the system in addition to system testing and customer support. 
                    Gained experience first-hand in a scrum-based, agile-focused environment, communicating and coordinating effectively across different teams throughout different sprints.
                    </div>)
const loraxTags = ["C#", "SQL", "AWS", "S3", "CloudWatch", "Azure DevOps"]

const mentoBlurb = (<div>A web application designed to initiate and facilitate mentor/mentee pairings within a company implemented using the <b>SpringBoot</b> framework with <b>Vaadin</b> serving as the front-end.
                    <br/>
                    <br/>
                     Was entered into a competition judged by <b>Deutsche Bank and was awarded second place</b> for our efforts. Worked as a joint project manager for this project.</div>)
const mentoTags = ["Spring Boot", "Vaadin", "MySQL", "Java", "GitHub", "DigitalOcean"]
const mentoSlides = [
  "./images/Mento/home.png",
  "./images/Mento/dashboard.png",
  "./images/Mento/mentor.png",
  "./images/Mento/meeting.png"
]
const mentoMore =(<div>
      For this project, I worked in a group of 7 to implement the deliverables requested by Deutsche Bank. This included allowing users to create a profile as a mentor/mentee listing their interests on the software, which would then create recommendations for pairings based on matching interests.
      Pairings would be able to request meetings with on another, create milestones with deadlines that can be tracked and analysed, as well as including chat functionality between mentor and mentee. Reviews could also be written about mentors, in which we implemented a pre-trained NLP agent to more intricately detect whether a review was positive or negative, which would then be 
      used for future recommendations for new pairings.
      <br/>
      <br/>
      Initially in this project, I worked on the front-end of the application, learning Vaadin for the first time and using its tools to produce the general dashboard interface, in addition to being the one in charge of linking the back-end databases produced from other members to the front-end dashboard I produced.
      As time went on however, I took on more responsibility within the project, working as a full-stack developer and becoming the joint project manager, helping other members learn the framework and overseeing their progress.
</div>)

const timeBlurb = (<div>An Android/iOS mobile application aimed for parents with children that have learning disabilities, providing an assortment of tools to prepare the child for time-out whilst providing useful advice. 
                  <br/> <br/>
                  For this project I worked directly with the University of Warwick Psychology department to convert a mobile application from a strictly iOS dependent framework to a cross-platform one for more accessibility during beta testing. 
                  
                  </div>)
const timeTags = ["JavaScript", "Android Studio", "Apache Cordova"]
const timeMore = (<div>Initially, this application had a rough framework written in Swift, which I was able to convert it into Javascript/HTML using the Apache Cordova framework, with Android Studio used to emulate the app.
                  
</div>)
const timeSlides = [
  "./images/SmartTimeout/SmartTimeoutHome.png",
  "./images/SmartTimeout/SmartTimeoutTimer.png",
  "./images/SmartTimeout/SmartTimeoutSettings.png"
  
]

const tetrisBlurb = (<div>An independent research project in my third year of study aimed to apply deep reinforcement learning techniques using Python and PyTorch in order to train a deep neural network how to play and subsequently master the puzzle game Tetris.<br/><br/> For this study I was awarded a First with a mark of 86 overall.</div>)
const tetrisTags = ["Python", "PyTorch", "PyQt5", "TensorBoard"]
const tetrisMore = (<div>After building Tetris from scratch in Python, I researched into different Deep Reinforcement Learning algorithms, and decided on <b>Deep Q-Learning</b> due to its suitable towards complicated environments, which Tetris is 
                    due to its random nature and endless onslaught of pieces making it theoretically complex in its design. The game environment was then abstracted down into observation, action and reward states in order to use as inputs and outputs for the neural network, which would slowly learn
                    over thousands of epochs how the environment works and how to effectively score points and survive in the game through clearing rows.
                    <br/> <br/>
                    
                    The metric used to assess performance was the number of lines cleared, which at the time of finishing the project
                    (May 2023), the peak human performance had cleared 4988 rows in a single game. Whilst my solution had a lower average of 1505.7 rows cleared per game, the peak performance of my agent was 9989 rows in a single game, almost double that of the best human performance.
                    <br/> <br/>
                    Whilst the agent was less successful than pre-existing AI solutions, from research papers found using the same algorithm my solution was <b> &gt; 5 times</b> more successful on average.   
                     </div>)
const tetrisSlides = [
  "./images/Tetris/grid.png",
  "./images/Tetris/decision.png",
  "./images/Tetris/agent.png"
]


const uxvBlurb = (<div>This project is in direct collaboration with Thales, and is focused on tackling the problem of improving perception for human controlled UxVs in low visibility environments such as fog/smoke or at night where a standard camera feed is unsuitable.
                In these scenarios, the vehicles themselves are sensor-rich and so our project is focused on investigating the feasibility of generated a synthetic environment or mixed reality solution to improve visibility using sensors such as Infrared/Lidar/Radar.
                <br/><br/>
                Planned to be completed over the 23/24 academic year.
</div>)
const uxvTags = ["Synthetic Environment", "Robotics", "Sensor"]

class SectionTag extends React.Component{
  render(){
    return(
      
      <AnchorLink href={"#"+ this.props.link} class="text-white text-3xl my-3 hover:font-bold self-start ">
        {this.props.tag}
      </AnchorLink>
    )
  }

}
class SectionTitle extends React.Component{
  render(){
    return(
      <div id={this.props.id} class="font-bold text-4xl text-left m-5 w-3/5">
        {this.props.title}
      </div>

    )
  }
}
class Tag extends React.Component{
  render(){
    return(
      <div class="rounded-full bg-gray-300 hover:bg-gray-400 items-center p-3 ml-2">
        {this.props.tag}
      </div>
    );
  }
}
function SlideShow(props){
    const [currentIndex, setCurrentIndex] = useState(0)
    const prevSlide = () => {
      setCurrentIndex(Math.max(0, currentIndex - 1));
    }
    const nextSlide = () => {
      setCurrentIndex(Math.min(props.slides.length-1, currentIndex + 1));
    }
    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
    }

  return(

    <div class="relative w-full m-auto h-[600px] group">
      <div style={{backgroundImage: `url(${require("" + props.slides[currentIndex])})`}} className="w-full h-full bg-center bg-contain bg-no-repeat duration-500">
          
      </div>

      <div class="hidden group-hover:block hover:text-gray-500 absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 cursor-pointer transition-opacity duration-500">
        <FaArrowLeft onClick={prevSlide} size={30}/>
      </div>
      <div class="hidden group-hover:block hover:text-gray-500  absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 cursor-pointer">
        <FaArrowRight onClick={nextSlide} size={30}/>
      </div>
      <div class="flex top-4 justify-center py-2">
        {props.slides.map((slide, slideIndex) => (
          <div class={(slideIndex === currentIndex) ? "text-3xl" :"text-2xl"}>
            <RxDotFilled />
          </div>
        )
        
        )}
      </div>
    </div>




  );
}

function Topic(props){


    const [isReadMore, setIsReadMore] = useState(false);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };

    var moreDisplay;
    var moreButton;
    if(props.more){
      moreDisplay = (            
        <div class={"text-1xl transition-all ease-in-out duration-100 " + (isReadMore ? "animate-fadeIn" : "animate-fadeOut hidden")} >
          <div class="py-5 text-lg">
          {props.moreBlurb}
          </div>
        <SlideShow slides={props.slides} />
    </div>)

        moreButton = (
          <div class={"h-[50px] w-[50px] cursor-pointer "+ (isReadMore ? "bg-[url(./images/smallMinus-50.png)]" : "bg-[url(./images/smallPlus-50.png)]") +
          " " + (isReadMore ? "hover:bg-[url('./images/minus-50.png')]" : "hover:bg-[url('./images/plus-50.png')]" )}
              onClick={toggleReadMore}
          ></div>)
    }


    return (

      <div class={"border border-solid flex-col border-5 border-black m-5 p-5 w-3/5 rounded-lg shadow-lg transition-all ease-in-out duration-100 " + (isReadMore ? "max-h-[2000px]" : "max-h-96" )}>
        
        <div class="flex-row flex pb-10">

          <div class="flex-col w-4/5">
            <div class="text-left underline text-3xl">
              {props.title}
            </div>
            <div class="text-left italic text-2xl my-2">
              {props.job}
            </div>
            <div className='text-lg my-2 pr-2'>
              {props.blurb}
            </div>
            {moreDisplay}



          </div>
          <div class="justify-self-end w-1/5">
            <img src={require("./images/" + props.imgName + ".png")} alt="SamJak" width="200"/>
          </div>
        </div>
        <div class="flex-row flex justify-between">
          <div class="flex-row flex">
            {props.tags.map(item => ( <Tag tag={item}/>))}

          </div>
          
          

          <div class="flex justify-end w-1/5">

            {moreButton}
            {/*
            <img src={isReadMore ? require("./images/smallMinus.png") : require("./images/SamJak.png")} alt="Read More" width="50" onClick={toggleReadMore}
                 class={(isReadMore ? "bg-[url('./images/minus.png')]" : "bg-[url('./images/SamJak.png')]") + " hover:invisible"}
             />
            */}


          </div>
        </div>

        


      </div>

  );
  }

function Portfolio() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div class="flex flex-row">
      <div class="bg-emerald-400 w-1/5 h-full flex flex-col items-center p-8 fixed">
        <div class="overflow-hidden rounded-full border-solid border-white border border-4 mb-5">
          <img src={require("./images/IMG_20220111_152212_418.jpg")} alt="SamJak" width="200"/>
        </div>

        <div class="text-white font-bold text-4xl">
          Sam Dagnall
        </div>

        <div class="flex flex-row my-4 justify-between w-2/5">
          <FaGithub class="text-white text-4xl cursor-pointer hover:text-gray-200" onClick={() => openInNewTab("https://github.com/sdagn1")} />
          <FaLinkedin class="text-white text-4xl cursor-pointer hover:text-gray-200" onClick={() => openInNewTab("https://www.linkedin.com/in/sam-dagnall-116b78251/")}/>
        </div>
        

        <div class="flex-col flex w-3/5">
          <div class="flex flex-row">
            <FaUser class="self-center text-white text-3xl mr-2"/>
            <SectionTag link="about" tag="About Me" />
          </div>

          <div class="flex flex-row">
          <FaBriefcase class="self-center text-white text-3xl mr-2"/>
            <SectionTag link="exp" tag="Experience" />
          </div>
          <div class="flex flex-row">
            <FaGraduationCap class="self-center text-white text-3xl mr-2"/>
            <SectionTag link="edu" tag="Education" />
          </div>
          <div class="flex flex-row">
          <FaCogs class="self-center text-white text-3xl mr-2"/>
          <SectionTag link="pro" tag="Projects" />
          </div>

        </div>

      </div>
      <div class="w-1/5 h-screen"/>
      <div class="flex flex-col items-center flex-grow h-screen py-10">
        <SectionTitle id="about" title="About Me"/>
        <div class="text-left w-3/5 text-2xl">
        I am a third year Computer Science student currently studying at the University of Warwick, with a love for problem solving and a desire to gain more experience as a software developer through both extra-curricular projects and professional industry experience. 
        <br/><br/>
        Outside of my degree, I have an interest in gaming and e-sports, taking an active role in the University of Warwick E-Sports society as an admin and social exec for the League of Legends community, where I’m in charge of hosting social in-person events for members.
        <br/><br/>
        <u>Currently looking for graduate positions for Summer 2024.</u>

        </div>

        <SectionTitle id="exp" title="Experience" />
        <Topic title="Lorax EPI" job="Junior Software Engineer" blurb={loraxBlurb} tags={loraxTags} more={false} imgName="lorax"/>
        <SectionTitle id="edu" title="Education" />
        <Topic title="University of Warwick" job="MEng Computer Science" blurb={eduBlurb} tags={eduTags} more={false} imgName="warwick"/>
        <SectionTitle id="pro" title="Projects"/>
        <Topic title="Data to Synthethic Environment for UxV Control" blurb={uxvBlurb} tags={uxvTags} more={false} imgName="thales"/>
        <Topic title="Mento" blurb={mentoBlurb} tags={mentoTags} more={true} moreBlurb={mentoMore} imgName="mento31" slides={mentoSlides}/>
        <Topic title="Using Deep Reinforcement Learning to Solve Tetris" blurb={tetrisBlurb} tags={tetrisTags} more={true} moreBlurb={tetrisMore} imgName="SamJak" slides={tetrisSlides}/>
        <Topic title="Smart Timeout" blurb={timeBlurb} tags={timeTags} more={true} moreBlurb={timeMore} imgName="circle-Logo" slides={timeSlides}/>
        <div class="text-white">aaa</div>



      </div>
      
    </div>
  );
}

export default Portfolio;
