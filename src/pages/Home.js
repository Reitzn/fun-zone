import React from "react";
import nickImg from '../img/Nick-Reitz.jpeg'
export default function Home() {
  return (
    <>
      <div>
        <h1>Nick Retiz</h1>

        <div class="row">
                <div class="col-md-4">
                    <div class="profile-image">
                        <img src={nickImg} alt="Nick Reitz" style={{maxWidth: '100%', maxHeight: '100%'}} />
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="about-me">
                        <h3>About Me</h3>
                        <p>
                            Hello! My name is Nick Reitz. I am currently working on my graduate degree in 
                            Computer Science at Grand Valley State University. I have a bachelor’s in
                            Computer Information Systems form Northwood University and have a few years of enterprise level software development expearnce. 
                        </p>

                        <p>
                            I currently work as a Software Engineer building out Adobe Experience Manager
                            components. Previously, I worked as a Software Developer for Auto Owners Insurance
                            building out ECM solutions.
                        </p>

                        <p>
                            I love to travel and take photos when I’m not working. One of my goals is to visit every national park. While not traviling or taking photos, I enjoy programing. Check out some of my work below.
                        </p>
                    </div>

                    <div class="icon-links">
                        <a href="https://github.com/Reitzn" target="_blank" rel="noopener noreferrer" class="icon">
                            <i class="bi bi-github"></i>
                    </a>
                    <a href=" https://www.instagram.com/rockreitz" target="_blank" rel="noopener noreferrer" class="icon">
                                <i class=" bi bi-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/nicholas-reitz-3a232373/" target="_blank" rel="noopener noreferrer" class="icon">
                            <i class="bi bi-linkedin"></i>
                        </a>
                    </div>


                </div>
            </div>
            </div>
    </>
  );
}
