import "./App.css";
import devPhoto from "./assets/image1.jpg";
import analystPic from "./assets/image3.jpg";
import aiPhoto from "./assets/image4.jpg";
import mpesaPic from "./assets/image6.jpg";

export default function Home() {
  return (
    <>
      <div className="home-div">
        <div className="intro-div">
          <h1>
            Welcome, I am Mboya—a distinguished software developer,
            <br /> data analyst, and AI architect. As a digital creator and
            consultant, I specialize in AI integration, M-Pesa integration,
            chatbot development, SEO, and cutting-edge digital solutions that
            drive innovation,
            <br />
            growth and empower businesses <br />
            in the modern age.
          </h1>
        </div>
        <div className="skills-section">
          <div className="skills-div">
            <div>
              <h2>Software Developer</h2>
              <p>
                He is a frontend wizard, backend mastermind, and a UI/UX
                sculptor. JavaScript? His quirky little favorite. Python?So
                sleek, it feels like cheating. Code is his playground, and
                creativity is the game! 🚀✨
              </p>
            </div>
            <div>
              <img src={devPhoto} alt="dev photo"></img>
            </div>
          </div>
          <div className="skills-div">
            <div>
              <img src={analystPic} alt="analyst photo"></img>
            </div>
            <div>
              <h2>Data Analyst</h2>
              <p>
                He's a data detective, turning messy numbers into crystal-clear
                insights. Cleaning, visualizing, interpreting—he spots patterns
                others miss. Data tells a story, and he's the storyteller! 📊✨
              </p>
            </div>
          </div>
          <div className="skills-div">
            <div>
              <h2>AI Solutions Architect</h2>
              <p>
                He's an AI architect, building smart solutions that bring ideas
                to life! From crafting chatbots to fine-tuning AI models, he
                speaks the language of machines—turning prompts into
                magic(prompt engineering) and data into intelligence. 🤖✨🚀
              </p>
            </div>
            <div>
              <img src={aiPhoto} alt="ai photo"></img>
            </div>
          </div>
          <div className="skills-div">
            <div>
              <img src={mpesaPic} alt="mpesa photo"></img>
            </div>
            <div>
              <h2>Mpesa Integration</h2>
              <p>
                Bridging businesses with M-Pesa magic! 🚀 Seamlessly integrating
                M-Pesa via the Daraja platform to make transactions effortless
                and customer experiences smoother than ever. Tap, pay, done!
                📲✨
              </p>
            </div>
          </div>
          <div className="skills-div">
            <div>
              <h2>Search Engine Optimization (SEO)</h2>
              <p>
                Mastering the art of discoverability! 🚀 Elevating your
                website’s visibility, boosting organic traffic, and ensuring it
                ranks where it matters. From keywords to algorithms—every search
                leads straight to you! 🔍✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
