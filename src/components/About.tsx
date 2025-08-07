import Xarrow from "react-xarrows";
import { FaSuperscript, FaInfinity, FaDatabase, FaAtom, FaFlask, FaCalculator, FaMicroscope, FaUser, FaUsers } from "react-icons/fa";

const dashedArrow = true;
const arrowColor = "#a1a1a1";   {/*bg-gray-200 : #E5E7EB*/} 

const subjects = [
  { name: "Advanced Functions", icon: <FaSuperscript className="text-blue-500 h-5 w-5" /> },
  { name: "Calculus and Vectors", icon: <FaInfinity className="text-blue-500 h-5 w-5" /> },
  { name: "Data Management", icon: <FaDatabase className="text-blue-500 h-5 w-5" /> },
  { name: "Physics GR11/12", icon: <FaAtom className="text-blue-500 h-5 w-5" /> },
  { name: "Chemistry GR11/12", icon: <FaFlask className="text-blue-500 h-5 w-5" /> },
  { name: "Math", icon: <FaCalculator className="text-blue-500 h-5 w-5" /> },
  { name: "Science", icon: <FaMicroscope className="text-blue-500 h-5 w-5" /> },
];

const modes = [
  {
    name: "1-on-1 Tutoring",
    icon: <FaUser className="h-16 w-16 text-blue-600" />,
    description: "Personalized, focused learning.",
    id: "mode-oneonone",
    color: "blue",
  },
  {
    name: "Group Tutoring",
    icon: <FaUsers className="h-16 w-16 text-blue-600" />,
    description: "Collaborative group sessions.",
    id: "mode-group",
    color: "blue",
  },
];

