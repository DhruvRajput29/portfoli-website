import ProjectNavbar from "../components/Project_components/ProjectNavbar";
import Upcoming from "../components/Upcoming_components/Upcoming";



const UpcomingPage = () => {
  return (
    <div className="min-h-screen bg-(--bg-primary) text-(--text-primary)">
      <ProjectNavbar/>
      <Upcoming/>
    </div>
  );
};

export default UpcomingPage;