import Sidebar from './Sidebar';
import MainContent from './MainContent';

import '../styles/components/homepage.sass';

const HomePage = () => {
  return (
    <div className="portifolio">
      <h1>Eduarda Grigório</h1>
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default HomePage;