const About = () => (
  <section className="bg-gray-50 py-16 px-4">
    <div className="max-w-5xl mx-auto text-center relative">
      <p className="text-blue-600 font-semibold text-lg mb-2">Classes Supported</p>
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Subjects & Tutoring Modes</h2>
      <p className="text-lg text-gray-600 mb-10">
        I offer expert tutoring for high school students in a range of subjects, with flexible options to fit your needs.
      </p>
      {/* Subjects Row */}
      <div className="flex flex-wrap justify-center gap-8 mb-2 relative z-10" id="subjects-row">
        {subjects.map((subject, idx) => (
          <div
            key={subject.name}
            className="bg-transparent px-5 py-2 flex items-center gap-2 text-lg text-gray-800 min-w-[170px] text-center"
            id={`subject-${idx}`}
          >
            {subject.icon}
            <span className="ml-2">{subject.name}</span>
          </div>
        ))}
      </div>

      {/* Circles First Row */}
      <div className="flex justify-between items-center w-full max-w-2xl mx-auto">
        <div className="rounded-full bg-blue-600 shadow-lg" id="first-circle-left" />
        <div className="w-3 h-auto" id="first-circle-center" /> {/* Center invisible div for Xarrow target */}
        <div className="rounded-full bg-blue-600 shadow-lgw" id="first-circle-right" />
      </div>
      
      {/* Blank Div */}
      <div className="h-12" />
      
      {/* Circles Second Row */}
      <div className="flex justify-center items-center gap-72">
        <div
          className="w-2 h-2 rounded-full shadow-lg"
          id="second-circle-center"
          style={{ backgroundColor: arrowColor }}
        />
      </div>

      {/* Arrows from subject to mode */}

      <Xarrow
        start="subject-0"
        end="first-circle-left"
        color={arrowColor}
        strokeWidth={2}
        curveness={0.6}
        dashness={dashedArrow}
        showHead={false}
        headSize={4}
        path="smooth"
        startAnchor={{ position: "bottom", offset: { x: 0, y: 0 } }}
        endAnchor={{ position: "top", offset: { x: 0, y: 0 } }}
      />
      <Xarrow
        start="subject-1"
        end="second-circle-center"
        color={arrowColor}
        strokeWidth={2}
        curveness={0.8}
        dashness={dashedArrow}
        showHead={false}
        headSize={4}
        path="smooth"
        startAnchor={{ position: "bottom", offset: { x: 0, y: 0 } }}
        endAnchor={{ position: "top", offset: { x: 0, y: 0 } }}
      />
      <Xarrow
        start="subject-2"
        end="second-circle-center"
        color={arrowColor}
        strokeWidth={2}
        curveness={0.6}
        dashness={dashedArrow}
        showHead={false}
        headSize={4}
        path="smooth"
        startAnchor={{ position: "bottom", offset: { x: 0, y: 0 } }}
        endAnchor={{ position: "top", offset: { x: 0, y: 0 } }}
      />
      <Xarrow
        start="subject-3"
        end="first-circle-right"
        color={arrowColor}
        strokeWidth={2}
        curveness={0.6}
        dashness={dashedArrow}
        showHead={false}
        headSize={4}
        path="smooth"
        startAnchor={{ position: "bottom", offset: { x: 0, y: 0 } }}
        endAnchor={{ position: "top", offset: { x: 0, y: 0 } }}
      />
      <Xarrow
        start="subject-4"
        end="second-circle-center"
        color={arrowColor}
        strokeWidth={2}
        curveness={1}
        dashness={dashedArrow}
        showHead={false}
        headSize={4}
        path="smooth"
        startAnchor={{ position: "bottom", offset: { x: 0, y: 0 } }}
        endAnchor={{ position: "top", offset: { x: 0, y: 0 } }}
      />
      <Xarrow
        start="subject-5"
        end="second-circle-center"
        color={arrowColor}
        strokeWidth={2}
        curveness={0.6}
        dashness={dashedArrow}
        showHead={false}
        headSize={4}
        path="smooth"
        startAnchor={{ position: "bottom", offset: { x: 0, y: 0 } }}
        endAnchor={{ position: "top", offset: { x: 0, y: 0 } }}
      />
      <Xarrow
        start="subject-6"
        end="second-circle-center"
        color={arrowColor}
        strokeWidth={2}
        curveness={1}
        dashness={dashedArrow}
        showHead={false}
        headSize={4}
        path="smooth"
        startAnchor={{ position: "bottom", offset: { x: 0, y: 0 } }}
        endAnchor={{ position: "top", offset: { x: 0, y: 0 } }}
      />
      {/* Arrows from level 1 to 2 */}
      <Xarrow
        start="first-circle-left"
        end="second-circle-center"
        color={arrowColor}
        strokeWidth={2}
        curveness={1}
        dashness={dashedArrow}
        showHead={false}
        headSize={4}
        path="smooth"
        startAnchor={{ position: "bottom", offset: { x: 0, y: 0 } }}
        endAnchor={{ position: "top", offset: { x: 0, y: 0 } }}
      />
      <Xarrow
        start="first-circle-right"
        end="second-circle-center"
        color={arrowColor}
        strokeWidth={2}
        curveness={1}
        dashness={dashedArrow}
        showHead={false}
        headSize={4}
        path="smooth"
        startAnchor={{ position: "bottom", offset: { x: 0, y: 0 } }}
        endAnchor={{ position: "top", offset: { x: 0, y: 0 } }}
      />

      {/* Modes Row */}
      <div className="flex flex-col md:flex-row justify-center gap-12 mt-12 relative">
        {modes.map((mode) => (
          <div
            key={mode.name}
            className="bg-gray-50 rounded-xl shadow p-8 flex items-center gap-6 w-[380px] mx-auto min-h-[120px]"
            id={mode.id}
          >
            {mode.icon}
            <div className="text-left">
              <h4 className="text-2xl font-bold text-gray-800 mb-1">{mode.name}</h4>
              <p className="text-gray-600 text-base">{mode.description}</p>
            </div>
          </div>
        ))}
        {/* Xarrows */}
        <Xarrow
          start="second-circle-center"
          end="mode-oneonone"
          color={arrowColor}
          strokeWidth={2}
          curveness={0.9}
          dashness={dashedArrow}
          showHead={true}
          headSize={4}
          endAnchor={{ position: "right", offset: { x: 0, y: 0 } }}
        />
        <Xarrow
          start="second-circle-center"
          end="mode-group"
          color={arrowColor}
          strokeWidth={2}
          curveness={0.9}
          dashness={dashedArrow}
          showHead={true}
          headSize={4}
          endAnchor={{ position: "left", offset: { x: 0, y: 0 } }}
        />
      </div>
    </div>
  </section>
);

export default About;