import React from "react";

let arr = [{
  heading: "Royal Brothers",
  desc:"As a team of 3, we made the end-to-end clone of the royal brothers website, a web application to rent two-wheelers.",
  tech:"HTML | CSS | JavaScript | React | Axios | Node | Express | MongoDB ",
  responsibilities1 :"Created Navbar and made it accessible to other contributors, Laid out the database schema.",
  responsibilities2:"Developed the Monthly rentals page and left navbar, Integrated the frontend and backend.",
  git:"https://github.com/janakbharadwaj/royal_brothers",
  blog:"https://janakbharadwaj.hashnode.dev/janak-royal-brothers",
  demo:"https://royalbrothersak.netlify.app/",
  projectImg:"https://user-images.githubusercontent.com/39058941/111019686-ec977e00-83e6-11eb-81e8-84625a9e7576.png"
},
{
  heading: "Product Hunt",
  desc:"An online product portal where users can browse, research, and post products, we were the team of 4",
  tech:"HTML | CSS | JavaScript | React | JSON mock server | Axios",
  responsibilities1 :"Scraped data from the original product hunt, Developed pixel-perfect UI of the Discussions page.",
  responsibilities2:"Implemented features like Single Discussion Redirct, Modal, Filters, Git handling.",
  git:"https://github.com/nitansh11/product-hunt",
  blog:"https://janakbharadwaj.hashnode.dev/janak-bharadwaj-product-hunt",
  demo:"https://producthuntalpha.netlify.app/",
  projectImg:"https://user-images.githubusercontent.com/73184042/117856778-ae64f080-b2a9-11eb-82ab-80441582553f.JPG"
},
{
  heading: "MedicJAM",
  desc:"Medic-based product where user can view hospitals and its features, user can also enquire about oxygen, beds and doctor availability.",
  tech:"Next | MongoDB | JavaScript | Axios | Node | CSS",
  responsibilities1 :"Getting hold of new tech stack, Creating static design of product",
  responsibilities2:"Implementing features in best possible way in given time limit",
  git:"https://github.com/janakbharadwaj/CoderJAM",
  blog:"https://janakbharadwaj.hashnode.dev/medicjam",
  demo:"https://drive.google.com/file/d/11yy9Yce-UmPVEyH1L3nRw8EbWWeQZv7P/view?usp=sharing",
  projectImg:"https://user-images.githubusercontent.com/73184042/117850552-0a784680-b2a3-11eb-89be-5b066a91fd83.JPG"
},
{
  heading: "Chat Application",
  desc:"Group messaging application, the user will be able to join different groups available, the user will get a notification on each group message.",
  tech:"JavaScript | React |  CSS | Socket.io | Express",
  responsibilities1 :"Implementing group messages feature, Viewing all group members",
  responsibilities2:"Understanding socket.io, implemeting frameworks like antd",
  git:"https://github.com/janakbharadwaj/chat-application",
  blog:"https://janakbharadwaj.hashnode.dev/my-chat-application",
  demo:"https://drive.google.com/file/d/1Tzc3gM4MVwy6ZL_uC2E4Awl5Ys3dhgYf/view",
  projectImg:"https://user-images.githubusercontent.com/73184042/117853063-9b502180-b2a5-11eb-9ed2-3fbce349a430.JPG"
},
{
  heading: "Carb Manager",
  desc:"A Place where a fitness freak can find all the information needed regarding exercises, diet, yoga, and personal training.",
  tech:" HTML | CSS | JavaScript",
  responsibilities1 :"Developed pixel-perfect UI of the Exercises and data visualization pages, Git handling and error resolving",
  responsibilities2:"Implemented features like Single Exercise Redirct, Modal, Filters, Search, Team collaboration and work division",
  git:"https://github.com/nitansh11/scandium",
  demo:"https://drive.google.com/file/d/1VR4EnDsWhMIkEo6o0sF1if1g7389ToK4/view?usp=sharing",
  blog:"https://janakbharadwaj-adluri.medium.com/creating-dynamic-web-pages-with-html-css-and-javascript-7c12c21a069d",
  projectImg:"https://user-images.githubusercontent.com/73184042/117856551-6219b080-b2a9-11eb-8178-852ab06e2618.JPG"
},
{
  heading: "Nifty",
  desc:"We were a team of 2, with a very basic knowledge of development we made the clone of the Nifty website which is a project management site.",
  tech:"HTML | CSS ",
  responsibilities1 :"Created basic UI of Landing page, clients page complete, Remote work adapatability.",
  responsibilities2:"GIT handling, merging branches and resolving conflicts on GIT, Login and readme",
  git:"https://github.com/janakbharadwaj/titanium",
  demo:"https://drive.google.com/file/d/1xWM_UGu08ww66ZJeQFMDaPnI73a0cjds/view?usp=sharing",
  blog:"https://janakbharadwaj-adluri.medium.com/making-a-replica-of-the-nifty-website-in-just-3-days-6aacde1b9f99",
  projectImg:"https://user-images.githubusercontent.com/73184042/117942374-9d0ef900-b328-11eb-9928-e99c3657e9a1.JPG"
}
]

const Projects = () => {

  return (
    <div className="projects">
      <div className="container">
        <div className="common">         
          <h1 className="mainHeader">Projects</h1>
        </div>
        <div className="row">
          {arr.map((item) => (
            <div className="col-4">
              <div className="project">
                <div className="projectHeading">{item.heading}</div>

                <img src={item.projectImg} alt='projectImg' className='projectImg'/>
                <br/>
                <div className='projectDesc'>{item.desc}</div>
                <button className='blogButton'>
                  <a href={item.blog} target="_blank" rel="noreferrer">
                    Blog
                  </a>
                </button>
                <br/>
                <h3 style={{color:"rgb(255,74,87)"}}>Tech Stack</h3>
                
                <div style={{lineHeight:"25px"}}>{item.tech}</div>
                <br/>                
                <div className='projectButtons'>
                  <button>
                    <a href={item.git} target="_blank" rel="noreferrer" className="btn">
                      Code
                    </a>
                  </button>
                  {/* <button>
                    <a href={item.blog} target="_blank" rel="noreferrer" className="btn">
                      Blog
                    </a>
                  </button> */}
                  <button>
                    <a href={item.demo} target="_blank" rel="noreferrer" className="btn">Demo</a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
